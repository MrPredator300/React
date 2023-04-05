import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'

const LoadDataHook2pf = () => {

    const[user,setUser] = useState([])

    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts").then((res)=>{
            setUser(res.data)
        }).catch((err)=>{

        })
    })


    return (
        <div>
            <h1>LoadDataHook2pf with different data Set 2</h1>
                {
                    user.length > 0 ? <table>
                        <thead>
                            <tr>
                                <th>UserId</th>
                                <th>Id</th>
                                <th>Title</th>
                                <th>Body</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                user.map((item,index)=><tr key={index}>
                                    <td>{item.userId}</td>
                                    <td>{item.id}</td>
                                    <td>{item.title}</td>
                                    <td>{item.body}</td>
                                </tr>)
                            }
                        </tbody>
                    </table> : <p>Sorry! No data Found</p>
                }
        </div>
    )
}

export default LoadDataHook2pf