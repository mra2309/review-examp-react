import { createSlice, configureStore } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
    nama: "adi",
  },
  reducers: {
    tambahsatu: (state) => {
      state.value += 1;
    },
    kurangsatu: (state) => {
      state.value -= 1;
    },
    ubahNama: (state, action) => {
      state.nama = action.payload;
    },
    ubahNamaDanTambahSatu: (state, action) => {
      state.nama = action.payload;
      state.value += 1;
    },
  },
});

export const { tambahsatu, kurangsatu, ubahNama, ubahNamaDanTambahSatu } =
  counterSlice.actions;

const store = configureStore({
  reducer: counterSlice.reducer,
});

store.subscribe(() => console.log(store.getState()));
store.dispatch(ubahNamaDanTambahSatu("miftakhul"));
// store.dispatch(tambahsatu());
// store.dispatch(ubahNama("feri"));
// // {value: 1}
// store.dispatch(incremented());
// // {value: 2}
// store.dispatch(decremented());
// // {value: 1}
