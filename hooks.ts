import { useDispatch, useSelector } from 'react-redux';
import { TStore } from './types/store';
import { setIsShowRoles, updatePlayerData } from './stores/game';
import { TPlayer } from './types/player';

export const useStore = () => {
  const dispatch = useDispatch();
  const store = useSelector((state: { game: TStore }) => state.game);

  const updatePlayer = (id: TPlayer['id'], field: Partial<TPlayer>) => {
    dispatch(updatePlayerData({ id, ...field }));
  };

  const updateIsShowRoles = (value: boolean) => {
    dispatch(setIsShowRoles(value));
  };

  return { store, updatePlayer, updateIsShowRoles };
};
