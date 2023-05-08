import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Context } from '../../Context/Context';
import axios from 'axios';

import "./Login.css"
import Navbar from '../../Navbar/Navbar';

function Login() {
  const { setIsLogged, setCurrentUser }=useContext(Context)
  const [user,setUser]=useState("")
  const [password,setPassword]=useState("")
  const navigate=useNavigate()

  const handleLogin=()=>{
    const logUser={
      user:user,
      password:password
    }
    console.log(logUser)
    axios.post(`http://localhost:3001/users/login`,logUser)
    .then(res=>{
      if(res.data==="cannot find user"){
        alert(res.data)
      }
      else if(res.data==="incorrect password"){
        alert(res.data)
      }
      else{
        setCurrentUser(res.data)
        navigate("/")
        alert(`welcome ${res.data.name}`)
        setIsLogged(true)
      }
    })
  }

  return (
    <>
      <Navbar/>
      <div className="login-container">
        <h2>Log In</h2>
          <div className="form-group">
            <label className="login-label" htmlFor="user">Username:</label>
            <input
              className="login-input"
              type="text"
              onChange={e=>setUser(e.target.value)}
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
          <button id="login-button" onClick={handleLogin}>Log In</button>
        <p>
          Don't have an account? <Link to="/signup">Sign up</Link>
        </p>
      </div>
    </>
  );
}

export default Login;