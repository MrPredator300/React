import { Component } from "react";

class Counterpf extends Component
{
    constructor(props)
    {
        super(props)
        this.state = {
            counter: 0,
            name: "Ram"
        }
    }

    incrementCounter =()=>{
        this.setState({
            counter: this.state.counter + 1
        })

        console.log(this.state.counter)
    }

    decrementCounter =()=>{
        this.setState({
            counter: this.state.counter - 1
        })

        console.log(this.state.counter)
    }

    resetCounter = () =>{
        this.setState({
            counter: 0
        })
        console.log(this.state.counter)
    }



    changename =()=>{
        this.setState({
            name: "Shayam"
        })

        console.log(this.state.name)
    }


    render()
    {
        return <div>
            <h1>This is a Counter2 file</h1>
            <p>Counter: {this.state.counter}  Name: {this.state.name} </p>

{/* 
            <p>Counter: {this.state.counter}</p>
            <p>Name: {this.state.name}</p> */}
            <button onClick={this.incrementCounter}>Increment Counter</button>
            <button onClick={this.decrementCounter}>Decrement Counter</button>
            <button onClick={this.resetCounter}>Reset Counter</button>
            <button onClick={this.changename}>Name</button>

        </div>
    }


}

export default Counterpf