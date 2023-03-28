import React from 'react'
import { useState,useEffect } from 'react'


const ClockHook = () => {

    const[timer,setTimer] =useState(new Date().toLocaleTimeString());

    let clockRef = useRef();

/*
    useEffect(()=>{
        setInterval(()=>{
         setTimer(new Date().toLocaleTimeString())
        },1000)
*/
    useEffect(()=>{
        clockRef = setInterval(()=>{
            setTimer(new Date().toLocaleTimeString())
        },1000);

        return ()=>{
            console.log(2)
            clearInterval(clockRef);
        }

//        console.log("1")
     },[])

    return (
        <div>
            <h1>Time: {timer}</h1>
        </div>
    )
}

export default ClockHook