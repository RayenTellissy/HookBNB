import React from "react";
import Navbar from "../Navbar/Navbar";
import AllHouses from "../AllHouses/AllHouses";

const Main=({data,filterData,isLogged})=>{
    return(
        <>
            <Navbar filterData={filterData} isLogged={isLogged}/>
            <AllHouses data={data}/>
        </>
    )
}

export default Main