import { Component } from "react";

class EventCls extends Component {

    someAction = (event) => {
        console.log(event);
        alert("Hello")
    }

    render() {
        return <div>
            <h1>Event Handling in CC</h1>
            <button onClick={this.someAction}>Click</button>
        </div>
    }

}

export default EventCls;


