//The Net Ninja (YT) useEffect Hook #14 tutorial

import React, { useEffect } from 'react'
import { useState } from 'react'

const DemoUseEffect5 = () => {
    const [data,setData] = useState([
        {title: "website",body:"lorem",author:"mario",id:1},
        {title: "welcome",body:"lorem",author:"yoshi",id:2},
        {title: "web dev",body:"lorem",author:"maki",id:3}
    ]);

    const handelInputs =(id)=>{
        const newData = data.filter(data => data.id !== id);
        setData(newData);
    }

    useEffect(()=>{
        console.log("useEffect() ran")
        console.log(data)
    })

    return (
        <div>
            <h1>DemoUseEffect5 Test</h1>
        </div>
    )
}

export default DemoUseEffect5