//https://www.w3schools.com/react/react_useeffect.asp
/*
Effect Cleanup
Some effects require cleanup to reduce memory leaks.
Timeouts, subscriptions, event listeners, and other effects that are no longer needed should be disposed.
We do this by including a return function at the end of the useEffect Hook.
Note: To clear the timer, we had to name it.
*/

import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const EffectCleanUp = () => {
    const [count,setCount] = useState(0)

    useEffect(()=>{
       let timer = setTimeout(()=>{
        setCount((count) => count + 1);
       }, 1000)
       return ()=> clearTimeout(timer)
    }, []);

    return (
        <div>
            <h1>EffectCleanUp</h1>
            <h1>I've rendered {count} times!</h1>
        </div>
    )
}

export default EffectCleanUp