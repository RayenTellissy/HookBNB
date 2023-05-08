import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import "./HouseDetails.css"
import { Context } from "../Context/Context";


const HouseDetails=()=>{
  const { id }=useParams()
  const navigate=useNavigate()
  const [house,setHouse]=useState({})
  const { title, location, price, image }=house

  useEffect(()=>{
    axios.get(`http://localhost:3001/houses/find/${id}`)
    .then(res=>{setHouse(res.data)})
  },[])

  const editHouse=()=>{
    navigate(`/edit/${id}`)
  }

  const deleteHouse=()=>{
    axios.delete(`http://localhost:3001/houses/delete/${id}`).then(()=>navigate("/"))
  }

  return(
    <div className="house-details">
      <div className="house-image-container">
        <img src={image} className="house-image" alt=""/>
        <div className="action-container">
          <h4 className="house-edit" onClick={editHouse}>Edit</h4>
          <h4 className="house-edit" onClick={deleteHouse}>Delete</h4>
        </div>
      </div>
      <div className="house-info">
        <h2 className="house-title">{title}</h2>
        <p className="house-location">{location}</p>
        <p className="house-price">{price}$ per night</p>
          <label htmlFor="checkin">Check-in:</label>
          <input type="date" id="checkin" name="checkin" required />

          <label htmlFor="checkout">Check-out:</label>
          <input type="date" id="checkout" name="checkout" required />

          <label htmlFor="guests">Guests:</label>
          <select id="guests" name="guests" required>
            <option value="1">1 guest</option>
            <option value="2">2 guests</option>
            <option value="3">3 guests</option>
            <option value="4">4 guests</option>
          </select>

          <button className="reserve-button">Reserve</button>
      </div>
    </div>
  )
}

export default HouseDetails