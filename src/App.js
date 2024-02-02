import './App.css';
import User from './User';
import React, { useState } from 'react';
import Counter from './Counter';

function App() {
  const [name, setName] = useState("");
  const [toggleBtn, setToggleBtn] = useState(false);   

  function handleInputChange(event) {
    setName(event.target.value);
  }

  return (
    <>
      <div className="App">
        {!toggleBtn ?
        <div>
          <input type='text' onChange={handleInputChange} placeholder='enter your name'></input>
          <User Name={name}/>
        </div> 
        :
        null}
      </div>
      <div className="toggle-button">
        <button onClick={() => {setToggleBtn(!toggleBtn)}} > Counter </button>
      </div>
      <div className="App">
        { toggleBtn ? <Counter /> : null  }
      </div>
    </>
  );
}

export default App;
