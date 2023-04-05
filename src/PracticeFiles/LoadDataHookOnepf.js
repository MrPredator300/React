import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import react1 from './react1.png'

const LoadDataHookOnepf = () => {

    const[user,setUser] = useState([]);
    const[loader,setLoader] = useState(false);              //loader is for the image
    const[message,setMessage] = useState('');

    const fetchDataFromServer =()=>{
        setLoader(true)
        axios.get("https://jsonplaceholder.typicode.com/users").then((res)=>{
            setUser(res.data)
            setLoader(false)
        }).catch((err)=>{
            setMessage(err.message);
            setLoader(false);
        })
    }

    useEffect(()=>{
        document.getElementById("btn").addEventListener("click",fetchDataFromServer);
    })


    return (
        <div>
            <h1>LoadDataHookOnepf </h1>
            <button id='btn'>Load Data</button>
            { loader ? <img src={react1} height="30" width="30" alt='react1...' /> : null }
            {message ? <p>{message}</p> : null}
            {
                user.length > 0 ? <table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>username</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            user.map((item,index)=><tr key={index}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.username}</td>
                                <td>{item.email}</td>
                            </tr>)
                        }
                    </tbody>
                </table> : <p>Sorry! no Data Found</p>
            }
        </div>
    )
}

export default LoadDataHookOnepf