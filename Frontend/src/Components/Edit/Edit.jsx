import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "./Edit.css"

const Edit=()=>{
  const { id }=useParams()
  const [title,setTitle]=useState("")
  const [location,setLocation]=useState("")
  const [price,setPrice]=useState("")
  const [image,setImage]=useState("")
  const navigate=useNavigate()

  useEffect(()=>{
    axios.get(`http://localhost:3001/houses/find/${id}`)
    .then(house=>{
      setTitle(house.data.title)
      setLocation(house.data.location)
      setPrice(house.data.price)
      setImage(house.data.image)
    })
  },[])

  const handleSubmit=()=>{
    const editedHouse={
      title: title,
      location: location,
      price: price,
      image: image
    }
    axios.put(`http://localhost:3001/houses/edit/${id}`,editedHouse).then(()=>navigate("/"))
  }

  return(
    <div id="edit-container">
      <img src={image} className="house-image" alt=""/>
      <h2>Edit House</h2>
        <div>
          <label className="edit-label" htmlFor="title">Title:</label>
          <input
            className="edit-input"
            type="text"
            value={title}
            onChange={e=>setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="edit-label" htmlFor="location">Location:</label>
          <input
            className="edit-input"
            type="text"
            value={location}
            onChange={e=>setLocation(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="edit-label" htmlFor="price">Price:</label>
          <input
            className="edit-input"
            type="number"
            value={price}
            onChange={e=>setPrice(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="edit-label" htmlFor="imageUrl">Image URL:</label>
          <input
            className="edit-input"
            type="string"
            value={image}
            onChange={e=>setImage(e.target.value)}
            required
          />
        </div>
        <button id="edit-button" onClick={handleSubmit}>Save Changes</button>
    </div>
  )
}


export default Edit