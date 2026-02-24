// Onfocus tigger on page load
// import React, { useEffect, useRef } from 'react'

// const App3 = () => {
//     const abc = useRef();

//     useEffect(()=>{
//     abc.current.focus();
//     },[])

//     return (
//         <div>
//             <input type="text" placeholder='Enter Here' ref={abc}></input>
//         </div>
//     )
// }

// export default App3


//Scroll into view on message page like whatapp message
import React from 'react'
import { useState, useEffect, useRef } from 'react'

const App3 = () => {
    const txt = useRef();
    const [message,setMessage] = useState([]);
    const bottomref = useRef();
    
    const addMessage = ()=>{
        setMessage([...message,"new message"]);
        console.log(message)
    }

    useEffect(()=>{
        bottomref.current.scrollIntoView({behavior:"smooth"});
    },[message])
    return (
        <div style={{height:"200px",border:"1px solid blue", overflowY:"auto"}}>
            {message.map((message,id)=>{
                return <p key={id}>{message}</p>
            })}
            <div ref={bottomref}></div>
           <button onClick={addMessage}>add msg</button>
        </div>
    )
}

export default App3