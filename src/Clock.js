import { Component } from "react";

class Clock extends Component
{

    constructor(props)
    {
        super(props)
        this.state = {
            timer: new Date().toLocaleTimeString()              //this just shows the current timer but does not run at the moment 
        }
    
    }

    componentDidMount()                                         //componentDidMount() is only used componentDidUpdate() is not required cuz we are not updating anything only the setInterval() is calling
    {
        setInterval(() => {
            this.setState({
                timer: new Date().toLocaleTimeString()          //this shows the timer running at the moment
            })
        })
    }

    render()
    {
        return <div>
            <h1>Time: {this.state.timer}</h1>
        </div>
    }

}

export default Clock;