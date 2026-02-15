import React from 'react'

const Nav = ({query,setQuery}) => {
    return (
        <div>
            <nav className='navbar'>
                <h2>Ravinder</h2>
                <input type="text" placeholder='Search...' value={query} onChange={(e)=>{setQuery(e.target.value)}} />
                <div className='nav-items'>
                    <div>Home</div>
                    <div>Shop</div>
                    <div>About</div>
                </div>
            </nav>
        </div>
    )
}

export default Nav
