//https://www.w3schools.com/react/react_usestate.asp

import React from 'react'
import { useState } from 'react'

const DemoUseState = () => {
    const [color,setColor] = useState("Blue")

    return (
        <div>
            <h1>DemoUseState Hook</h1>
            <h3>My Favorite color is {color}</h3>
            <button onClick={()=> setColor("Green")}>Click here to change color!</button>
        </div>
    )
}

export default DemoUseState