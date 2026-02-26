import React from 'react'

const App = () => {
  return (
    <div className='w-screen min-h-screen flex flex-col bg-gray-50'>
      <div className='flex flex-col justify-center items-center py-12'>
        <h2 className='font-bold text-4xl p-5'>About our apps</h2>
        <p className='text-center text-gray-600 max-w-2xl'>
          A visual collection of our most recent works - each piece <br/> crafted with intention, emotion and style.
        </p>
      </div>
      
      <div className='flex flex-col lg:flex-row justify-center items-center gap-10 px-10 pb-12'>
        <img className='rounded-2xl w-80 h-80 object-cover' src="https://images.unsplash.com/photo-1555212697-194d092e3b8f?q=80&w=830&h=844&auto=format&fit=crop"/>
        <div className='max-w-md'>
          <h2 className='font-bold text-3xl mb-4'>Our Latest features</h2>
          <p className='text-gray-700 mb-6'>
            Ship Beautiful Frontends Without the Overhead — Customizable, <br/>Scalable and Developer-Friendly UI Components.
          </p>
          <div className='space-y-4'>
            <div className='p-4 bg-white rounded-lg shadow'>
              <h3 className='font-bold text-lg'>Lightning-Fast Performance</h3>
              <h4 className='text-gray-600'>Built with speed — minimal load times and optimized.</h4>
            </div>
            <div className='p-4 bg-white rounded-lg shadow'>
              <h3 className='font-bold text-lg'>Beautifully Designed Components</h3>
              <h4 className='text-gray-600'>Modern, pixel-perfect UI components ready for any project.</h4>
            </div>
            <div className='p-4 bg-white rounded-lg shadow'>
              <h3 className='font-bold text-lg'>Plug-and-Play Integration</h3>
              <h4 className='text-gray-600'>Simple setup with support for React, Next.js and Tailwind css.</h4>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default App
