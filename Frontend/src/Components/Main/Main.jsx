import React from "react";
import Navbar from "../Navbar/Navbar";
import AllHouses from "../AllHouses/AllHouses";

const Main=({data,filterData})=>{
    return(
        <>
            <Navbar filterData={filterData}/>
            <AllHouses data={data}/>
        </>
    )
}

export default Main