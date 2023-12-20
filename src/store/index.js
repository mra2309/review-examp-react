import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./action/userSlice";

const store = configureStore({
  reducer: {
    user: userSlice,
  },
});

console.log("STATE AWALNYA ADALAH : ", store.getState());

store.subscribe(() => {
  console.log(store.getState());
});

export default store;
