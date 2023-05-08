import React, { useContext, useEffect, useState } from "react";
import { Context } from "../Context/Context";
import axios from "axios";
import "./Search.css"

const Search=()=>{
  const { setData }=useContext(Context)
  const [query,setQuery]=useState("")

  useEffect(()=>{
    axios.get(`http://localhost:3001/houses/search?query=${query}`).then(houses=>setData(houses.data))
  },[query])


  return(
    <>
      <div id="search-parent">
        <input id="search-bar"
        type="search"
        placeholder="Search places..."
        onChange={e=>setQuery(e.target.value)}
        />
      </div>
    </>
  )
}

export default Search