import { configureStore } from '@reduxjs/toolkit';
import registrationReducer from '../features/registrationSlice';

export const store = configureStore({
  reducer: {
    registration: registrationReducer,
  },
});
