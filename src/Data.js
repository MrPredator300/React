import React from 'react'
import useCounter from './Hooks/useCounter'
import useDocTitle from './Hooks/useDocTitle'
import useFetch from './Hooks/useFetch'

const Data = () => {

    const msg = useCounter("Ram","Mumbai")            //useCounter is a custom hook which is defined in useCounter.js  we are calling it here
    console.log(msg)

    const users = useFetch('https://jsonplaceholder.typicode.com/users')
    
    const[counter,incrementCounter,decrementCounter] =  useDocTitle();



    console.log(users)

    return (
        <div>
            <h1>Counter - {counter}</h1>
            <button onClick={incrementCounter}>Increment</button>               {/* It is calling from the const[counter,incrementCounter,decrementCounter] = useDocTitle() */}
            <button onClick={decrementCounter}>Decrement</button>       
            <hr></hr>
            <h1>Data {msg}</h1>
            {
                users.length > 0 ? <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Username</th>
                            <th>Email</th>
                            <th>Phone</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((item,index)=><tr key={index}>
                                <td>{item.id}</td>
                                <td>{item.username}</td>
                                <td>{item.email}</td>
                                <td>{item.phone}</td>
                            </tr>)
                        }
                    </tbody>
                </table> : null
            }
        </div>
    )
}

export default Data