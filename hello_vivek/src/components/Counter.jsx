import React from 'react';
import useCounter from '../hooks/useCounter';

const Counter = () => {
 const { count, increment, decrement } = useCounter();

 return (
    <div>
      <h1>Count: {count}</h1>
      <button style={{backgroundColor:'lightblue'}} onClick={increment}>Increment</button>
      <button style={{backgroundColor:'lightblue'}} onClick={decrement}>Decrement</button>
    </div>
 );
};

export default Counter;