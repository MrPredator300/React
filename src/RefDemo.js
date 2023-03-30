import React from 'react'
import { useEffect } from 'react';
import { useRef } from 'react'

const RefDemo = () => {

    const divRef = useRef();                                           //we can pass like useRef(); or useRef('ram'); or useRef(''); but in the console nothing will get displayed it will be empty
    const titleRef = useRef();                                        //This is the way of creating Ref in functional Component -> const titleRef =  useRef('');

    useEffect(()=>{
        console.log(divRef.current)                                         //React Approach
        console.log(titleRef.current)

//        divRef.current.style.backgroundColor = "red"
        divRef.current.style.cssText = "background-color:red; padding: 10px";
        titleRef.current.style.color = '#fff'
        titleRef.current.setAttribute("class","title");

//        titleRef.current.remove();                                             //This removes the text "RefDemo" inside the red border

//        document.getElementById("")                                         //JavaScript Approach

    })

    return (
        <div ref={divRef}>
            <h1 ref={titleRef}>RefDemo</h1>
        </div>
    )
}

export default RefDemo