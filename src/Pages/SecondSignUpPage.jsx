import axios from "axios";
import React, { useState } from "react";
import "../Components/UI/CSS/signUp.css";
import { NavLink } from "react-router-dom";

const SecondSignUpPage = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const usernameChange = (e) => {
    setUsername(e.target.value);
  };
  const emailChange = (e) => {
    setEmail(e.target.value);
  };
  const passwordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await axios.post("http://localhost:3000/signup/", {
        username,
        email,
        password,
      });
      const {data} = res;
      console.log("Response:", data);
      alert("User Registered Successfully");
    } catch (error) {
      console.log("error Submitting Form", error);
      alert("Failed to SignUp, Try Again");
    }
  };

  return (
    <>
      <div className="auth-container">
        <h2>SignUp Page</h2>
        <form className="auth-form" onSubmit={handleFormSubmit}>
          <input
            value={username}
            type="text"
            name="username"
            placeholder="Username..."
            required
            onChange={usernameChange}
          />
          <input
            type="email"
            name="email"
            value={email}
            placeholder="Email..."
            required
            onChange={emailChange}
          />
          <input
            type="password"
            name="password"
            value={password}
            placeholder="Password..."
            required
            onChange={passwordChange}
          />

          <input type="submit" value="Submit" />
        </form>
        <p>Already Have an Account ??</p> <NavLink to="/login">Login</NavLink>
      </div>
    </>
  );
};

export default SecondSignUpPage;
