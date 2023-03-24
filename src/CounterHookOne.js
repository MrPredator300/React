import { useState } from "react";

const CounterHookOne =() =>{

    const[counter, setCounterOne] = useState(0);       //so here the value '0' is saved in the 'counter' variable/state in const[counter] so that means counter=0 and setCounterOne is a function which is used to update the 'counter' variable/state
    const[name,setName] = useState("Sudha");

    const incrementCounter = () =>{

        setCounterOne(counter + 1)             //we have to use the method which is already defined in the const[] and to update the value we use "setCounterOne" variable but to access the value we use "counter" variable
    }

    const decrementCounter = () =>{
        setCounterOne(counter - 1)             //Again we use the same setCounterOne to decerment 
    }

    const resetCounter = () =>{
        setCounterOne(0)
    }

    const UpdateName = () =>{
        setName("Sunny")
    }

    return <section>
        <h1>Hooks Demo-1 - {name}</h1>
        <button onClick={UpdateName}>Update Name</button>
        <h3>Counter: {counter}</h3>
        <button onClick={incrementCounter}>Increment</button>
        <button onClick={decrementCounter}>Decrement</button>
        <button onClick={resetCounter}>Reset</button>
    </section>

}

export default CounterHookOne;