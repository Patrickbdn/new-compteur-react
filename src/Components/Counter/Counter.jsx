import React from 'react';
import './Counter.css';

const Counter = ({ count }) => {
  return (
    <div className="counter">
      <h2>Nombre de participants : {count}</h2>
    </div>
  );
};

export default Counter;
