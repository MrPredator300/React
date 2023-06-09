//https://www.w3schools.com/react/react_usestate.asp
/*
Updating Objects and Arrays in State
When state is updated, the entire state gets overwritten.
What if we only want to update the color of our car?
If we only called setCar({color: "blue"}), this would remove the brand, model, and year from our state.
We can use the JavaScript spread operator to help us.
*/

import React from 'react'
import { useState } from 'react'

const DemoUseStateUpdateObj = () => {

    const [car,setCar] = useState({
        brand: "Ford",
        model: "Mustand",
        year: 2013,
        color: "Gray"
    })

    const UpdateColor =()=>{
        setCar(previousState =>{
            return {...previousState, color: "Blue"}
        })
    }

    return (
        <div>
            <h1>DemoUseStateUpdateObj</h1>
            <p>The car is a {car.brand} and its model is {car.model}. It was manufactured in {car.year} and it is a {car.color} color.</p>
            <button onClick={UpdateColor}>Click Me!</button>
            {/* <button onClick={()=> setCar({color: "blue"})}>Click Me!</button> */}               {/*This will remove rest of the brand,model,year */}
        </div>
    )
}

export default DemoUseStateUpdateObj