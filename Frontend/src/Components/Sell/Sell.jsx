import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"
import "./Sell.css"

import logo from "../../images/logo.png"

const url="http://localhost:3001/houses/sell"

const Sell=({fetchData})=>{
  const [user,setUser]=useState("")
  const [password,setPassword]=useState("")
  const [title,setTitle]=useState("")
  const [location,setLocation]=useState("")
  const [price,setPrice]=useState("")
  const [image,setImage]=useState("")
  const navigate=useNavigate()

  const reload=async ()=>{
    await fetchData()
    navigate("/")
  }

  const handleSubmit=()=>{
    const newHouse={
      title: title,
      location: location,
      price: price,
      image: image
    }
    axios.post(url,newHouse).then(reload)
  }

  return(
    <div>
      <div>
      <div id="sell-logo" onClick={reload}>
        <img src={logo} alt=""/>
        <p>HookBNB</p>
      </div>
      <h1>HookBNB House Selling</h1>
      <div className="container">
        <div className="personal-info">
          <h2>Personal Information</h2>
          <label>User:</label>
          <input
            type="text"
            id="user"
            onChange={e=>setUser(e.target.value)}
            required
          />
          <label>Password:</label>
          <input
            type="password"
            id="pass"
            onChange={e=>setPassword(e.target.value)}
            required
          />
        </div>
        <div className="house-info">
          <h2>House Information</h2>
          <label>Title:</label>
          <input
            type="text"
            id="title"
            onChange={e=>setTitle(e.target.value)}
            required
          />
          <label>Location:</label>
          <input
            type="text"
            id="location"
            onChange={e=>setLocation(e.target.value)}
            required
          />
          <label>Price per Night:</label>
          <input
            type="number"
            id="price"
            onChange={e=>setPrice(e.target.value)}
            required
          />
          <label>House Image:</label>
          <input
            type="text"
            id="image"
            onChange={e=>setImage(e.target.value)}
            required
          />
        </div>
        <button id="submit" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
    </div>
  )
}

export default Sell