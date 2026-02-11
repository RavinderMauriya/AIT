import React, { useState } from 'react'

const App = () => {
  const [Dark, setDark] = useState(false);
  const ThemeChange = ()=>{
  setDark(!Dark)
  }
  return (
    <div style={{
      background: Dark ? "black" : "white",
      color: Dark ? "white":"black",
      width:"100vw",
      height:"100vh"
    }}>
      <button onClick={ThemeChange}>Change Theme</button>
    </div>
  )
}

export default App
