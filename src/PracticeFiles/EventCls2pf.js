import { Component } from "react";

class EventCls2pf extends Component
{

    someAction =(event)=>{
        console.log(event);
        alert("Hello")
    }

   
    render()
    {
        return <div>
            <h1>Event Handling</h1>
            <button onClick={this.someAction}>Click me</button>
        </div>
    }

}

export default EventCls2pf