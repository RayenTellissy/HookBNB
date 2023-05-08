import React, { useContext } from 'react';
import OneHouse from '../OneHouse/OneHouse';
import { Context } from '../Context/Context';

import "./RentList.css"

const RentList = () => {
  const { currentUser }=useContext(Context)
  const data=currentUser.rents
  return (
    <div>
      {data.map((e,index)=>{
          return <OneHouse key={index} _id={e._id} title={e.title} location={e.location} price={e.price} image={e.image}/>
        })}
    </div>
  );
};

export default RentList;