import React, { useState } from 'react';
import Counter from './Components/Counter/Counter';
import Button from './Components/Button/Button';

const App = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => {
    if (count > 0) {setCount(count - 1);
    }
  };
  const reset = () => setCount(0);

  return (
    <div className="App">
      <h1>Compteur de Participants</h1>
      <Counter count={count} />
      <div>
        <Button onClick={increment} label="Incrémenter" />
        <Button onClick={decrement} label="Décrémenter" />
        <Button onClick={reset} label="Réinitialiser" />
      </div>
    </div>
  );
};

export default App;
