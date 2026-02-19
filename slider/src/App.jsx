import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { ChevronLeft } from 'lucide-react';
import { ChevronRight } from 'lucide-react';

const App = () => {
  const images = [
    "https://img.freepik.com/free-vector/modern-abstract-dark-violate-pink-background_84443-2788.jpg?semt=ais_user_personalization&w=740&q=80",
    "https://i0.wp.com/picjumbo.com/wp-content/uploads/green-natural-background-with-wooden-surface-free-image.jpeg?w=2210&quality=70",
    "https://img.freepik.com/free-vector/modern-abstract-dark-violate-pink-background_84443-2784.jpg?semt=ais_user_personalization&w=740&q=80",
    "https://static.vecteezy.com/system/resources/thumbnails/001/849/553/small/modern-gold-background-free-vector.jpg"
  ]
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000)

    return () => clearInterval(interval);
  }, []);

  const prev = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  }
  const next = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  }
  return (
    <div className='w-full h-auto bg-gray-200'>
      <div className='relative overflow-hidden'>
        <img className="w-full h-[400px] object-cover rounded" src={images[current]}></img>
        <button className='absolute left-2 top-1/2 py-10 px-3 bg-gray-400 rounded-full' onClick={prev}><ChevronLeft /></button>
        <button className='absolute right-2 top-1/2 py-10 px-3 bg-gray-400 rounded-full' onClick={next}><ChevronRight/></button>
      </div>
    </div>
  )
}

export default App
