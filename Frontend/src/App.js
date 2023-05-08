import './App.css';
import { Routes, Route } from "react-router-dom"
import { useContext, useEffect, useState } from 'react';
import axios from "axios"

import Main from './Components/Main/Main.jsx';
import HouseDetails from './Components/HouseDetails/HouseDetails';
import Sell from './Components/Sell/Sell.jsx';
import Edit from './Components/Edit/Edit';
import Signup from './Components/Auth/Signup/Signup';
import Login from './Components/Auth/Login/Login';
import { Context } from './Components/Context/Context';
import RentList from './Components/RentList/RentList';

function App() {
  const { isLogged, fetchData, data }=useContext(Context)
  const [filtered,setFiltered]=useState([])

  const filterData=(query)=>{
    setFiltered(data.filter(e=>e.title.toUpperCase().includes(query.toUpperCase()) || e.location.toUpperCase().includes(query.toUpperCase())))
  }

  return (
    <Routes>
      <Route path="/" element={<Main/>}/>
      <Route path="/sell" element={<Sell/>}/>
      <Route path="/house/:id" element={<HouseDetails/>}/>
      <Route path='/edit/:id' element={<Edit/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/mylist" element={<RentList/>} />
    </Routes>
  )
}

export default App;
