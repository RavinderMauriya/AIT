import React, { useState } from 'react'

const App = () => {
  const [title, settitle] = useState("");
  const [detail, setdetail] = useState("");

  const [task, settask] = useState([]);
  
  
  const formhandler = (e)=>{
    e.preventDefault();
    let copytask = ([...task,{title,detail}]);
    settask(copytask);
    console.log(copytask)
    settitle("")
    setdetail("")
    
  }
  
  return (
    <div>
      <form onSubmit={formhandler}>
        <input type="text" value={title} placeholder='Enter Heading' onChange={(e)=>{settitle(e.target.value)}}></input>
        <input type="text" value={detail} placeholder='Details..' onChange={(e)=>{setdetail(e.target.value)}}></input>
        <button type="submit">Submit</button>
      </form>
      <hr></hr>
      <div className='task'>
        {
          task.map((elm,id)=>{
            return <ul key={id}>
              <li><h4>{elm.title}</h4></li>
              <li>{elm.detail}</li>
            </ul>
          
          })
        }
      </div>
    </div>
  )
}

export default App
