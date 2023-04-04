import React, { Component } from 'react'
import { CityContext, StateContext } from './App'
import ComponentG from './ComponentG'

export class ComponentF extends Component {
    
    render() {
//        console.log(this.props.username)
        return (
        <div>
            <h1>ComponentF - Welcome to {this.props.username}</h1>
            {
                <CityContext.Consumer>
                    {
                        (info)=>{
//                            return <h1>Welcome to {info.firstname + " " + info.lastname} from {info.city}</h1>
                              return <StateContext.Consumer>
                                {
                                    (state)=>{
                                        return <h1>Welcome to {state.firstname + " " + state.lastname} from {state.city}</h1>
                                    }
                                }
                              </StateContext.Consumer>
                        }
                    }
                </CityContext.Consumer>
            }
{/*
            <CityContext.Consumer>
                {
                    (info)=>{
//                        return <h1>Welcome to {info.firstname + " " + info.lastname} from {info.city}</h1>
                         return <StateContext.Consumer>
                            {
                                (state)=> {
                                    return <h1>Welcome to {info.firstname + " " + info.lastname} from {info.city}</h1>
                                }
                            }
                         </StateContext.Consumer>
                    }
                }
            </CityContext.Consumer>
*/}
        <hr />
        <ComponentG />              {/* ComponentG is a Functional Component */}
        </div>
        )
    }
}

export default ComponentF