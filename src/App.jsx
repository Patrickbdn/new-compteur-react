import React, { useState } from 'react';// pour charger la bibliothèque React
import Counter from './Components/Counter/Counter';// pour charger le jsx counter
import Button from './Components/Button/Button';// pour charger le jsx button
import './App.css';

const App = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);//pour incrementer de 1 le compteur
  const decrement = () => {
    if (count > 0) {setCount(count - 1);
    }//pour décrementer le compteur de 1 mais pas sous 0
  };
  const reset = () => setCount(0);// pour remettre le compteur à 0

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
