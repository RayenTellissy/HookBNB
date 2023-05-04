import React, { useEffect, useState } from "react";
import "./Search.css"

const Search=({filterData})=>{
  const [query,setQuery]=useState("")

  return(
    <>
      <div id="search-parent">
        <input id="search-bar"
        type="search"
        placeholder="Search places..."
        onChange={e=>filterData(e.target.value)}
        />
      </div>
    </>
  )
}

export default Search