import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AVAILABLE_ROLES } from '../constants/role';
import { TPlayer } from '../types/player';

let tempRoles = [...AVAILABLE_ROLES];

const getRandomRole = () => {
  const roleIndex = Math.floor(Math.random() * tempRoles.length);
  const role = tempRoles[roleIndex];

  tempRoles.splice(roleIndex, 1);

  return role;
};

const PLAYERS: TPlayer[] = Array.from(new Array(10), (_, i) => i).map((el) => ({
  id: `id-${el}`,
  name: 'User #' + el,
  order: el + 1,
  role: getRandomRole(),
  fall: 0,
  voteCount: 0
}));

const gameSlice = createSlice({
  name: 'game',
  initialState: {
    players: PLAYERS,
    isShowRoles: false,
    name: ''
  },
  reducers: {
    setIsShowRoles(state, action: PayloadAction<boolean>) {
      state.isShowRoles = action.payload;
    },
    updatePlayerData(state, action: PayloadAction<Partial<TPlayer>>) {
      const { id, ...fields } = action.payload;
      state.players = state.players.map((player) => ({
        ...player,
        ...(player.id === id && fields)
      }));
    }
  }
});

export const { setIsShowRoles, updatePlayerData } = gameSlice.actions;
export default gameSlice.reducer;
