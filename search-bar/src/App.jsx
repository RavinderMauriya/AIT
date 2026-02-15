import React, { useState } from 'react'
import Nav from './Components/Nav.jsx'

const App = () => {
  const [query, setQuery] = useState("");

  const items = [
    { id: 1, name: "Ravinder", age: 24 },
    { id: 2, name: "Karan", age: 23 },
    { id: 3, name: "Ravi", age: 25 },
    { id: 4, name: "Navi", age: 25 }
  ]

  const filterItems = items.filter((item) =>
    item.name.toLowerCase().includes(query.toLowerCase()) ||
    item.age.toString().includes(query.toLocaleLowerCase())
  )
  return (
    <div>
      <Nav query={query} setQuery={setQuery} />
      <div className='data'>
        {
          filterItems.map((i) => {
            return <li key={i.id}>{i.name}</li>
          })

        }
      </div>
    </div>
  )
}

export default App
