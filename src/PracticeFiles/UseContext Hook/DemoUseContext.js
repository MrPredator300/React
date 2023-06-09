//https://www.w3schools.com/react/react_usecontext.asp

import React from 'react'
import { createContext } from 'react'
import { useState } from 'react'

const UserContext = createContext()

function Component1 () {
    const [user,setUser] = useState("Jesse Hall")

    return (
        <UserContext.Provider>
            <h1>{`Hello ${user}!`}</h1>
            <Component2 />
        </UserContext.Provider>
    );
}

function Component2 () {
    return (
        <>
            <h1>Component 2</h1>
            <Component3 />
        </>
    )
}

function Component3 () {
    return (
        <>
            <h1>Component 3</h1>
            <Component4 />
        </>
    )
}

function Component4 () {
    return (
        <>
            <h1>Component 4</h1>
            <DemoUseContext />
        </>
    )
}


const DemoUseContext = () => {
    
    const [user,setUser] = useState(UserContext)
    
    return (
        <div>
            <h1>DemoUseContext</h1>
            <p>{`Hello ${user} again!`}</p>
        </div>
    )
}

export default DemoUseContext