import React, { useState } from "react";
import "./Register.css";

function Register() {
  const [Button, setButton] = useState(false);

  const handlerSubmitButton = () => {
    setButton(!false);
  };

  const [values, setValues] = useState({
    firstName: "",
    Email: "",
    Tel_No: "",
    Company: "",
    Assistance: "",
    Location: "",
    Issue: "",
  });

  const handleFirstNameInput = (event) => {
    setValues({ ...values, firstName: event.target.value });
  };

  const handleEmailInput = (event) => {
    setValues({ ...values, Email: event.target.value });
  };
  const handleTel_NoInput = (event) => {
    setValues({ ...values, Tel_No: event.target.value });
  };

  const handleCompanyInput = (event) => {
    setValues({ ...values, Company: event.target.value });
  };

  const handleAssistanceInput = (event) => {
    setValues({ ...values, Assistance: event.target.value });
  };

  const handleLocationInput = (event) => {
    setValues({ ...values, Location: event.target.value });
  };

  const handleIssueInput = (event) => {
    setValues({ ...values, Issue: event.target.value });
  };

  return (
    <div className="House_Register">
      <div className="Intro_Text">
        New <span>Client </span>{" "}
      </div>
      <div className="Form_Block">
        <form className="Add_Form" onSun >
          <input
            value={values.firstName}
            onChange={handleFirstNameInput}
            className="Form_Field"
            placeHolder="Enter Name"
            name="firstName"
          />
          <input
            onChange={handleEmailInput}
            value={values.Email}
            className="Form_Field"
            placeHolder="Enter Email"
            name="Email"
          />
          <input
            onChange={handleTel_NoInput}
            value={values.Tel_No}
            className="Form_Field"
            placeHolder="Enter Tel No"
            name="Tel_No"
          />

          <input
            onChange={handleCompanyInput}
            value={values.Company}
            className="Form_Field"
            placeHolder="Enter Company"
            name="Company"
          />

          <input
            onChange={handleAssistanceInput}
            value={values.Assistance}
            className="Form_Field"
            placeHolder="Client Assist"
            name="Assistance"
          />

          <input
            onChange={handleLocationInput}
            value={values.Location}
            className="Form_Field"
            placeHolder="Enter Location"
            name="Location"
          />

          <input
            onChange={handleIssueInput}
            value={values.Issue}
            className="Form_Description"
            placeHolder="Issue"
            name="Issue"
          />
        </form>
        <button onClick={handlerSubmitButton} className="Add_Smt">
          {Button ? <h1>Submitted</h1> : <h1>Add Client</h1>}
        </button>
      </div>
    </div>
  );
}

export default Register;
