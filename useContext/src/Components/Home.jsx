import React, { useContext } from 'react';
import { CounterContext } from '../Context/counterContext';

const HomePage = () => {
  const { count, increment, decrement } = useContext(CounterContext);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Counter: {count}</h1>
      <button onClick={increment} style={{ marginRight: '10px' }}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default HomePage;