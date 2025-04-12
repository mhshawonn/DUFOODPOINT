import React, { useState } from "react";
import "./Login.css";
import { FaFacebookF } from "react-icons/fa";
import { Link } from 'react-router-dom';

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="login-container">
      <div className="login-box">
        <h1 className="app-name">DU FOODPOINT</h1>
        
        <input
          type="text"
          placeholder="Phone number, username, or email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="login-btn">Log In</button>

        <div className="divider">
          <span>OR</span>
        </div>

        <div className="login-with-fb">
          <FaFacebookF className="fb-icon" />
          <p>Log in with Facebook</p>
        </div>

        <p className="forgot-password">Forgot password?</p>
      </div>

      <div className="signup-box">
        <p>Don't have an account? <span><Link to ="/signup">Sign up</Link></span></p>
      </div>
    </div>
  );
};

export default LogIn;
