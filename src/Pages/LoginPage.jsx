import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../Components/UI/CSS/signUp.css";
import axios from "axios";
import { useAuth } from "../Context/AuthContext";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null); 
  const navigate = useNavigate(); 
  const {login} = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true); 
    setError(null); 

    axios
      .post("http://localhost:3000/login/", {
        email,
        password,
      })
      .then((res) => {
        setLoading(false); 
        if (res.data === "Success") {
          login();
          navigate("/home"); 
        }
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
        if (err.response && err.response.status === 401) {
          setError("Invalid email or password.");
        } else {
          setError("An error occurred. Please try again later.");
        }
      });
  };

  return (
    <div className="auth-container">
      <h2>Welcome Back</h2>
      <form className="auth-form" onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {error && <p className="error-message">{error}</p>} 
        <button type="submit" disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
      <p>
        Don’t have an account? <NavLink to="/signup">Sign Up</NavLink> 
      </p>
    </div>
  );
};

export default LoginPage;