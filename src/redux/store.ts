import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit";
import cardSlice from "./cards/slice";

export const store = configureStore({
  reducer: {
    cards: cardSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
