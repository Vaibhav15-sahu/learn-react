import './App.css';
import User from './User';
import React, { useState } from 'react';
// import Counter from './Counter';

function App() {
  const [name, setName] = useState("");

  function handleInputChange(event) {
    setName(event.target.value);
  }
  return (
    <>
      <div className="App">
        <input type='text' onChange={handleInputChange} placeholder='enter your name'></input>
        <User Name={name}/>
        {/* <Counter /> */}
      </div>
    </>
  );
}

export default App;
