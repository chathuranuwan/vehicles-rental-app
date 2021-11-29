import React, { useState } from "react";
import "./Form.css";
import SignUp from "./components/pages/SignUp";
import SignUpSuccess from "./SignUpSuccess";
import SignIn from "./components/pages/SignIn";
import Navbar from "./components/Navbar";

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <Navbar />
      <div className="form-container">
        <span className="close-btn">×</span>
        <div className="form-content-left">
          <img src="images/imge-2.svg" alt="spaceship" className="form-img" />
        </div>
        {!isSubmitted ? <SignIn submitForm={submitForm} /> : <SignUpSuccess />}
      </div>
    </>
  );
};

export default Form;
