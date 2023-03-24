import { useState } from "react";

const CounterHookTwo =() =>{

    const initialState = {
        counter: 0,
        name: "Sunny"
    }

    const[data, setData] = useState(initialState)

    console.log(data)

    const incrementCounter = () =>{
        setData({
            ...data,                                        //Here the (with 3 dot's) ...data is a SPREAD OPERATOR, helps to copy the existing state and updates the existing value
            counter: data.counter + 1
        })
    }

    const UpdateName = () =>{
        setData({
            ...data,                                        //Here the (with 3 dot's) ...data is a SPREAD OPERATOR, helps to copy the existing state and updates the existing value
            name: "Bunny"
        })
    }

//the ...data is a SPREAD OPERATOR which helps to keep both the values and not lose the value without the ...data or the spread operator the counter value goes missing (OR) the Name value goes missing

    return <section>
        <h1>usedState hook Demo</h1>
        <h3>Counter: {data.counter}</h3>
        <h3>Name: {data.name}</h3>
        <button onClick={incrementCounter}>increment Counter</button>
        <button onClick={UpdateName}>Update Name</button>
    </section>
}

export default CounterHookTwo;