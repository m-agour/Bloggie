import TopBar from "../../component/topbar/TopBar";
import "./signup.css";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { NotificationManager } from "react-notifications";
import Cookies from "universal-cookie";

function Register() {
  const cookies = new Cookies();
  const [errorMessages, setErrorMessages] = useState({});
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    //Prevent page reload
    event.preventDefault();

    let { email, firstName, lastName, password } = document.forms[0];

    // verify user
    let userData = {
      email: email.value,
      firstName: firstName.value,
      lastName: lastName.value,
      password: password.value,
    };

    try {
      const response = await axios.post(
        "http://127.0.0.1:5000/api/user/",
        userData
      );

      cookies.set("token", response.data.token, { path: "/" });
      navigate("/");
      NotificationManager.success(response.data.data, "Success", 3000);
    } catch (err) {
      if (err.response) {
        NotificationManager.error(err.response.data.data, "Error", 3000);
      } else {
        NotificationManager.error("Server is down!", "Error", 3000);
      }
    }
  };

  return (
    <>
      <TopBar />
      <div className="register">
        <span className="registerTitle customfont1 ">Register</span>
        <form onSubmit={handleSubmit} className="registerForm">
          <label className="customfont1 lablesize">FirstName</label>
          <input
            className="registerInput"
            name="firstName"
            type="usernam"
            id="firstName"
            placeholder="Enter your FirstName..."
          />
          <label className="customfont1 lablesize">LastName</label>
          <input
            className="registerInput"
            name="lastName"
            type="usernam"
            id="lastName"
            placeholder="Enter your LastName..."
          />
          <label className="customfont1 lablesize ">Email</label>
          <input
            className="registerInput"
            name="email"
            type="email"
            id="email"
            placeholder="Enter your email..."
          />
          <label className="customfont1 lablesize">Password</label>
          <input
            className="registerInput "
            name="password"
            type="password"
            id="password"
            placeholder="Enter your password..."
          />
          <button className="registerButton">Register</button>
        </form>
        <a href="/login">
          {" "}
          <button className="registerLoginButton ">Login</button>
        </a>
      </div>
    </>
  );
}

export default Register;
