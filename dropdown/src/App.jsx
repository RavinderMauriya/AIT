import React, { useState } from 'react'

const App = () => {
  const [menu, setmenu] = useState("NA");
  const formhandler =()=>{
    e.preventDefault();
  }
  return (
    <div>
        <select onChange={(e)=>setmenu(e.target.value)}>
        <option>apple</option>
        <option>banana</option>
        <option>mango</option>
        <option>orange</option>
      </select>
      
      <div>
        You selected : {menu}
      </div>
    </div>
  )
}

export default App
