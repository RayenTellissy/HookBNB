import React, { createContext , useEffect, useState } from "react";
import axios from "axios";
import { logAuthStatus } from "./util"

export const Context=createContext()

export const ContextProvider=({children})=>{
  const [data,setData]=useState([])
  const [user,setUser]=useState("")
  const [currentUser,setCurrentUser]=useState({})
  const [password,setPassword]=useState("")
  const [isLogged,setIsLogged]=useState(false)

  useEffect(()=>{
    logAuthStatus(isLogged)
  },[isLogged])

  useEffect(()=>{
    console.log(currentUser)
  },[currentUser])

  const logout=()=>{
    setCurrentUser({})
    setIsLogged(false)
  }

  const fetchData=()=>{
    axios.get("http://localhost:3001/houses/getAll").then(res=>setData(res.data))
  }

  return(
    <Context.Provider value={{isLogged,setIsLogged,user,setUser,password,setPassword,fetchData,data,setData,logout,currentUser,setCurrentUser}}>
      {children}
    </Context.Provider>
  )
}