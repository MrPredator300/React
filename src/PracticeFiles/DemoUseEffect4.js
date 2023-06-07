import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const DemoUseEffect4 = () => {
    const [count,setCount] = useState(0);

    useEffect(()=>{
     document.title = `You have clicked ${count} times`
    })

    return (
        <div>
            <h1>DemoUseEffect4</h1>
            <p>You have clicked {count} times</p>
            <button onClick={()=> setCount(count + 1)}>Click Me</button>
        </div>
    )
}

export default DemoUseEffect4