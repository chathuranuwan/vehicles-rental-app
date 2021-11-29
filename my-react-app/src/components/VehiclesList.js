import React, { useState, useEffect } from "react";
import Vehicle from "./Vehicle";
import axios from "axios";
import AdminNavbar from "./AdminNavbar";

export default function VehiclesList() {
  const [vehiclesList, setVehiclesList] = useState([]);
  const [recordForEdit, setRecordForEdit] = useState(null);

  useEffect(() => {
    refreshVehiclesList();
  }, []);

  const SystemManageApi = (url = "https://localhost:44389/api/Vehicle/") => {
    return {
      fetchAll: () => axios.get(url),
      create: (newRecord) => axios.post(url, newRecord),
      update: (id, updatedRecord) => axios.put(url + id, updatedRecord),
      delete: (id) => axios.delete(url + id),
    };
  };

  function refreshVehiclesList() {
    SystemManageApi()
      .fetchAll()
      .then((res) => setVehiclesList(res.data))
      .catch((err) => console.log(err));
  }

  const addOrEdit = (formData, onSuccess) => {
    if (formData.get("vehicleID") == "0")
      SystemManageApi()
        .create(formData)
        .then((res) => {
          onSuccess();
          refreshVehiclesList();
        })
        .catch((err) => console.log(err));
    else
      SystemManageApi()
        .update(formData.get("vehicleID"), formData)
        .then((res) => {
          onSuccess();
          refreshVehiclesList();
        })
        .catch((err) => console.log(err));
  };

  const showRecordDetails = (data) => {
    setRecordForEdit(data);
  };

  const onDelete = (e, id) => {
    e.stopPropagation();
    if (window.confirm("Are you sure to delete this record?"))
      SystemManageApi()
        .delete(id)
        .then((res) => refreshVehiclesList())
        .catch((err) => console.log(err));
  };

  const imageCart = (data) => (
    <div
      className="card"
      onClick={() => {
        showRecordDetails(data);
      }}
    >
      <img src={data.imageSrc} className="cart-img-top " />
      <div className="card-body">
        <h5>{data.vehicleBrand}</h5>
        <span>{data.vehicleDescription}</span>

        <br />
        <button
          className="btn btn-light delete-button"
          onClick={(e) => onDelete(e, parseInt(data.vehicleID))}
        >
          <i className="far fa-trash-alt"></i>
        </button>
      </div>
    </div>
  );

  return (
    <>
      <AdminNavbar />
      <div className="row">
        <div className="col-md-12">
          <div class="jumbotron jumbotron-fluid py-4">
            <div class="container text-center">
              <h1 class="display-4">Add new vehicle</h1>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <Vehicle addOrEdit={addOrEdit} recordForEdit={recordForEdit} />
        </div>
        <div className="col-md-8">
          <table>
            <tbody>
              {[...Array(Math.ceil(vehiclesList.length / 3))].map((e, i) => (
                <tr key={i}>
                  <td>{imageCart(vehiclesList[3 * i])}</td>

                  <td>
                    {vehiclesList[3 * i + 1]
                      ? imageCart(vehiclesList[3 * i + 1])
                      : null}
                  </td>

                  <td>
                    {vehiclesList[3 * i + 2]
                      ? imageCart(vehiclesList[3 * i + 2])
                      : null}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
