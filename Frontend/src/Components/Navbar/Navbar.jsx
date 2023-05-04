import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion"
import Search from "../Search/Search";
import "./Navbar.css"
import logo from "../../images/logo.png"
import sell from "../../images/sell.jpg"

const Navbar=({filterData})=>{
  const navigate=useNavigate()
  
  const redirectSell=()=>{
    navigate("/sell")
  }

  const reload=()=>{
    window.location.reload()
  }

  return (
    <nav id="nav">
      <div className="nav-child" onClick={reload}>
        <img id="logo" src={logo} alt="logo"/>
        <h3 id="logo-title">HookBNB</h3>
      </div>

      {<Search filterData={filterData}/>}

      <motion.div whileHover={{scale: 1.1}} className="nav-child" onClick={redirectSell}>
        <p id="sell-title">HookBNB your home</p>
        <img id="sell-icon" src={sell} alt="house for sell"/>
      </motion.div>
    </nav>
  )
}

export default Navbar