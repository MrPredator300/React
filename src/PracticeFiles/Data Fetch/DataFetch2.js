//fetching the data from the api by using axios
//https://www.guvi.in/blog/how-to-fetch-data-using-api-in-react/

import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from "axios"                       //use import axios from "axios" (not "react-axios") 


const DataFetch2 = () => {
    const url = "https://jsonplaceholder.typicode.com/users"
    const [data,setData] = useState([])

    const fecthInfo =()=>{
        return axios.get(url).then((res)=> setData(res.data))
    }

    useEffect(()=>{
        fecthInfo();
    }, [])


    return (
        <div>
            <h1>DataFetch2</h1>
            <h1 style={{ color: "green" }}>using Axios Library to Fetch Data</h1>
            <center>
                {data.map((dataObj, index) => {
                return (
                    <div
                    style={{
                        width: "15em",
                        backgroundColor: "#CD8FFD",
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

export default DataFetch2