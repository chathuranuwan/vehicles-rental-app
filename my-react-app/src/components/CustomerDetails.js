import React, { useState, useEffect } from "react";
import Customer from "./Customer";
import axios from "axios";
import Navbar from "./Navbar";

export default function CustomerDetails() {
  const [customerDetails, setCustomerDetails] = useState([]);
  const [recordForEdit, setRecordForEdit] = useState(null);

  useEffect(() => {
    refreshCustomerDetails();
  }, []);

  const SystemManageApi = (url = "https://localhost:44389/api/Customer/") => {
    return {
      fetchAll: () => axios.get(url),
      create: (newRecord) => axios.post(url, newRecord),
      update: (id, updatedRecord) => axios.put(url + id, updatedRecord),
    };
  };

  function refreshCustomerDetails() {
    SystemManageApi()
      .fetchAll()
      .then((res) => setCustomerDetails(res.data))
      .catch((err) => console.log(err));
  }

  const addOrEdit = (formData, onSuccess) => {
    if (formData.get("customerID") == "0")
      SystemManageApi()
        .create(formData)
        .then((res) => {
          onSuccess();
          refreshCustomerDetails();
        })
        .catch((err) => console.log(err));
    else
      SystemManageApi()
        .update(formData.get("customerID"), formData)
        .then((res) => {
          onSuccess();
          refreshCustomerDetails();
        })
        .catch((err) => console.log(err));
  };

  const showRecordDetails = (data) => {
    setRecordForEdit(data);
  };

  const imageCart = (data) => (
    <div
      className="card"
      onClick={() => {
        showRecordDetails(data);
      }}
    ></div>
  );

  return (
    <>
      <Navbar />

      <Customer addOrEdit={addOrEdit} recordForEdit={recordForEdit} />
    </>
  );
}
