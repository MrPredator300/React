import { Component } from "react";

class Clockpf extends Component
{
    constructor()
    {
        super()
        this.state = {
            timer: new Date().toLocaleTimeString()
        }
    }
    
    componentDidMount()
    {
        setInterval(() =>{
            this.setState({
                timer: new Date().toLocaleTimeString()                      //SetInterval() is a pre-defined function SetInterval( () => {this.setState( {timer: new Date})})  , here the this.setState() is a pre-defined function
            })
        })
    }

   

    render()
    {
        return <div>
            <h1>Clock2 file</h1>
            <h4>Timer: {this.state.timer}</h4>
        </div>
    }

}

export default Clockpf