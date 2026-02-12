import React, { useEffect, useState } from 'react'

const App = () => {
  const [timer, settimer] = useState(0);
  
  useEffect(()=>{
    let interval = setInterval(()=>{
      settimer((prev)=>prev+1);
    },1000)

    return ()=>clearInterval(interval);
  },[timer])
  return (
    <div>
      <h3>Timer : {timer}</h3>
      
    </div>
  )
}

export default App
