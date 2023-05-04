import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "./Edit.css"

const Edit=({fetchData})=>{
  const { id }=useParams()
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
    const editedHouse={
      title: title,
      location: location,
      price: price,
      image: image
    }
    axios.put(`http://localhost:3001/houses/edit/${id}`,editedHouse).then(reload)
  }

  return(
    <div id="edit-container">
      <h2>Edit House</h2>
        <div>
          <label className="edit-label" htmlFor="title">Title:</label>
          <input
            className="edit-input"
            type="text"
            onChange={e=>setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="edit-label" htmlFor="location">Location:</label>
          <input
            className="edit-input"
            type="text"
            onChange={e=>setLocation(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="edit-label" htmlFor="price">Price:</label>
          <input
            className="edit-input"
            type="number"
            onChange={e=>setPrice(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="edit-label" htmlFor="imageUrl">Image URL:</label>
          <input
            className="edit-input"
            type="string"
            onChange={e=>setImage(e.target.value)}
            required
          />
        </div>
        <button id="edit-button" onClick={handleSubmit}>Save Changes</button>
    </div>
  )
}


export default Edit