import React, { useState, useEffect } from "react";
import "../App.css";
import AdminNavbar from "./AdminNavbar";
import axios from "axios";

export default function Customerview(props) {
  const { addOrEdit, recordForEdit } = props;

  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://localhost:44389/api/customer/")
      .then((res) => {
        setCustomers(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <AdminNavbar />
      <div className="row">
        <div className="col-md-1"></div>
        <div className="col-md-8">
          <div className="table-body">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>Vehicle</th>
                  <th>number of days</th>
                  <th>Total Charge</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Email Address</th>
                  <th>Mobile Number</th>
                  <th>Nic no</th>
                  <th>Billing Address</th>
                  <th>Customer City</th>
                  <th>Postal Code</th>
                </tr>
              </thead>
              <tbody>
                {customers.map((customer, idx) => {
                  return (
                    <tr>
                      <td>
                        <img
                          src={customer.veimageSrc}
                          className="cart3-img-top "
                        />
                      </td>
                      <td>{customer.numberOfday}</td>
                      <td>{customer.totalPrice}</td>
                      <td>{customer.firstName}</td>
                      <td>{customer.lastName}</td>
                      <td>{customer.emailAddress}</td>
                      <th>{customer.mobileNumber}</th>
                      <th>{customer.nicNo}</th>
                      <th>{customer.billingAddress}</th>
                      <th>{customer.customerCity}</th>
                      <th>{customer.postalCode}</th>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
