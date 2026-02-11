import React from 'react'
import { useEffect, useState } from 'react'

const App = () => {
  const [img, setimg] = useState();
  
  const GetData = async ()=>{
    const response = await fetch("https://picsum.photos/v2/list?page=2&limit=9");
    const dt = await response.json();
    console.log(dt);
  }
  
  return (
    <div>
      <button onClick={GetData}>Click Me</button>
    </div>
  )
}

export default App
