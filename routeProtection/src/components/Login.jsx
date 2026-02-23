import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    
    const handleLogin = (e) => {
        e.preventDefault();

        if (username && password) {
            localStorage.setItem("token", "randomTokens");
            navigate("/about")
        } else {
            alert("Please fill all fields")
        }
    }

    return (
        <div>
            <form onSubmit={handleLogin}>
                <input type="text" placeholder='Enter Name' value={username} onChange={(e) => { setUsername(e.target.value) }} /><br />
                <input type="password" placeholder='Enter pass' value={password} onChange={(e) => { setPassword(e.target.value) }} /><br />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Login
