import React from "react";
import Navbar from "../Navbar/Navbar";
import AllHouses from "../AllHouses/AllHouses";

const Main=({data})=>{
    return(
        <>
            <Navbar/>
            <AllHouses data={data}/>
        </>
    )
}

export default Main