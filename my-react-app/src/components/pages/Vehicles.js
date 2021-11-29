import React, { useState, useEffect } from "react";
import axios from "axios";

export default function VehiclesList() {
  const [vehiclesList, setVehiclesList] = useState([]);
  const [recordForEdit, setRecordForEdit] = useState(null);

  useEffect(() => {
    refreshVehiclesList();
  }, []);

  const SystemManageApi = (url = "https://localhost:44389/api/Vehicle/") => {
    return {
      fetchAll: () => axios.get(url),
    };
  };

  function refreshVehiclesList() {
    SystemManageApi()
      .fetchAll()
      .then((res) => setVehiclesList(res.data))
      .catch((err) => console.log(err));
  }

  const showRecordDetails = (data) => {
    setRecordForEdit(data);
  };

  const imageCart = (data) => (
    <div
      className="card2"
      onClick={() => {
        showRecordDetails(data);
      }}
    >
      <div className="row">
        <div className="col-md-4">
          <img src={data.imageSrc} className="cart2-img-top " />
        </div>
        <div className="col-md-8">
          <div className="card2-body">
            <h5>{data.vehicleBrand}</h5>
            <span>{data.numberOfSeats} Passengers</span>
            <br />
            <span>{data.vehicleDescription}</span>
            <br />
            <span>LKR {data.chargePerDay}</span>
            <br />
            <br />
            <br />
            <button className="form-input-btn2" type="booknow">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  let data = localStorage.getItem("myvalues");
  data = JSON.parse(data);
  console.log(data);
  return (
    <section className="py-4 container">
      <div className="vehiclelist-back">
        <div className="row">
          <div className="col-md-4"></div>
          <div className="col-md-4">
            <label className="form-lable h4">Search</label>
            <input type="text" className="form-control" />
            <table>
              <tbody>
                {[...Array(Math.ceil(vehiclesList.length / 1))].map((e, i) => (
                  <tr key={i}>
                    <td>{imageCart(vehiclesList[1 * i])}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="col-md-4"></div>
        </div>
      </div>
    </section>
  );
}
