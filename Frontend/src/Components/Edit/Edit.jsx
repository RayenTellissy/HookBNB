import React, { useState } from "react";
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

  const reload=()=>{
    navigate("/")
  }

  const handleSubmit=()=>{
    const editedHouse={
      title: title,
      location: location,
      price: price,
      image: image
    }
    axios.put(`http://localhost:3001/houses/edit/${id}`,editedHouse).then(reload)
  }

  return(
    <div>
      <h2>Edit House</h2>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            onChange={e=>setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="location">Location:</label>
          <input
            type="text"
            onChange={e=>setLocation(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="price">Price:</label>
          <input
            type="number"
            onChange={e=>setPrice(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="imageUrl">Image URL:</label>
          <input
            type="string"
            onChange={e=>setImage(e.target.value)}
            required
          />
        </div>
        <button onClick={handleSubmit}>Save Changes</button>
    </div>
  )
}


export default Edit