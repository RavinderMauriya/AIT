import React from 'react'

const Cart = ({ cart, updateItemQuantity }) => {
  return (
    <div>
      <h2>Cart</h2>
      {cart.length===0 && <p>Cart Empty</p>}
      {cart.map((item) => {
        return <div key={item.id}>{item.id},{item.name},{item.quantity}
          <button onClick={()=>updateItemQuantity(item.id, item.quantity + 1)}>+</button>
          <button onClick={()=>updateItemQuantity(item.id, item.quantity - 1)}>-</button>
        </div>
      })}
    </div>
  )
}

export default Cart
