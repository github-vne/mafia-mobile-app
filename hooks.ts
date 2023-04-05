import { useDispatch, useSelector } from 'react-redux';
import { TStore } from './types/store';
import { setIsShowRoles, updatePlayerData } from './stores/game';
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

  const votePlayers = useMemo(() => {
    return store.players.filter(({ isVote }) => !!isVote);
  }, [store.players]);

  return { store, votePlayers, updatePlayer, updateIsShowRoles };
};
