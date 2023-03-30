import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
import react1 from './Images/react1.png'                                    //to import the image you give the image name and then the image's path

const LoadDataHookOne = () => {

    const[users,setUsers] = useState([]);
    const[loader,setLoader] = useState(false);
    const[message,setMessage] = useState('');

    const fetchDataFromServer =() =>{
        setLoader(true)                                                             //Once the user clicks on the button the image will get loaded on the webpage
        axios.get("https://jsonplaceholder.typicode.com/users").then((res)=>{           
            setUsers(res.data);
            setLoader(false);                                                      //Once the tabel is generated and posted on web page the image will be removed
        }).catch((err)=>{
            setMessage(err.message);                                                 //If inside the axios.get("") and if the url is wrong then this line will get executed setMessage() it will catch the error message and give the output
            setLoader(false);
        });
    }

    useEffect(()=>{
        document.getElementById("btn").addEventListener("click",fetchDataFromServer);
    },[])


    return (
        <div>
            <h1>Loading data from Server</h1>
            <button id='btn'>Load data</button>
            { loader ? <img src={react1} height="30" width="30" alt='react1...' /> : null }
            { message ? <p>{message}</p> : null }
            {
            users.length > 0 ? <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Username</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>City</th>
                  <th>Website</th>
                </tr>
              </thead>
              <tbody>
                {
                  users.map((item,index)=><tr key={index}>
                    <td>{item.id}</td>
                    <th>{item.username}</th>
                    <th>{item.email}</th>
                    <th>{item.phone}</th>
                    <th>{item.address.city}</th>
                    <th>{item.website}</th>
                  </tr>)
                }
              </tbody>
            </table> : null
          }
        </div>
    )
}

export default LoadDataHookOne