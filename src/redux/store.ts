import {
	AnyAction,
	configureStore,
	Store,
	ThunkDispatch,
} from '@reduxjs/toolkit';
import cardSlice from "./cards/slice";
export type AppThunkDispatch = ThunkDispatch<RootState, any, AnyAction>;
export type AppStore = Omit<Store<RootState, AnyAction>, 'dispatch'> & {
	dispatch: AppThunkDispatch;
};

export const store = configureStore({
  reducer: {
    cards: cardSlice,
  },
  // middleware: [logger]
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch