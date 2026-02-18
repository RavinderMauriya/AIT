import React from 'react'

const App = () => {
  return (
    <div className='w-screen h-screen flex flex-col justify-center align-middle'>
      <h2 className='font-bold mx-auto text-3xl p-5'>About our apps</h2>
      <p className='mx-auto'>A visual collection of our most recent works - each piece <br/> crafted with intention, emotion and style.</p>
      <div className='flex justify-center align-middle m-10'>
        <img className='rounded-2xl w-90 h-90' src="https://images.unsplash.com/photo-1555212697-194d092e3b8f?q=80&w=830&h=844&auto=format&fit=crop"/>
        <div className='p-5'>
            <h2 className='font-bold mx-auto text-3xl'>Our Latest features</h2>
            <p>Ship Beautiful Frontends Without the Overhead — Customizable, <br/>Scalable and Developer-Friendly UI Components.</p>
            <div className='flex flex-col justify-center align-middle'>
                <div className='p-4'>
                  <h3 className='font-bold'>Lightning-Fast Performance</h3>
                  <h4>Built with speed — minimal load times and optimized.</h4>

                </div>
                <div className='p-4'>
                  <h3 className='font-bold'>Beautifully Designed Components</h3>
                  <h4>Modern, pixel-perfect UI components ready for any project.</h4>
                </div>

                <div className='p-4'>
                  <h3 className='font-bold'>Plug-and-Play Integration</h3>
                  <h4>Simple setup with support for React, Next.js and Tailwind css.</h4>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default App
