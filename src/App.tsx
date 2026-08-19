import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Talaid Counter</h1>

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '1rem',
        }}
      >
        <button
          onClick={() => setCount(count - 1)}
          style={{
            padding: '1rem 2rem',
            background: 'red',
            color: 'white',
            border: 'none',
          }}
        >
          -
        </button>

        <div>{count}</div>

        <button
          onClick={() => setCount(count + 1)}
          style={{
            padding: '1rem 2rem',
            background: 'green',
            color: 'white',
            border: 'none',
          }}
        >
        
          +
        </button>
      </div>
    </>
  );
}

export default App;
