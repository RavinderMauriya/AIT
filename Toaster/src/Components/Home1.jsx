import React from 'react'
import { useState } from 'react'
import {toast} from "react-hot-toast"
const Home = () => {
const [input, setInput] = useState();

const formHandler=(e)=>{
  e.preventDefault()
  toast.success("Input Done")
}
  return (
    <div>
      <h2>Home</h2>
      <form onSubmit={formHandler}>
        <input type="text" value={input} onChange={(e)=>setInput(e.target.value)}/>
        <button type="submit">Click Me</button>
      </form>
    </div>
  )
}

export default Home
