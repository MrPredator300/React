import { Component } from "react";

class LifeCycleTwopf extends Component
{
    constructor(props)
    {
        super(props)
        this.state = {
            username: "ram"
        }
        console.log("Constructor Calling....")

    }

    updateName =()=>{
        this.setState({
            username: "Ramesh Kumar"
        })
    }

    static getDerivedStateFromProps()
    {
        console.log("static getDerivedStateFromProps Calling....")
        return null;
    }


    componentDidMount()
    {
        console.log("componentDidMount Calling....")
    }

    componentDidUpdate()
    {
        console.log("componentDidUpdate Calling...")
    }

    shouldComponentUpdate(prevProps,prevState)
    {

        if(console.log(prevState == this.state.username))
        {
            return false;
        }
        console.log("shouldComponentUpdate Calling...")
        return true;
    }

    getSnapshotBeforeUpdate()
    {
        console.log("getSnapshotBeforeUpdate Calling....")
        return null;
    }


    render()
    {
        console.log("render Calling...")
        return <div>
            <h1>LifeCycleTwopf - {this.state.username}</h1>
            <button onClick={this.updateName}>Update Name</button>
        </div>
    }

}

export default LifeCycleTwopf