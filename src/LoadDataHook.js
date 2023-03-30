import React, { useEffect,useState } from 'react'
import axios from 'axios';

const LoadDataHook = () => {

    const[users,setUsers] = useState([]);
    console.log(users)

    useEffect(()=>{
      axios.get("https://jsonplaceholder.typicode.com/users").then((res)=>{
        setUsers(res.data)
        console.log(res)
      }).catch((err)=>{

      })

    },[])                 //You have to add an empty dependency if you want to run the code only one time if not it will be running continously and the server people may block you (the output will be still shown) 
    
    return (
      <div>
          <h1>Loding Data on Load the page</h1>
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

export default LoadDataHook