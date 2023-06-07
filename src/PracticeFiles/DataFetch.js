//fetching the data from the api using fecth() method
//https://www.guvi.in/blog/how-to-fetch-data-using-api-in-react/

import React, { useEffect } from 'react'
import { useState } from 'react'

const DataFetch = () => {
    const url = "https://jsonplaceholder.typicode.com/users"
    // const url = "https://fakestoreapi.com/products?limit=5"
    // const url = "https://jsonplaceholder.typicode.com/comments"
    const [data,setData] = useState([])

    const fecthInfo =()=>{
        return fetch(url).then((res)=> res.json()).then((d) => setData(d))
    }

    useEffect(()=>{
        fecthInfo();
    },[])

    return (
        <div>
            <h1>DataFetch</h1>
            <h1 style={{ color: "green" }}>using JavaScript inbuilt FETCH API</h1>
            <center>
                {data.map((dataObj, index) => {
                return (
                    <div
                    style={{
                        width: "15em",
                        backgroundColor: "#35D841",
                        padding: 2,
                        borderRadius: 10,
                        marginBlock: 10,
                    }}
                    >
                    <p style={{ fontSize: 20, color: 'white' }}>{dataObj.name}</p>
                    </div>
                );
                })}
            </center>
        </div>
    )
}

export default DataFetch