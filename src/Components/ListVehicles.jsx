/* eslint-disable react/prop-types */
import React from "react";

export default function ListVehicles(props) {
  function formatCurency(data) {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(data);
  }

  //  GET http://54.255.216.179:3001/vehicles LIST DATA
  //  POST http://54.255.216.179:3001/vehicles INSERT
  //  PUT http://54.255.216.179:3001/vehicles/:id EDIT
  //  PATCH http://54.255.216.179:3001/vehicles/:id EDIT
  //  DELETE http://54.255.216.179:3001/vehicles/:id DELETE

  function hitEditVehicle(id, status) {
    fetch(`http://54.255.216.179:3001/vehicles/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        status: status,
      }),
    }).then((res) => {
      if (res.status == 200) {
        alert("edit berhasil");
        props.getDataVehicle();
        return res;
      } else {
        alert("edit gagal");
        return res;
      }
    });
  }

  function initRental(pricerent, id, status) {
    let balance = props.user.balance - pricerent;
    hitEditVehicle(id, status);
    props.setUser({ user: props.user.user, balance: balance });
  }

  function initReturn(id, status) {
    hitEditVehicle(id, status);
  }

  return (
    <div className="bg-slate-200 p-4 rounded-md text-center">
      <div className="font-semibold">{props.vehicle.vehicleName}</div>
      <div>{formatCurency(props.vehicle.price)}</div>
      <div className="flex justify-center gap-2">
        {props.vehicle.status || props.vehicle.price > props.user.balance ? (
          <button
            className="my-4 px-4 py-2 bg-slate-500 text-white rounded-lg shadow-lg"
            disabled
          >
            Rent
          </button>
        ) : (
          <button
            onClick={() => {
              initRental(
                props.vehicle.price,
                props.vehicle._id,
                !props.vehicle.status
              );
            }}
            className="my-4 px-4 py-2 bg-green-500 text-white rounded-lg shadow-lg"
          >
            Rent
          </button>
        )}

        {props.vehicle.status ? (
          <button
            onClick={() => {
              initReturn(props.vehicle._id, !props.vehicle.status);
            }}
            className="my-4 px-4 py-2 bg-orange-100 text-orange-700 rounded-lg shadow-lg"
          >
            Return
          </button>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}
