import React, { useState, useEffect } from "react";
import "../App.css";

const defaultImageSrc = "./images/vehicle_default.jpg";

const initialFieldValues = {
  vehicleID: 0,
  vehicleCategory: "",
  numberOfdays: "",
  vehicleBrand: "",
  numberOfSeats: "",
  vehicleType: "",
  chargePerDay: "",
  vehicleDescription: "",
  imageName: "",
  imageSrc: defaultImageSrc,
  imageFile: null,
  
};

export default function Vehicle(props) {
  const { addOrEdit, recordForEdit } = props;

  const [values, setValues] = useState(initialFieldValues);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (recordForEdit != null) setValues(recordForEdit);
  }, [recordForEdit]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const showPreview = (e) => {
    if (e.target.files && e.target.files[0]) {
      let imageFile = e.target.files[0];
      const reader = new FileReader();
      reader.onload = (x) => {
        setValues({
          ...values,
          imageFile,
          imageSrc: x.target.result,
        });
      };
      reader.readAsDataURL(imageFile);
    } else {
      setValues({
        ...values,
        imageFile: null,
        imageSrc: defaultImageSrc,
      });
    }
  };
  const validate = () => {
    let temp = {};
    temp.vehicleCategory = values.vehicleCategory == "" ? false : true;
    temp.imageSrc = values.imageSrc == defaultImageSrc ? false : true;
    temp.vehicleBrand = values.vehicleBrand == "" ? false : true;
    temp.vehicleDescription = values.vehicleDescription == "" ? false : true;
    temp.numberOfSeats = values.numberOfSeats == "" ? false : true;
    temp.chargePerDay = values.chargePerDay == "" ? false : true;

    setErrors(temp);
    return Object.values(temp).every((x) => x == true);
  };

  const resetForm = () => {
    setValues(initialFieldValues);
    document.getElementById("image-uploader").value = null;
    setErrors({});
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      const formData = new FormData();
      formData.append("vehicleID", values.vehicleID);
      formData.append("vehicleCategory", values.vehicleCategory);
      formData.append("vehicleBrand", values.vehicleBrand);
      formData.append("imageName", values.imageName);
      formData.append("imageFile", values.imageFile);
      formData.append("numberOfSeats", values.numberOfSeats);
      formData.append("chargePerDay", values.chargePerDay);
      formData.append("vehicleDescription", values.vehicleDescription);

      addOrEdit(formData, resetForm);
    }
  };

  const applyErrorClass = (field) =>
    field in errors && errors[field] == false ? " invalid-field" : "";

  return (
    <>
      <div className="container text-center">
        <p className="lead">A Vehicle</p>
      </div>
      <form outoComplete="off" noValidate onSubmit={handleFormSubmit}>
        <div className="card">
          <img src={values.imageSrc} className="cart-img-top" />
          <div className="card-body">
            <div className="form-group">
              <input
                type="file"
                accept="image/*"
                className={"form-control-file" + applyErrorClass("imageSrc")}
                onChange={showPreview}
                id="image-uploader"
              />
            </div>
            <div className="form-group">
              <input
                className={"form-control" + applyErrorClass("vehicleCategory")}
                placeholder="Vehicle Category"
                name="vehicleCategory"
                value={values.vehicleCategory}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <input
                className={"form-control" + applyErrorClass("vehicleBrand")}
                placeholder="Vehicle Brand"
                name="vehicleBrand"
                value={values.vehicleBrand}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <input
                className={"form-control" + applyErrorClass("numberOfSeats")}
                placeholder="Number of Seats"
                name="numberOfSeats"
                value={values.numberOfSeats}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <input
                className={"form-control" + applyErrorClass("chargePerDay")}
                placeholder="Charge per day"
                name="chargePerDay"
                value={values.chargePerDay}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <input
                className={
                  "form-control" + applyErrorClass("vehicleDescription")
                }
                placeholder="Description"
                name="vehicleDescription"
                value={values.vehicleDescription}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group text-center">
              <button type="submit" className="btn btn-light">
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
