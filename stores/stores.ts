import { configureStore } from '@reduxjs/toolkit';
import playersReducer from './players';

export const appStores = configureStore({
  reducer: {
    players: playersReducer
  }
});
