import React, { useState } from 'react'
import { useMemo } from 'react'

const UseMemoDemo = () => {

    const[counterOne,setCounterOne] = useState(0)
    const[counterTwo,setCounterTwo] = useState(0)

    const incrementOne =()=>{
        setCounterOne(counterOne + 1)
    }

    const incrementTwo =()=>{
        setCounterTwo(counterTwo + 1)
    }

/*
    const isEven =()=>{
        let i=0
        while(i<= 200000000)
        {
            i++;
        }

        return counterOne % 2 === 0
    }

*/

    const isEven = useMemo(()=>{
        let i=0
        while(i<= 200000000)
        {
            i++;
        }

        return counterOne % 2 === 0
    },[counterOne])


    return (
        <div>
            <h1>UseMemeDemo</h1>

{/*            <h2>Counter One - {counterOne} - {isEven() ? "Even": "Odd"}</h2>              */}
            <h2>Counter One - {counterOne} - {isEven ? "Even": "Odd"}</h2>                  {/* Here we didn't use isEven() as a function because useMemo() return a VALUE not a FUNCTION !!! so we write isEven */}
            <button onClick={incrementOne}>Increment One</button>
            <hr />
            <h2>Counter Two - {counterTwo}</h2>                                                {/* Counter One is taking more time than the Counter Two  */}
            <button onClick={incrementTwo}>Increment Two</button>
        </div>
    )
}

export default UseMemoDemo