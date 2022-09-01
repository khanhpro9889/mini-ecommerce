import { configureStore } from "@reduxjs/toolkit";
import CartStore from "./Cart/Slices";

const reducer = {
  CartStore,
};

const store = configureStore({
  reducer: reducer,
  devTools: true,
});
export default store;
