import React, { useContext } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ThemeContext } from './ThemeContext1'

const Nav = () => {
  const { theme, changeTheme } = useContext(ThemeContext)

  return (
    <div className={`w-full sticky top-0 backdrop-blur-md`}>
      <div className="max-w-2xl mx-auto p-6">
        <ul className="flex justify-center items-center border rounded-3xl bg-white/30 backdrop-blur-lg shadow-lg p-5">

          <li>
            <Link to="/" className="p-2 m-3 font-bold rounded-2xl">
              Home
            </Link>
          </li>

          <li>
            <Link to="/shop" className="p-2 m-3 font-bold rounded-2xl">
              Shop
            </Link>
          </li>

          <li>
            <Link to="/contact" className="p-2 m-3 font-bold rounded-2xl">
              Contact
            </Link>
          </li>

          <li>
            <Link to="/about" className="p-2 m-3 font-bold rounded-2xl">
              About
            </Link>
          </li>

          <li>
            <span onClick={changeTheme} className="p-2 m-3 font-bold rounded-2xl cursor-pointer hover:bg-white/50">
              {theme === 'dark' ? '☀️' : '🌙'}
            </span>
          </li>

        </ul>
      </div>
    </div>
  )
}

export default Nav
