import { Component } from "react";

class LifeCyclepf extends Component
{
    constructor()
    {
        super()
        this.state={}
        console.log("Constructor() is Calling....")

    }

    static getDerivedStateFromProps(state,props)
    {
        console.log("static getDerivedStateFromProps() is Calling....")
        return null;
    }

    welcome =()=>{
        console.log("Welcome() is Calling....")
    }

    componentDidMount()
    {
        console.log("ComponentDidMount() is Calling....")
    }

    render()
    {
        console.log("render() is Calling....")

        return <div>
            <h1>LifeCyclepf</h1>
        </div>
    }

}

export default LifeCyclepf