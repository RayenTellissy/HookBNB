import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios"
import "./Sell.css"

import logo from "../../images/logo.png"


const Sell=({fetchData,user,password})=>{
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
    axios.get(`http://localhost:3001/users/getOne?user=${user}&password=${password}`)
    .then(res=>{
      if(res.data){
        const newHouse={
          title: title,
          location: location,
          price: price,
          image: image,
          ownerid: res.data._id
        }
        axios.post("http://localhost:3001/houses/sell",newHouse)
        .then(house=>axios.put(`http://localhost:3001/users/edit/${newHouse.ownerid}`,{rents: house.data})).then(reload)
      }
    })
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
        <h5>Not Signed up? <Link to="/signup">Signup!</Link></h5>
      </div>
    </div>
    </div>
  )
}

export default Sell