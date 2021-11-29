import React, { Component, useState, useEffect } from "react";

import axios from "axios";
import "../../App.css";
import { useHistory } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Customer from "../Customer";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";

function App() {
  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [filteredVehicles, setFilteredVehicles] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://localhost:44389/api/Vehicle/")
      .then((res) => {
        setVehicles(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    setFilteredVehicles(
      vehicles.filter(
        (vehicle) =>
          vehicle.vehicleCategory
            .toLowerCase()
            .includes(search.toLowerCase()) ||
          vehicle.vehicleBrand.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, vehicles]);

  if (loading) {
    return <p>Loading vehicles...</p>;
  }

  return (
    <>
      <Navbar />
      <h1>Vehicles Lists</h1>
      <div className="col-sm-6 offset-sm-5">
        <label className="form-lable h4">Search</label>
        <input
          className="form-control"
          type="text"
          placeholder="Search Vehicles"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {filteredVehicles.map((vehicle, idx) => (
        <SystemManageApi key={idx} {...vehicle} />
      ))}
    </>
  );
}

const SystemManageApi = (props) => {
  const {
    vehicleCategory,
    vehicleID,
    imageSrc,
    vehicleBrand,
    numberOfSeats,
    vehicleDescription,
    chargePerDay,
  } = props;

  const [count, setCount] = useState(1);
  const navigate = useNavigate();

  const handleRoute = () => {
    let obj = {
      image: imageSrc,
      Perday: chargePerDay,
      days: count,
      total: chargePerDay * count,
    };
    localStorage.setItem("mydata", JSON.stringify(obj));

    navigate("/CustomerDetails");
    return;
  };
  return (
    <>
      <div className="vehiclelist-back">
        <div className="row">
          <div className="col-md-4"></div>
          <div className="col-md-4">
            <div className="card2">
              <div className="row">
                <div className="col-md-4">
                  <img id="veimage" src={imageSrc} className="cart2-img-top " />
                </div>
                <div className="col-md-8">
                  <div
                    className="card2-body"
                    action="customer.js"
                    method="POST"
                  >
                    <h5>{vehicleBrand}</h5>
                    <span>{numberOfSeats} Passengers</span>
                    <br />
                    <span>{vehicleDescription}</span>
                    <br />
                    <span id="perday" name="perday">
                      LKR {chargePerDay} /Perday
                    </span>
                    <br />

                    <div className="input-group">
                      <div>
                        <label className="days">Number Of Days</label>
                      </div>
                      <button
                        type="button"
                        className="input-group-text"
                        onClick={() => setCount(count - 1)}
                      >
                        -
                      </button>
                      <div className="input-group-text" id="days" name="days">
                        {count}
                      </div>
                      <button
                        type="button"
                        className="input-group-text"
                        onClick={() => setCount(count + 1)}
                      >
                        +
                      </button>
                    </div>

                    <span id="total" name="total">
                      Total Charge LKR {chargePerDay * count}
                    </span>

                    <br />
                    <br />

                    <button onClick={handleRoute} className="form-input-btn2">
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            </div>{" "}
          </div>
          <div className="col-md-4"></div>
        </div>
      </div>
    </>
  );
};

const rootElement = document.getElementById("root");

export default App;
