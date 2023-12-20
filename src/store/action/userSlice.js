import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    name: "messi",
    balance: 100000,
  },
  reducers: {
    updateBalance: (state, actions) => {
      state.balance = state.balance - actions.payload;
    },
    updateName: (state, actions) => {
      state.name = actions.payload;
    },
  },
});

export const { updateBalance, updateName } = userSlice.actions;
export default userSlice.reducer;
