import './App.css';
import {Routes, Route} from "react-router-dom"
import { useEffect, useState } from 'react';
import axios from "axios"

import Main from './Components/Main/Main.jsx';
import Sell from './Components/Sell/Sell.jsx';

const url="http://localhost:3001/houses/getAll"

function App() {
  const [data,setData]=useState([])

  useEffect(()=>{
    axios.get(url).then(res=>setData(res.data))
  },[])

  return (
    <Routes>
      <Route path="/" element={<Main data={data}/>}/>
      <Route path="/sell" element={<Sell/>}/>
    </Routes>
  )
}

export default App;
