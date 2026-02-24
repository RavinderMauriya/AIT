import React, { useEffect, useRef, useState } from 'react'

const App2 = () => {
    const [count, setCount] = useState(0);
    const val = useRef(0);
    const Change = ()=>{
        setCount((prev)=>prev+1)

        val.current = val.current +1;
    }

    const changebg = useRef();
    const bg = ()=>{
        changebg.current.style.backgroundColor = "red";
    }

    useEffect(()=>{
        console.log("On")
    },[changebg])
  return (
    <div>
        {/* useRef Example 1 */}
        <button onClick={Change}>
            Click
        </button>

        <h2>{count}</h2>
        <h2>{val.current}</h2><br></br>

        {/* useRef Example 2 */}
        <h1 ref = {changebg}>HELLO</h1>
        <button onClick={bg}>Change background</button>
    </div>
  )
}

export default App2