import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Counter App</h1>
        <div className="counter-display">
          <h2>{count}</h2>
        </div>
        <div className="button-container">
          <button onClick={decrement} className="btn btn-minus">-</button>
          <button onClick={reset} className="btn btn-reset">Reset</button>
          <button onClick={increment} className="btn btn-plus">+</button>
        </div>
      </header>
    </div>
  );
}

export default App;
