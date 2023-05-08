import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion"
import { Context } from "../Context/Context";
import Search from "../Search/Search";
import "./Navbar.css"

import logo from "../../images/logo.png"
import sell from "../../images/sell.jpg"

const Navbar=()=>{
  const { isLogged, logout }=useContext(Context)
  const navigate=useNavigate()
  
  const redirectSell=()=>{
    navigate("/sell")
  }

  const reload=()=>{
    navigate("/")
    window.location.reload()
  }

  return (
    <nav id="nav">
      <div className="nav-child" onClick={reload}>
        <motion.img id="logo" whileHover={{scale: 1.15}} src={logo} alt="logo"/>
        <motion.h3 id="logo-title" whileHover={{scale: 1.1}}>HookBNB</motion.h3>
      </div>

      <div id="search-container">
        {<Search/>}
        {!isLogged && <>
          <button className="nav-login" onClick={()=>navigate("/login")}>Login</button>
          <button className="nav-signup" onClick={()=>navigate("/signup")}>Signup</button>
        </>}
        {isLogged && <>
          <button className="nav-signup" onClick={logout}>Logout</button>
          <button className="nav-signup" onClick={()=>navigate("/mylist")}>My Houses</button>
        </>}
      </div>

      <motion.div whileHover={{scale: 1.05}} className="nav-child" onClick={redirectSell}>
        <p id="sell-title">HookBNB your home</p>
        <img id="sell-icon" src={sell} alt="house for sell"/>
      </motion.div>
    </nav>
  )
}

export default Navbar