import React, { useState } from "react";
import "./SignUp.css";
import { Link } from 'react-router-dom';

const SignUp = () => {
  const [userData, setUserData] = useState({
    fullName: "",
    email: "",
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };
  console.log("SignUp loaded")

  return (
    <div className="signup-container">
      <div className="signup-box">
        <h1 className="app-name">DU FOODPOINT</h1>
        <p className="signup-text">
          Sign up to explore more amazing content.
        </p>

        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={userData.fullName}
          onChange={handleChange}
        />

        <input
          type="text"
          name="email"
          placeholder="Email or Mobile Number"
          value={userData.email}
          onChange={handleChange}
        />

        <input
          type="text"
          name="username"
          placeholder="Username"
          value={userData.username}
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={userData.password}
          onChange={handleChange}
        />

        <button className="signup-btn">Sign Up</button>

        <p className="terms-text">
          By signing up, you agree to our <span>Terms & Privacy Policy</span>.
        </p>
      </div>

      <div className="login-box">
        <p>Already have an account? <span><Link to='/login'>Sign In</Link></span></p>
      </div>
    </div>
  );
};

export default SignUp;
