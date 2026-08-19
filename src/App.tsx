import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Talaid Counter</h1>
      <br />

      <button onClick={() => setCount(count - 1)}>-</button>

      <div>{count}</div>

      <button onClick={() => setCount(count + 1)}>+</button>
    </>
  );
}

export default App;
