import { Component } from "react";

class Increment extends Component
{
    counter = 100;

    IncrementCounter = () =>{
        this.counter = this.counter + 1;

        console.log(this.counter);
    }

    render()
    {
        return <section>
            <h1>Counter - {this.counter}</h1>
            <button onClick={this.IncrementCounter}>Increment</button>
        </section>
    }


}

export default Increment;