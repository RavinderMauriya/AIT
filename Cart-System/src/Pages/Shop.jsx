import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Shop = ({addToCart}) => {
  const Navigate = useNavigate();

  const items = [
    {id:1,name:"Apple",price:50},
    {id:2,name:"Banana", price:30},
    {id:3,name:"Mango", price:100},
    {id:4,name:"Grapes", price:80},
  ]
  const handleAdd=(item)=>{
    addToCart(item)
    Navigate("/cart");
  }

  return (
    <div>
      <h2>This is Shop Page</h2>
      {items.map((items)=>{
        return <div>{items.id},{items.name}, {items.price}
        <button onClick={()=>{handleAdd(items)}}>Add to Cart</button>
        </div>
      })}
      
    </div>
  )
}

export default Shop
