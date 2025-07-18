import React, { useState } from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { API_BASE_URL } from "../config.js";
import "bootstrap/dist/css/bootstrap.min.css";

const Login = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("🚀 Sending login data:", values); // Log sent values

    axios
      .post(`${API_BASE_URL}/api/users/login`, values, {
        headers: { "Content-Type": "application/json" },
      })
      .then((res) => {
        console.log("✅ Login response:", res.data); // Log response
        if (res.data.Status === "Success") {
          localStorage.setItem("user_id", res.data.user_id);
          navigate("/dash/score");
        } else {
          setError(res.data.Error);
        }
      })
      .catch((err) => {
        console.error("❌ Login error:", err);
        setError("Login failed. Please try again.");
      });
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 loginPage">
      <div className="p-3 rounded border loginForm">
        <div className="text-danger">{error && error}</div>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email"><strong>Email</strong></label>
            <input
              type="email"
              name="email"
              value={values.email}
              onChange={(e) => setValues({ ...values, email: e.target.value })}
              placeholder="Enter Email"
              className="form-control rounded-0"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password"><strong>Password</strong></label>
            <input
              type="password"
              name="password"
              value={values.password}
              onChange={(e) => setValues({ ...values, password: e.target.value })}
              placeholder="Enter Password"
              className="form-control rounded-0"
              required
            />
          </div>

          <button type="submit" className="btn btn-success w-100 rounded-0">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
