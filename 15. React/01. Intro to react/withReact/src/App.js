import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [value, setValue] = useState(0)

  return (
    <div className="App">
      <div className='counter'> {value} </div>

      <button onClick={() => {setValue(value + 1)}}>Click me</button>

    </div>
  );
}

export default App;
