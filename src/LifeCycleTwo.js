import { Component } from "react";

class LifeCycleTwo extends Component
{
  
    constructor()
    {
        super()
        this.state = {
            username: "Ram"
        };
        console.log("Constructor Calling....")
    }
   

    static getDerivedStateFromProps()
    {
        console.log("getDerivedStateFromProps Calling....")
        return null;
    }

    componentDidMount()
    {
        console.log("ComponentDidMount Calling...")
    }

    componentDidUpdate()
    {
        console.log("ComponentDidUpdate Calling....")           //the output is not being displayed in the console because nothing is being updated
    }

    shouldComponentUpdate(prevProps,prevState)
    {
        //console.log(prevProps);
        //console.log(prevState);
        
        if(console.log(prevState.username == this.state.username))
        {
            return false;
        }
        console.log("shouldComponentUpdate Calling...")         //the output is not being displayed in the console because nothing is being updated
        return true;                                            //if we return true the component will re-renders and must return some value!!
    }
    
    getSnapshotBeforeUpdate()
    {
        console.log("getSnapshotBeforeUpdate Calling...")
        return null;                                        //here also it should return someting null or object
    }

    render()
    {
        console.log("render Calling...")
        return <section>
            <h1>Life Cycle two Methods - {this.state.username}</h1>
            <button onClick={this.updateName}>Update Name</button>
        </section>
    }

    updateName = () => 
    {
        this.setState({
            username: "Sudha Tech"
        })
    }
    
//You can write constructor() at the bottom and render() at the top no error will be genereated but when while calling constructor will get executed first and then render().

}

export default LifeCycleTwo