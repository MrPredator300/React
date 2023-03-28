import React from 'react'
import { useReducer } from 'react'

const initialState = {                  //Here the initialState is been taken as an Object whereas in ReducerHook.js the initialState is been taken as a Number
    counter: 0,
    counterTwo: 10
}

const myReducer =(state,action)=>
{
    switch(action.type){
        case 'increment':                       //Here we didn't write "return state + 1" because here 'state' is an object if 'state' is a number we can write "return state + 1" cuz it will become number + number
            return {
                ...state,                       //here the (3 dot's) helps us to keep the previous value in the variable
                counter: state.counter + 1      //Here it is an object so it won't have a semi-colan in the end "counter: state.counter + 1;" (this is wrong it will give error)
            }
        case 'decrement':
            return {
                ...state,
                counter: state.counter - 1
            }
        case 'reset':
            return initialState                 /*we can also write like this:-    
                                                    return {
                                                    counter: 0}
                                                */
        case 'incrementTwo':
            return {
                ...state,
                counterTwo: state.counterTwo + 1
            }
        case 'decrementTwo':
            return {
                ...state,
                counterTwo: state.counterTwo - 1
            }
        case 'resetTwo':
            return {
                ...state,
                counterTwo: 0
            }
        default:
            return state
    }

}

const ReducerHookOne = () => {

  const[data,dispatch] = useReducer(myReducer,initialState)

  console.log(data)

  return (
    <div>
        <h1>Counter One - {data.counter}</h1>                                       {/* Here we have to write '{data.counter}' for it to work*/}
        <button onClick={()=> dispatch({type: 'increment'})}>Increment</button>
        <button onClick={()=> dispatch({type:'decrement'})}>Decrement</button>
        <button onClick={()=> dispatch({type:'reset'})}>Reset</button>
        <hr />
        <h1>Counter Two - {data.counterTwo}</h1>                                       {/*This will let us to print the second value of initialState the variable counterTwo */}
        <button onClick={()=> dispatch({type: 'incrementTwo'})}>IncrementTwo</button>
        <button onClick={()=> dispatch({type:'decrementTwo'})}>DecrementTwo</button>
        <button onClick={()=> dispatch({type:'resetTwo'})}>ResetTwo</button>
    </div>
  )
}

export default ReducerHookOne