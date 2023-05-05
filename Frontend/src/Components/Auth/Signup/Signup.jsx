import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import "./Signup.css"

function Signup() {
  const [name,setName]=useState("")
  const [username,setUsername]=useState("")
  const [password,setPassword]=useState("")
  const navigate=useNavigate()

  const handleSubmit=()=>{
    if(username.length<3 || password.length<6){
      alert("Type Longer input...")
    }
    else{
      const newUser={
        name: name,
        user: username,
        password: password
      }
      axios.post(`http://localhost:3001/users/add`,newUser).then(()=>navigate("/"))
    }
  }


  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
        <div className="form-group">
          <label className='signup-label' htmlFor="name">Name:</label>
          <input
            className='signup-input'
            type="text"
            onChange={e=>setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label className='signup-label' htmlFor="user">Username:</label>
          <input
            type="text"
            className='signup-input'
            onChange={e=>setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label className='signup-label' htmlFor="confirmPassword">Password:</label>
          <input
            type="password"
            className='signup-input'
            onChange={e=>setPassword(e.target.value)}
            required
          />
        </div>
        <button id="signup-button" onClick={handleSubmit}>Sign Up</button>
      <p>
        Already have an account? <Link to="/login">Log in</Link>
      </p>
    </div>
  );
}

export default Signup;