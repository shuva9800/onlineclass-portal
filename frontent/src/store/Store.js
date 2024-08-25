import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/CounterSlice";

const Store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export default Store;
