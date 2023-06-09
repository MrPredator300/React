//https://www.w3schools.com/react/react_usestate.asp

import React from 'react'
import { useState } from 'react'

const DemoUseStateHold = () => {

    const [brand,setBrand] = useState("Ford")
    const [model,setModel] = useState("Mustang")
    const [year,setYear] = useState("2012")
    const [color,setColor] = useState("Gray")

    return (
        <div>
            <h1>DemoUseStateHold</h1>
            <h3>The brand of the car is {brand}</h3><button onClick={()=> setBrand("Audi")}>Click me!</button>
            <h3>The model of the car is {model}</h3><button onClick={()=> setModel("R8")}>Click me!</button>
            <h3>The year of manufacture is {year}</h3><button onClick={()=> setYear("2020")}>Click me!</button>
            <h3>The color of the car is {color}</h3><button onClick={()=> setColor("Green")}>Click me!</button>
        </div>
    )
}

export default DemoUseStateHold