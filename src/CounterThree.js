
import React, { useState } from 'react'
import { useEffect } from 'react';

const CounterThree = () => {

  const[counterOne,setCounterOne] = useState(0);
  const[counterTwo,setCounterTwo] = useState(10);

  const incrementCounterOne = () =>{
    setCounterOne(counterOne + 1)
  }

  const incrementCounterTwo =()=>{
    setCounterTwo(counterTwo + 1)
  }

/*
  document.getElementById("one").addEventListener("click",incrementCounterOne)          these two lines cannot be written and it will generate an Error always write this when DOM has been completly loaded
  document.getElementById("two").addEventListener("click",incrementCounterTwo)          Error: Cannot read properties of null (reading,'addEventListener')
*/


  useEffect(()=>{
    document.getElementById("one").addEventListener("click",incrementCounterOne)        //useEffect() is called when the DOM has been completly loaded
    document.getElementById("two").addEventListener("click",incrementCounterTwo)

    console.log("Calling...")
  },[counterOne,counterTwo])

  return (
    <div>
        <h1>Counter One - {counterOne}</h1>
        <button id="one">CounterOne</button>
        <hr />
        <h1>Counter Two - {counterTwo}</h1>
        <button id="two">CounterTwo</button>
    </div>
  )
}

export default CounterThree
