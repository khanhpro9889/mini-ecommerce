import { configureStore } from "@reduxjs/toolkit";
import CartStore from "./Cart/Slices";
import UsersStore from "./Users/Slices";

const reducer = {
  CartStore,
  UsersStore,
};

const store = configureStore({
  reducer: reducer,
  devTools: true,
});

//use for dispatch async actions
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
