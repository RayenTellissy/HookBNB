import './App.css';
import {Routes, Route} from "react-router-dom"
import Main from './Components/Main/Main';
import { useEffect, useState } from 'react';
import axios from "axios"

const url="http://localhost:3001/houses/getAll"

function App() {
  const [data,setData]=useState([])

  useEffect(()=>{
    axios.get(url).then(res=>setData(res.data))
  },[])
  console.log(data)

  return (
    <Routes>
      <Route path="/" element={<Main data={data} />}/>
    </Routes>
  )
}

export default App;
