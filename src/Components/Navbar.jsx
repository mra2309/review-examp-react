import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Navbar(props) {
  const user = useSelector((state) => state.user);

  function formatCurency(data) {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(data);
  }
  return (
    <div className="bg-slate-200">
      <div className="w-2/3 m-auto">
        <div className="flex justify-between gap-4 py-4">
          <div className="flex gap-4">
            <Link to="/">Home</Link>
            <Link to="/rent">Rent</Link>
          </div>
          <div>
            Hi <b>{user.name}</b> your balance:
            <b>{formatCurency(user.balance)}</b>
          </div>
        </div>
      </div>
    </div>
  );
}
