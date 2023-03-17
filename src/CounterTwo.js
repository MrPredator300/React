import { Component } from "react";

class CounterTwo extends Component
{
    constructor()
    {
        super();
        this.state = {
            counter: 0
        }

    }

    /*

    incrementCounter = () =>
    {
        this.setState({
            counter: this.state.counter + 1
        })

    }

    decrementCounter = () =>
    {
        this.setState ({
            counter: this.state.counter - 1 
        })

    }

    resetCounter = () =>
    {
        this.setState ({
            counter: 0
        })

    }
    */

    render()
    {
        return <section>
            <h1>Counter Two - {this.state.counter}</h1>
            {/* This Also Works just create the function above 
                the this.incrementCounter is calling the incrementCounter() function similary the rest


            <button onClick={this.incrementCounter}>Increment</button>
            <button onClick={this.decrementCounter}>Decrement</button>
            <button onClick={this.resetCounter}>Reset</button>
            */}
            <button onClick={() => this.setState({counter: this.state.counter + 1})}>Increment</button>
            <button onClick={() => this.setState({counter: this.state.counter - 1})}>Decrement</button>
            <button onClick={() => this.setState({counter: 0})}>Reset</button>
            {/*
            No Need to write the entire function again and again just call the function
            */}
        </section>
    }
   


}

export default CounterTwo;