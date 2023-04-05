import { Component } from "react";

class RegComponent extends Component
{
    constructor(props)
    {
        super(props)

        this.state ={
            username : "Ram"
        }
    }

    UpdateName =()=>{
        this.setState({
            username: "Sunny"
        })
    }

    render()
    {
        console.log("render calling...")

        return <div>
            <h1>Welcome to {this.state.username}</h1>
            <button onClick={this.UpdateName}>Update Name</button>
        </div>
    }


}

export default RegComponent