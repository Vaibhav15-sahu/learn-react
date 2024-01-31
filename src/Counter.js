import React, { useState } from 'react';
import './App.css';


function Counter() {
    const [count, setCount] = useState(1);
    function updateCounter() {
        setCount(count + 1)
    }
    return (
        <>
            <div className="counter">
                <h1>Counter : {count} </h1>
                <button onClick={updateCounter}>Increase Counter</button>
            </div>
        </>
    )
}

export default Counter