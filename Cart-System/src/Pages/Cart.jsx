import React from 'react'

const Cart = ({ cart, updateItemQuantity }) => {
  return (
    <div>
      <h2>this is Cart Page</h2>
      {cart.length === 0 && <p>Cart is empty</p>}
      {cart.map((item) => {
        return (
          <div key={item.id}>
            <span>{item.id}</span>
            <span>{item.name}</span>
            <span>{item.quantity}</span>
            <button onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>+</button>
            <button onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>-</button>
          </div>
        )
      })}
    </div>
  )
}

export default Cart
