/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import ListVehicles from "../Components/ListVehicles";

export default function Rent(props) {
  const [vehicles, setVehicles] = useState([]);

  function getDataVehicle() {
    fetch("http://54.255.216.179:3001/vehicles")
      .then((res) => res.json())
      .then((res) => {
        setVehicles(res);
      });
  }

  useEffect(() => {
    getDataVehicle();
  }, []);

  return (
    <div className="w-2/3 m-auto">
      <div className="p-4 bg-slate-50 text-center my-4">
        <h1>Rental</h1>
      </div>

      <div className="grid grid-cols-3 gap-3">
        {vehicles.map((vehicle, index) => {
          return (
            <ListVehicles
              user={props.user}
              setUser={props.setUser}
              getDataVehicle={getDataVehicle}
              vehicle={vehicle}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
}
