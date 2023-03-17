import { Component } from "react";

class Counter extends Component
{
   constructor()
   {
        super();
        this.state = {
            counter: 0,
            name : "Ram"
        }

   }

   IncrementCounter =() => {
//    this.state.counter = this.state.counter + 1;              this line only updates the value in the console log not in the web page 

    this.setState({
        counter: this.state.counter + 1
    })

    console.log(this.state.counter);
   }

    render()
    {
        return <section>
            <h1>Counter - {this.state.counter}</h1>
            <button onClick={this.IncrementCounter}>Increment</button>
            <hr />
            <h1>Welcome to {this.state.name}</h1>
            <button onClick={this.updateName}>Update Name</button>
        </section>
    }

    updateName = () => {
        this.setState({
            name: "Sudha"
        })

    }

}

export default Counter;