import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ERole, TPlayer } from '../types/Player';

const PLAYERS: TPlayer[] = Array.from(new Array(10), (_, i) => i).map((el) => ({
  id: `id-${el}`,
  name: 'User #' + el,
  order: el + 1,
  role: ERole.Peaceful
}));

const playersSlice = createSlice({
  name: 'players',
  initialState: {
    players: PLAYERS
  },
  reducers: {
    updatePlayerFields(state, action: PayloadAction<Partial<TPlayer>>) {
      const { id, ...fields } = action.payload;
      state.players = state.players.map((player) => ({
        ...player,
        ...(player.id === id && fields)
      }));
    }
  }
});

export const { updatePlayerFields } = playersSlice.actions;
export default playersSlice.reducer;
