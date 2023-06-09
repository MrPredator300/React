//https://www.w3schools.com/react/react_usestate.asp


import React from 'react'
import { useState } from 'react'

const DemoUseStateHold2 = () => {

    const [car,setCar] = useState({
        brand: "Ford",
        model: "Mustang",
        color: "Gray",
        year: 2016
    })

    return (
        <div>
            <h1>DemoUseStateHold2</h1>
            <span>The car is a {car.brand} and it's model is {car.model}. The color is {car.color} which is manufactured in {car.year}</span>
        </div>
    )
}

export default DemoUseStateHold2