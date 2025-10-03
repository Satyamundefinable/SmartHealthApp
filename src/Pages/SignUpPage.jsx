import React, { useState } from "react";
import "../Components/UI/CSS/signUp.css";
import axios from "axios";
import { NavLink } from "react-router-dom";
const SignUpPage = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    number: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,[e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
     let res= await axios.post("http://localhost:3000/signup", 
        formData
      );

      const data = await res.data;
      console.log("Response:", data);
      alert(res.message);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="auth-container">
      <h2>Create Account</h2>
      <form className="auth-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Full Name"
          value={formData.username}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="number"
          placeholder="Mobile"
          value={formData.number}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <button type="submit">Sign Up</button>
      </form>
      <p>
        Already have an account? <NavLink to="/login">Login</NavLink>
      </p>
    </div>
  );
};

export default SignUpPage;
