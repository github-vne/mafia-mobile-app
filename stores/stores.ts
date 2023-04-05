import { configureStore } from '@reduxjs/toolkit';
import gameReducer from './game';

export const stores = configureStore({
  reducer: {
    game: gameReducer
  }
});
