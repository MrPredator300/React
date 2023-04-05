import React from 'react'
import { useReducer } from 'react'

const initialState = {                      //Here initialState is an Object not a function!!!
    counter: 0,
    counterTwo: 10
}

const myreducer =(state,action)=>{
    switch(action) {
        case 'increment':
            return {
                counter: state.counter + 1
            }
        case 'decrement':
            return {
                counter: state.counter - 1
            }
        case 'reset':
            return {
                counter: 0
            }
        default:
            return state
    }
}

const ReducerHookOnepf = () => {

    const[data,dispatch] = useReducer(myreducer,initialState)

    return (
        <div>
            <h1>ReducerHookOnepf 1 - {data.counter}</h1>
            <button onClick={()=>dispatch('increment')}>Increment</button>
            <button onClick={()=>dispatch('decrement')}>Decrement</button>
            <button onClick={()=>dispatch('reset')}>Reset</button>
        </div>
    )
}

export default ReducerHookOnepf