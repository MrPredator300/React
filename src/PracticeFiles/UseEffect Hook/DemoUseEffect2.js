//https://www.w3schools.com/react/react_useeffect.asp

import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const DemoUseEffect2 = () => {
    const [count,setCount] = useState(0);

    useEffect(()=>{
        setTimeout(()=>{
            setCount((count)=> count + 1);
        }, 1000)
    },[])           // <- add empty brackets here

    return (
        <div>
            {/* <h1>DemoUseEffect2</h1> */}
            <h1>I've Rendered {count} times!</h1>
        </div>
    )
}

export default DemoUseEffect2