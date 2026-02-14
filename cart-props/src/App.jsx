import React, { useState } from 'react'
import Nav from './Components/Nav.jsx'
import { Routes, Route } from "react-router-dom"
import Home from "./Pages/Home.jsx"
import Shop from './Pages/Shop.jsx'
import Cart from "./Pages/Cart.jsx"

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    const existing = cart.find((i) => i.id === item.id);

    if (existing) {
      setCart(cart.map((i) => i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i))
    } else {
      setCart([...cart, { ...item, quantity: 1 }])
    }
  }

  const updateItemQuantity = (id, qty) => {
    if (qty <= 0) {
      setCart(cart.filter((i) => i.id !== id))
    } else {
      setCart(cart.map(
        (i)=>i.id==id?{...i,quantity:qty}:i
      ))
    }
  }
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop addToCart={addToCart} />} />
        <Route path="/cart" element={<Cart cart={cart} updateItemQuantity={updateItemQuantity} />} />
      </Routes>
    </div>
  )
}

export default App
