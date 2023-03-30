import { configureStore } from '@reduxjs/toolkit';
import gameReducer from './game';

export const appStores = configureStore({
  reducer: {
    game: gameReducer
  }
});
