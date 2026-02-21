// import React, { useContext } from 'react';
// import { CounterContext } from './Cartcontext';
// import Nav from './Nav.jsx'

// const HomePage = () => {
//     const { count, increment, decrement } = useContext(CounterContext);

//     return (
//         <div>
//             <Nav/>
//             <div style={{ textAlign: 'center', marginTop: '50px' }}>
//                 <h1>Counter: {count}</h1>
//                 <button onClick={increment} style={{ marginRight: '10px' }}>Increment</button>
//                 <button onClick={decrement}>Decrement</button>
//             </div>
//         </div>
//     );
// };

// export default HomePage;

import React, { useContext } from 'react'
import Nav from './Nav'
import { ThemeContext } from './ThemeContext1'

const Home = () => {
  const {theme} = useContext(ThemeContext);
  return (
    <div className='w-full h-screen'>
      <div className="flex flex-col items-center justify-center h-full">
        <h1 className="text-4xl font-bold mb-4">Welcome to Home Page</h1>
        <p className="text-lg text-gray-500 mb-8">Discover amazing products at great prices</p>
        <button className="border shadow font-bold py-2 px-4 rounded">
          Shop Now
        </button>
      </div>
    </div>
  )
}

export default Home
