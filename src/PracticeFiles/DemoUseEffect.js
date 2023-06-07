//https://www.w3schools.com/react/react_useeffect.asp
/*
The useEffect Hook allows you to perform side effects in your components.
Some examples of side effects are: fetching data, directly updating the DOM, and timers.
useEffect accepts two arguments. The second argument is optional.
useEffect(<function>, <dependency>)

#But wait!! It keeps counting even though it should only count once!
useEffect runs on every render. That means that when the count changes, a render happens, which then triggers another effect.
This is not what we want. There are several ways to control when side effects run.
We should always include the second parameter which accepts an array. We can optionally pass dependencies to useEffect in this array.
*/

import React from 'react'
import { useState,useEffect } from 'react';

const DemoUseEffect = () => {
  const [count,setCount] = useState(0);
  
  useEffect(()=>{
    setTimeout(()=>{
      setCount((count) => count + 1);
    }, 1000);
  });

  return <h1>I've rendered {count} times!</h1>
    
}

export default DemoUseEffect