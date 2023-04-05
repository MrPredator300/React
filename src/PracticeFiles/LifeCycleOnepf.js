import { Component } from "react";

class LifeCycleOnepf extends Component
{
    constructor(props)
    {
        super(props)
        this.state = {
            counter: 0,
            myname: "Ram"                       //specify a name here if u want it to be displayed in the webpage 
        }

        console.log("Constructor Calling....")
    }

    incrementCounter=()=>{
        this.setState({
            counter: this.state.counter + 1
        })
        console.log("increment Calling...")
    }

    componentDidMount()
    {
        document.getElementById("btn").addEventListener("click",this.incrementCounter);
        document.title = "LifeCYCleOne Practice"
       
    }

    static getDerviedStateFromProps(nextProps,prevProps)
    {
        return {myname:nextProps.username}

    }

    render()
    {
        console.log("Render Calling...")

        return <div>
            <h1>LifeCycleOnepf - {this.state.myname} </h1>
            <h3>Counter - {this.state.counter}</h3>
            <button id="btn">Click Here</button>
        </div>
    }

}

export default LifeCycleOnepf