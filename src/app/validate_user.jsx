import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useCookies } from "react-cookie";
import "./login.css";

const Login = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [cookies, setCookie, removeCookie] = useCookies(["access_token"]); // useCookies hook to manage cookies

  const handleLogin = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const registerNumber = formData.get("registerNumber");
    const dob = formData.get("dob");

    try {
      const response = await axios.post("http://localhost:3001/api/login", {
        registerNumber,
        dob,
      });
      localStorage.setItem("registerNumber", registerNumber);
      if (response.data.success) {
        // Assuming the response contains token and userID
        const { token, userID } = response.data;

        // Set access_token cookie (expires in 1 day)
        setCookie("access_token", token);

        // Store userID in localStorage
        localStorage.setItem("userID", userID);

        // Redirect to '/profile' after successful login
        navigate("/user-main");
      } else {
        setError("Invalid credentials. Please try again.");
      }
    } catch (error) {
      console.error("Login error:", error);
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <div className="container">
      <div className="text">
        <h1>Login Form</h1>
      </div>
      {error && <div className="text">{error}</div>}
      <br />
      <br />
      <form onSubmit={handleLogin}>
        <div className="form-row">
          <div className="input-data">
            <input required type="text" name="registerNumber" />
            <div className="underline"></div>
            <label htmlFor="registerNumber">Register Number</label>
          </div>
          <div className="input-data">
            <input required type="text" name="dob" />
            <div className="underline"></div>
            <label htmlFor="dob">Date of Birth (YYYY-MM-DD)</label>
          </div>
        </div>
        <div className="form-row submit-btn">
          <div className="input-data">
            <div className="inner"></div>
            <input type="submit" value="Submit" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;