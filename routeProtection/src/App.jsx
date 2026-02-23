import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Login from "./components/Login"
import About from "./components/About"

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
