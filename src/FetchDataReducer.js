import React, { useEffect } from 'react'
import { useReducer } from 'react'
import axios from 'axios';


const initalState = {
    usersList: [],
    loader: true,
    errorMsg: ''
}



const dataReducer = (state,action) =>{
    switch(action.type){
        case 'FETCH_REQUEST':
            return {
                loader: true,
                errorMsg: '',
                usersList: []
            }            
        case 'FETCH_SUCCESS':
            return {
                loader: false,
                errorMsg: '',
                usersList: action.payload
            }
        case 'FETCH_FAIL':
            return {
                loader: false,
                errorMsg: action.payload,                                  /*'Sorry! something went wrong',  we can also write like this   */
                usersList: []
            }
        default:
            return state;
    }
}


const FetchDataReducer = () => {

    const[data,dispatch] = useReducer(dataReducer,initalState)
    console.log(data.usersList)

    useEffect(()=>{
        dispatch({type:"FETCH_REQUEST"});

        axios.get("https://jsonplaceholder.typicode.com/users").then((res)=>{                                                   //'then((res)=>{})' this is a callback function with a response parameter
            dispatch({type:"FETCH_SUCCESS",payload: res.data})
        }).catch((err)=>{
            dispatch({type:"FETCH_FAIL",payload: err.message})
        })

    },[])


    return (
        <div>
            <h1>FetchDataReducer</h1>

            {data.loader ? <p>Loading...</p> : null }
            {data.errorMsg ? <p>{data.errorMsg}</p> : null }                                        {/* {object.errorMsg} */}
           {
                data.usersList.length > 0 ? <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Username</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>City</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.usersList.map((item,index)=><tr key={index}>
                                <td>{item.id}</td>
                                <td>{item.username}</td>
                                <td>{item.email}</td>
                                <td>{item.phone}</td>
                                <td>{item.address.city}</td>
                            </tr>)                                                           
                        }
                    </tbody>
                </table> : null
            }

        </div>
    )
}

export default FetchDataReducer