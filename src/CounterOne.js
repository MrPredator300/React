import { Component } from "react";

class CounterOne extends Component
{
    constructor()
    {
        super();
        this.state = {
            counter: 10
        }

    }

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
            counter: 10
        })

    }

    render()
    {
        return <section>
            <h1>Counter One - {this.state.counter}</h1>
            <button onClick={this.incrementCounter}>Increment</button>
            <button onClick={this.decrementCounter}>Decrement</button>
            <button onClick={this.resetCounter}>Reset</button>
        </section>
    }


}

export default CounterOne;