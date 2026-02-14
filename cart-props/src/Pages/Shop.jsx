import React from 'react'

const Shop = ({addToCart}) => {
  const items=[
    {id:1,name:"apple",price:70},
    {id:2,name:"banana",price:50},
    {id:3,name:"orange",price:60}
  ]

  return (
    <div>
      <h2>Shop</h2>
      {items.map((item)=>{
        return <div key={item.id}><p>{item.name} - Rs{item.price}</p><button onClick={() => addToCart(item)}>Add to Cart</button></div>
      })}
    </div>
  )
}
export default Shop
