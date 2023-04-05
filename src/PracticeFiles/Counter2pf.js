import { Component } from "react";

class Counter2pf extends Component
{
    constructor()
    {
        super()
        this.state = {
            counter: 0,
            name: "Ram"
        }
    }



    render()
    {
        return <div>
            <h1>This is Counter22 file</h1>
            <p>Name: {this.state.name}  Counter:{this.state.counter}</p>
            <button onClick={()=> this.setState({name:"Aditya"})}>Name</button>
            <button onClick={()=> this.setState({counter: this.state.counter + 1})}>Increment Counter</button>                  {/* INLINE Function Counter */}
            <button onClick={()=> this.setState({counter: this.state.counter - 1})}>Decrement Counter</button> 
            <button onClick={()=> this.setState({counter: 0})}>Reset Counter</button>
        </div>
    }


}

export default Counter2pf