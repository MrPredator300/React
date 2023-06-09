import React, { useEffect, useState } from 'react'
import "./DarkMode.css"

const DarkMode = () => {

    const [theme,setTheme] = useState('light')
    
    const toggleTheme =()=>{
        if(theme === 'light') {
            setTheme('dark');
        }
        else {
            setTheme('light');
        }
    }

    useEffect(()=>{
        document.body.className = theme;
    },[theme])
    
    return (
        <div className='main-div'>
            <h1>Dark Mode Functionality</h1>
            <button onClick={toggleTheme}>Toggle Button</button>
        </div>
    )
}

export default DarkMode