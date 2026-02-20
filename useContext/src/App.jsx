import React from 'react';
import { CounterProvider } from './Context/counterContext.jsx';
import HomePage from "./Components/Home.jsx";

function App() {
  return (
    <CounterProvider>
      <HomePage />
    </CounterProvider>
  );
}

export default App;