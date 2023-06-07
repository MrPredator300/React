//The Net Ninja (YT) useEffect Hook with Dependencies #15 tutorial


import React from 'react'
import { useState,useEffect } from 'react';

const DemoUseEffect6 = () => {
    const [data,setData] = useState([
        {title: "website",body:"lorem",author:"mario",id:1},
        {title: "welcome",body:"lorem",author:"yoshi",id:2},
        {title: "web dev",body:"lorem",author:"maki",id:3}
    ]);

    const [name,setName] = useState('mario');

    const handelInputs =(id)=>{
        const newData = data.filter(data => data.id !== id);
        setData(newData);
    }

    useEffect(()=>{
        console.log("useEffect() ran")
        console.log(data)
    },[name])

    return (
        <div>
            <h1>DemoUseEffect6 Test</h1>
            <button onClick={()=> setName("Jane")}>Change Name</button>
            <p>{name}</p>
        </div>
    )
}

export default DemoUseEffect6