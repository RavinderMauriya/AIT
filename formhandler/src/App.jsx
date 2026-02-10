import React, { useEffect } from 'react'

const App = () => {
  const [name, setname] = React.useState("");
  const [age,setage] = React.useState("");
  const [date,setdate] = React.useState("");

  const [show,setshow]= React.useState(false);

  const formhandler = (e) =>{
    e.preventDefault();
    setInterval(()=>{setshow(true)},3000)
  }
  
  return (
    <div>
      <form onSubmit={formhandler}>
        <input type="text" placeholder='Enter Your name' name="username" value={name} onChange={(e)=>{setname(e.target.value)}} required></input>
        <input type="number" placeholder='Enter number' name="age" value={age} onChange={(e)=>{setage(e.target.value)}} required></input>
        <input type="date" placeholder='Enter date' name="date" value={date} onChange={(e)=>{setdate(e.target.value)}}></input>
        
        <button type='submit'>Submit</button>
      </form>
     {show &&(
      <div>
        Name is {name}
        Number is {age}
        Date : {date}
      </div>)}
    </div>
  )
}

export default App
