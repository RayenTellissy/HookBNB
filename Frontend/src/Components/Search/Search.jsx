import React, { useEffect, useState } from "react";
import "./Search.css"

const Search=({filterData})=>{
  const [query,setQuery]=useState("")

  useEffect(()=>{
    filterData(query)
  },[filterData,query])

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