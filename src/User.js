import React, { useState } from 'react'

function User() {
    const [name, setName] = useState("");
    
    function handleInputChange(event){
        setName(event.target.value) ;
    }

    return (
        <>
            <input type='text' onChange={ handleInputChange } placeholder='enter your name'></input>
            <h1>Hello {name} ... !</h1>
        </>
    )
}

export default User