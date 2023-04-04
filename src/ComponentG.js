import React from 'react'
import { useContext } from 'react'
import { CityContext, StateContext } from './App'

const ComponentG = () => {

    const info = useContext(CityContext);
    const state = useContext(StateContext)

    return (
        <div>
            <h4>Welcome to {info.firstname + " " + info.lastname} from {info.city}, {state}</h4>
        </div>
    )
}

export default ComponentG