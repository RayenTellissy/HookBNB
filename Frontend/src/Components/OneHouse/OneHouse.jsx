import React from "react";
import { motion } from "framer-motion"
import "./OneHouse.css"
import { useNavigate } from "react-router-dom";

const OneHouse=({_id,title,location,price,image})=>{
  const navigate=useNavigate()

  return(
    <motion.div whileHover={{scale: 0.95}} className="house" onClick={()=>navigate(`/house/${_id}`)}>
      <img className="house-image" src={image} alt="house"/>
      <p className="details">{title}, {location}</p>
      <h3 className="price">{price}$ per night</h3>
    </motion.div>
  )
}

export default OneHouse