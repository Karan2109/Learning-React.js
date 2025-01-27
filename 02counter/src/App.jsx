import './App.css'
import { useState } from 'react';

function App() {

  const [counter, setCounter] = useState(10 );
  // let counter = 10;
  const addValue = () => {    
    setCounter(counter + 1);
    if (counter == 20) {
      alert('Counter reached 20');
      setCounter(20);
    }
  }

  const removeValue = () => {   
    setCounter(counter - 1);
    if (counter == 0) {
      alert('Counter reached zero');
      setCounter(0);
    }
  };

  return (
    <>
      <h1>Hello Morning! Koders</h1>
      <h2>Counter number : {counter}</h2>

      <button onClick={addValue} style={{margin:'20px'}}>Increment Counter {counter}</button>
      <button onClick={removeValue}>Decrement Counter {counter}</button>
      <p>Footer: {counter}</p>
    </>
  )
}

export default App
