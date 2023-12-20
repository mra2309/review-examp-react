import React from "react";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  function formatCurency(data) {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(data);
  }
  return (
    <div className="bg-slate-200">
      <div className="w-2/3 m-auto">
        <div className="flex  gap-4 py-4 justify-between">
          <div className="flex gap-4">
            <Link to="/">Home</Link>
            <Link to="/rent">Rent</Link>
          </div>
          <div>
            Hi <b>{props.user.user}</b> your balance:
            <b>{formatCurency(props.user.balance)}</b>
          </div>
        </div>
      </div>
    </div>
  );
}
