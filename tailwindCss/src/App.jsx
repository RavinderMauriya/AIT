import React from 'react'

const App = () => {
  return (
    <div>
      <nav className='flex justify-between items-center px-8 sticky top-0 z-50 text-purple-600 bg-amber-300 opacity-80'>
        <div className='text-blue-900 font-bold text-xl'>
          Ravinder
        </div>
        <div className='flex gap-6 items-center'>
          <div className='py-5 px-4 cursor-pointer font-bold hover:bg-amber-500'>home</div>
          <div className='py-5 px-4 cursor-pointer font-bold hover:bg-amber-500'>project</div>
          <div className='py-5 px-4 cursor-pointer font-bold hover:bg-amber-500'>about</div>
          <div className='py-5 px-4 cursor-pointer font-bold hover:bg-amber-500'>contact</div>
        </div>
      </nav>
      <div className='w-full h-screen flex justify-around items-center bg-[url(https://static.vecteezy.com/system/resources/thumbnails/008/311/935/small/the-illustration-graphic-consists-of-abstract-background-with-a-blue-gradient-dynamic-shapes-composition-eps10-perfect-for-presentation-background-website-landing-page-wallpaper-vector.jpg)] bg-cover'>

        <div >
          <h2 className='font-bold text-[30px]'>Headings</h2>
          <p className='p-9'>random words sdfskdn sdgfld kngkfds;gl knsdgknksd klsdhfn sdfjsf sjkdfsd sjdfbsd skfnsd</p>
          <button className='p-5 bg-amber-300 rounded-2xl'>Click me</button>

        </div>
        <img className='w-70 h-80' src="https://static.vecteezy.com/system/resources/thumbnails/036/428/188/small/ai-generated-portrait-of-smiling-businessman-wearing-suit-isolated-free-photo.jpg"></img>

      </div>
      <div className='w-full h-screen bg-red-300 bg-[url(https://static.vecteezy.com/system/resources/thumbnails/008/311/935/small/the-illustration-graphic-consists-of-abstract-background-with-a-blue-gradient-dynamic-shapes-composition-eps10-perfect-for-presentation-background-website-landing-page-wallpaper-vector.jpg)] bg-cover'>
        <h2>main content</h2>


      </div>
    </div>
  )
}

export default App
