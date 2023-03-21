import { Component } from "react";

class LifeCycle extends Component
{

    constructor()
    {
        super();
        this.state = {}

        console.log("Constructor Calling....")
    }

    
    static getDerivedStateFromProps(state,props)
    {
        console.log("getDerivedStateFromProps Calling...")
        return null;                    //atleast we have to return the state atleast null or else it gives an error:- "you have returned undefined"
    }

    Welcome =() =>{
        console.log("Welcome Calling....")          //this you have to call it wont call itself automatically
    }
    
    componentDidMount()
    {
        console.log("ComponentDidMount Calling...")
    }

    render()
    {
        console.log("render Calling...")

        return <section>
            <h1>LifeCycle Methods Demo</h1>
        </section>
    }


}

export default LifeCycle