// atm system
// import React from 'react'
// import { useState,useEffect } from 'react'
// const App = () => {
//     const [Balance, setBalance] = useState(0);
//     const [Amount, setAmount] = useState(0);
    
//     const deposit =()=>{
//         setBalance((prev)=>prev+=Amount);
//     }
//     const withdraw=()=>{
//         setBalance((prev)=>prev-=Amount);
//     }

//     useEffect(()=>{
//       document.title=`Balance: ${Balance}`;
//     },[Balance])
//   return (
//     <div>
//       <h2>Balance is :{Balance}</h2><br/>
//       <input type="number" placeholder='Enter Amount'  onChange={(e)=>{setAmount(Number(e.target.value))}}/><br/>
//       <button onClick={deposit}>Deposit</button>
//       <button onClick={withdraw}>Withdraw</button>
//     </div>
//   )
// }

// export default App

//React Router Dom & Cart System
import React, { useState } from 'react'
import Nav from './Components/Nav'
import {Routes,Route} from "react-router-dom"
import Home from './Pages/Home.jsx'
import Shop from "./Pages/Shop.jsx"
import About from "./Pages/About.jsx"
import Cart from "./Pages/Cart.jsx"

const App = () => {
  const [cart,setCart]=useState([]);

  const addToCart=(item)=>{
    const existing = cart.find((i)=>i.id===item.id);

    if(existing){
      setCart(
        cart.map((i)=>i.id===item.id?{...i,quantity:i.quantity+1}:i)
      )
    }else{
      setCart([...cart,{...item,quantity:1}])
    }
  }

  const updateItemQuantity=(id,qty)=>{
    if(qty<=0){
      setCart(cart.filter((i)=>i.id!==id))
    }else{
      setCart(cart.map((i)=>i.id===id?{...i,quantity:qty}:i))
    }
  }
  return (
    <div>
      <Nav cartLength={cart.length} />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/shop" element={<Shop addToCart={addToCart}/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/cart" element={<Cart cart={cart} updateItemQuantity={updateItemQuantity}/>}/>
      </Routes>
    </div>
  )
}

export default App
