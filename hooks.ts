import { useDispatch, useSelector } from 'react-redux';
import { TStore } from './types/store';
import {
  resetGame,
  setIsShowRoles,
  toggleIsVoteMode,
  updatePlayerData,
  updatePlayersVote
} from './stores/game';
import { TPlayer } from './types/player';
import { useMemo } from 'react';

export const useStore = () => {
  const dispatch = useDispatch();
  const store = useSelector((state: { game: TStore }) => state.game);

  const updatePlayer = (id: TPlayer['id'], field: Partial<TPlayer>) => {
    dispatch(updatePlayerData({ id, ...field }));
  };

  const updateIsShowRoles = (value: boolean) => {
    dispatch(setIsShowRoles(value));
  };

  const handleResetGame = () => dispatch(resetGame());

  const votePlayers = useMemo(() => {
    const formatIdsArray = [...store.playersVote];
    store.players.forEach(({ id }) => {
      if (!formatIdsArray.includes(id)) formatIdsArray.push(id);
    });

    return formatIdsArray.map((playerId) => {
      return store.players.find(({ id }) => id === playerId);
    }) as TPlayer[];
  }, [store.players, store.playersVote]);

  const addPlayerVote = (id: TPlayer['id']) => {
    const newPlayersVote = [...store.playersVote];
    newPlayersVote.push(id);
    dispatch(updatePlayersVote(newPlayersVote));
  };

  const removePlayerVote = (id: TPlayer['id']) => {
    const newPlayersVote = [...store.playersVote].filter((el) => el !== id);
    dispatch(updatePlayersVote(newPlayersVote));
  };

  const resetPlayersVote = () => {
    dispatch(updatePlayersVote([]));
  };

  const updateIsVoteMode = () => {
    dispatch(toggleIsVoteMode());
  };

  return {
    store,
    votePlayers,
    addPlayerVote,
    removePlayerVote,
    updatePlayer,
    updateIsShowRoles,
    updateIsVoteMode,
    handleResetGame,
    resetPlayersVote
  };
};
