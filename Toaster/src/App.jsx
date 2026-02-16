import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './Components/Home1.jsx'
import {Toaster} from "react-hot-toast"


const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Toaster
      />
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
