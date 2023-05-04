import React from "react";
import "./AllHouses.css"
import OneHouse from "../OneHouse/OneHouse";
import Search from "../Search/Search";

const AllHouses=({data})=>{
  return(
    <>
      <div id="parent-house">
        {data.map((e,index)=>{
          return <OneHouse key={index} _id={e._id} title={e.title} location={e.location} price={e.price} image={e.image}/>
        })}
      </div>
    </>
  )
}

export default AllHouses