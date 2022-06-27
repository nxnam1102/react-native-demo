import {configureStore} from '@reduxjs/toolkit';
import {AppReducer} from './reducers';

export const store = configureStore({
  reducer: {...AppReducer},
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
