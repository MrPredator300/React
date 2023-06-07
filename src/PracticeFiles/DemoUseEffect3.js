//https://www.w3schools.com/react/react_useeffect.asp
/*
Here is an example of a useEffect Hook that is dependent on a variable. If the count variable updates, the effect will run again:
If there are multiple dependencies, they should be included in the useEffect dependency array.
*/

import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const DemoUseEffect3 = () => {
    const [count,setCount] = useState(0);
    const [calculation,setCalculation] = useState(0);

    useEffect(()=>{
        setCalculation(()=> count * 2);
    },[count])  // <- add the count variable here

    
    return (
        <div>
            <h1>DemoUseEffect3</h1>
            <p>Count: {count}</p>
            <button onClick={() => setCount((c)=> c+1)}>+</button>
            <p>Calculation: {calculation}</p>
        </div>
    )
}

export default DemoUseEffect3