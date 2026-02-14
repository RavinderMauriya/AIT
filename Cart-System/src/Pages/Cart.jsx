import React from 'react'

const Cart = ({ cart, updateItemQuantity }) => {
  return (
    <div>
      <h2>this is Cart Page</h2>
      {cart.length === 0 && <p>Cart is empty</p>}
      <table border="1" cellPadding="10" cellSpacing="0">
        <tr>
          <th>Image</th>
          <th>Name</th>
          <th>Quantity</th>
          <th>Update Quantity</th>
          <th>Price</th>
        </tr>
        {cart.map((item) => {
          return <tr key={item.id}>
            <td><img src={item.image} alt={item.name} className='cartimage'/></td>
            <td>{item.name}</td>
            <td>{item.quantity}</td>
            <td>
              <button onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>+</button>
              <button onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>-</button>
            </td>
            <td>${item.price * item.quantity}</td>
          </tr>
        })}
      </table>
    </div>
  )
}

export default Cart
