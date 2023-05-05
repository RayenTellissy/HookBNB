import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

import "./Login.css"

function Login({login}) {
  const [username,setUsername]=useState("")
  const [password,setPassword]=useState("")
  const navigate=useNavigate()

  const handleSubmit=()=>{
    login(username,password)
    navigate("/")
  }
  return (
    <div className="login-container">
      <h2>Log In</h2>
        <div className="form-group">
          <label className="login-label" htmlFor="user">Username:</label>
          <input
            className="login-input"
            type="text"
            onChange={e=>setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label className="login-label" htmlFor="password">Password:</label>
          <input
            type="password"
            className="login-input"
            onChange={e=>setPassword(e.target.value)}
            required
          />
        </div>
        <button id="login-button" onClick={handleSubmit}>Log In</button>
      <p>
        Don't have an account? <Link to="/signup">Sign up</Link>
      </p>
    </div>
  );
}

export default Login;