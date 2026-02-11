import React, { useState } from 'react'

const App = () => {
  const [otp, setotp] = useState("");
  
  const otpgn = ()=>{
    console.log("wait...")
    let a = Math.floor(1000+Math.random()*9000)
    setotp(a)
    console.log(a)
  }
  return (
    <div>
      OTP GENERATOR : {otp} <br/>
      <button onClick={otpgn}>Get Otp</button>
    </div>
  )
}

export default App
