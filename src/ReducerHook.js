import React, { useReducer } from 'react'

const initialState = 0;                                              //Here the initialState is been taken as a number is a variable
const myReducer = (state,action) =>{                                //this is a one time initialisation so we will always keep this outside
    switch(action){
        case 'increment':
            return state + 1;                                       //here state is a number so it's number + number 
        case 'decrement':
            return state - 1;
        case 'reset':
            return initialState;
        default:
            return state;
    }
   
}

const ReducerHook = () => {

 const[counter,dispatch] = useReducer(myReducer,initialState)           //useReducer() will always accepts 2 parameters one is reducer() and another is initial state and it will return 2 values!!!
                                                                    

  return (                                                                          //here this component will re-render
    <div>
        <h1>Counter - {counter}</h1>                                                {/*Here we took {counter} like this because counter is a number if it was an object we can't take it like this it will generate an error */}
        <button onClick={()=> dispatch('increment')}>Increment</button>             {/*we have to call the dispatch like this onClick={()=> dispatch('increment)} */}
        <button onClick={()=> dispatch('decrement')}>Decrement</button>             {/*when we use dispatch then the function 'myReducer=()=>{}' will be called without using dispatch it won't */}
        <button onClick={()=> dispatch('reset')}>Reset</button> 
    </div>
  )
}

export default ReducerHook