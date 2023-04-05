import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';

const LoadDataHookpf = () => {

    const[user,setUser] = useState([]);             //Sending the data in the array format! so we use useState([]);
    console.log(user)

    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users").then((res)=>{
            console.log("res",res)
            setUser(res?.data)                                                      //Here i had passed res.data so it means in res it went inside data and then it took the array data
        }).catch((err)=>{
            
        })
    },[])
    console.log("res user",user)

    return (
        <div>
            <h2>LoadDataHookpf file</h2>
            {
                user?.length > 0 ? <table>
                    <thead>
                       <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Username</th>
                       </tr>
                    </thead>
                    <tbody>
                        {
                            user?.map((item,index)=><tr key={index}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.username}</td>
                            </tr>)
                        }
                    </tbody>
                </table> : <p>Sorry! No Data Found</p>

            }
        </div>
    )
}

export default LoadDataHookpf


