import React from 'react'
import { useEffect } from 'react'
import axios from "axios"
import { useState } from 'react'

const App = () => {
  const [Result, setResult] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts")
    .then(res=>setResult(res.data));
  },[]);
  return (
    <div>
      <h2>POST</h2>
      {Result.map(post=>
        <p key={post.id}>{post.title}</p>
      )}
    </div>
  )
}

export default App


