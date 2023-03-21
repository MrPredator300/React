import { Component } from "react";

class CounterTwo extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            counter: 0,
            username : props.myname                 //Here the props.myname is saving the value into their own state
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
        if(this.state.counter >=1)
        {
            this.setState ({
                counter: this.state.counter - 1 
            })
        }
/*
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
            <h1>Counter Two - {this.state.counter} - {this.state.username}</h1>
            {/* This Also Works just create the function above 
                the this.incrementCounter is calling the incrementCounter() function similary the rest

            */}
            {/* 
            <button onClick={this.incrementCounter}>Increment</button>
            <button onClick={this.decrementCounter}>Decrement</button>
            <button onClick={this.resetCounter}>Reset</button>
            */}
           
            <button onClick={() => this.setState({counter: this.state.counter + 1})}>Increment</button>     {/*Inline Function Counter function  */}      
            <button onClick={() => this.setState({counter: this.state.counter - 1})}>Decrement</button>
            <button onClick={() => this.setState({counter: 0})}>Reset</button>
            
            
            {/*
            No Need to write the entire function again and again just call the function
            */}
        </section>
    }
   


}

export default CounterTwo;