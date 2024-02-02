import React from 'react'

function User(props) {
    console.log(props);
    return (
        <>
            <h1>Hello {props.Name} ... !</h1>
        </>
    )
}

export default User