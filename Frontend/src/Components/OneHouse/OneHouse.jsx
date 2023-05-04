import React from "react";
import { motion } from "framer-motion"
import "./OneHouse.css"

const OneHouse=({title,location,price,image})=>{

  return(
    <motion.div whileHover={{scale: 0.95}} className="house">
      <img className="house-image" src={image} alt="house"/>
      <p className="details">{title}, {location}</p>
      <h3 className="price">{price}$ per night</h3>
    </motion.div>
  )
}

export default OneHouse