import React, { useDebugValue, useState } from 'react'
import Navbar from './Components/Navbar'

const App = () => {
  const [theme, setTheme] = useState('light');

  const changeTheme = ()=>{
    const newTheme = theme === 'light'?'dark':'light';
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark", newTheme==='dark')
  }
  return (
    <div>
      <Navbar theme={theme} changeTheme={changeTheme} />
      <div className="min-h-screen bg-gray-100 p-10 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">

          <div className="bg-white dark:bg-gray-500 dark:text-white p-6 rounded-xl shadow-md">
            <h2 className="text-xl font-semibold mb-2">Card 1</h2>
            <p className="text-white">
              Dummy content for layout testing.
            </p>
            <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Action
            </button>
          </div>

          <div className="bg-white dark:bg-gray-500 dark:text-white  p-6 rounded-xl shadow-md">
            <h2 className="text-xl font-semibold mb-2">Card 2</h2>
            <p className="text-white">
              Dummy content for layout testing.
            </p>
            <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Action
            </button>
          </div>

          <div className="bg-white dark:bg-gray-500 dark:text-white  p-6 rounded-xl shadow-md">
            <h2 className="text-xl font-semibold mb-2">Card 3</h2>
            <p className="text-white">
              Dummy content for layout testing.
            </p>
            <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Action
            </button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default App
