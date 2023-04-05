import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import react1 from './react1.png'

const LoadDataHook3pf = () => {

    const[user,setUser] = useState([])
    const[loader,setLoader] = useState(false)
    const[message,setMessage] = useState('')


    const fetchDataFromServer=()=>{
        setLoader(true)
        axios.get("https://api.covid19api.com/summary").then((res)=>{
            setUser(res.data);
            console.log("res:",res.data)
            setLoader(false);
        }).catch((err)=>{
            setMessage(err.message);
            setLoader(false);
        });
    }

    useEffect(()=>{
        document.getElementById("btn").addEventListener("click",fetchDataFromServer)
    })

    return (
        <div>
            <h1>LoadDataHook3pf with data set 3</h1>
            <button id='btn'>Click Here</button>
            {loader ? <img src={react1} height="60" length="60" alt='react1' /> : null} 
            {message ? <p>{message}</p> : null}
            {
                user.length > 0 ? <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Country</th>
                            <th>Global</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            user.map((item,index)=><tr key={index}>
                                <td>{item.id}</td>
                                <td>{item.country}</td>
                                <td>{item.global.TotalConfirmed}</td>
                            </tr>)
                        }
                    </tbody>
                </table> : <p>Sorry! no Data Found here :/</p>
            }
        </div>
    )
}

export default LoadDataHook3pf