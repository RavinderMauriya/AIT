// import React from 'react';
// import { CounterProvider } from './components/Cartcontext.jsx';
// import HomePage from "./components/Home.jsx";

// function App() {
//   return (
//     <CounterProvider>
//       <HomePage />
//     </CounterProvider>
//   );
// }

// export default App;

import React from 'react'
import Homepage from './components/Home'
import Shop from './components/Shop'
import Contact from './components/Contact'
import About from './components/About'
import Nav from './components/Nav'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeContext, ThemeProvider } from './components/ThemeContext1'
const App = () => {
  return (
    <div>
      <ThemeProvider>
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  )
}

export default App
