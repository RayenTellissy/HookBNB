import './App.css';
import {Routes, Route} from "react-router-dom"
import { useEffect, useState } from 'react';
import axios from "axios"

import Main from './Components/Main/Main.jsx';
import HouseDetails from './Components/HouseDetails/HouseDetails';
import Sell from './Components/Sell/Sell.jsx';
import Edit from './Components/Edit/Edit';

const url="http://localhost:3001/houses/getAll"

function App() {
  const [data,setData]=useState([])
  const [filtered,setFiltered]=useState([])

  useEffect(()=>{
    axios.get(url).then(res=>setData(res.data))
  },[])

  return (
    <Routes>
      <Route path="/" element={<Main data={data}/>}/>
      <Route path="/sell" element={<Sell/>}/>
      <Route path="/house/:id" element={<HouseDetails data={data}/>}/>
      <Route path='/edit/:id' element={<Edit/>}/>
    </Routes>
  )
}

export default App;
