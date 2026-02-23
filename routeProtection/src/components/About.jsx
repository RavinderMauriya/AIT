import React from 'react'
import { useEffect } from 'react'
import {useNavigate} from 'react-router-dom'


const About = () => {
    const navigate = useNavigate();

    useEffect(()=>{
        const token = localStorage.getItem("token")

        if(!token){
            navigate("/")
        }
    },[])

    const logoutForm = ()=>{
        localStorage.removeItem("token");
        navigate("/")
    }
  return (
    <div>
      <h1>this is about page</h1>
      <button onClick={logoutForm}>Logout</button>
    </div>
  )
}

export default About
