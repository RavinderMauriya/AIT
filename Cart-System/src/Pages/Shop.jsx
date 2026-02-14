import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Shop = ({ addToCart }) => {
  const Navigate = useNavigate();

  const items = [
    { id: 1, name: "Apple", price: 50, image: "https://img.freepik.com/free-vector/apple-colorful-vector-design_341269-1123.jpg?semt=ais_wordcount_boost&w=740&q=80" },
    { id: 2, name: "Banana", price: 30, image: "https://static.vecteezy.com/system/resources/thumbnails/028/239/256/small/beauty-of-banana-generative-ai-free-photo.jpg" },
    { id: 3, name: "Mango", price: 100, image: "https://5.imimg.com/data5/SELLER/Default/2025/2/489247026/HF/FY/TB/240545082/fresh-mango-fruit.jpeg" },
    { id: 4, name: "Grapes", price: 80, image: "https://www.bbassets.com/media/uploads/p/l/40218332_6-fresho-grapes-green.jpg" },
  ]
  const handleAdd = (item) => {
    addToCart(item)
    Navigate("/cart");
  }

  return (
    <div>
      <h2>This is Shop Page</h2>
      <div className='main'>
        {items.map((items) => {
          return <div className='card' key={items.id}>
            <div className='image'><img src={items.image}></img></div>
            <div className='carddet'>
              <div>{items.name}</div>
              <div>Rs: {items.price}</div>
            </div>
            <button className="cart" onClick={() => { handleAdd(items) }}>Add to Cart</button>
          </div>
        })}
      </div>
    </div>
  )
}

export default Shop
