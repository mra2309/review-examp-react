import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateName } from "../store/action/userSlice";

export default function Home() {
  const dispatch = useDispatch(); //untuk mengirim perubahan
  const user = useSelector((state) => state.user); // untuk memanggil state
  console.log(user);

  return (
    <div className="w-2/3 m-auto">
      <div className="p-4 my-4 text-center bg-slate-50">
        <h1>PLATFORM RENTAL MOBIL</h1>
        saldo anda : {user.balance}
        <br />
        <br />
        <br />
        <button
          onClick={() => {
            dispatch(updateName("dilya"));
          }}
        >
          ubah nama
        </button>
      </div>
    </div>
  );
}
