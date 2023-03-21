import { Component } from "react";

class LifeCycleOne extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            counter: 0,
            myname: props.username
        }
        //console.log(this.props.username);
    }

    incrementCounter = () => {
        this.setState({
            counter: this.state.counter + 1
        })
    }

    componentDidMount()
    {
        document.getElementById("btn").addEventListener("click",this.incrementCounter);         //ComponentDidMount() is the best because it will be called only once throughout the LifeCycle it wont be called multiple times
        document.title = "Welcome to React JS";         //this changes the title in the tab and it is calling when DOM has been completely Loaded
    }

    static getDerivedStateFromProps(nextProps,prevState) {
       /*
        console.log("Props",nextProps);
        console.log("State",prevState);
        */

        return {myname: nextProps.username}
 //       return null;
    }

    render()
    {
    {/*  console.log(this.props.username);              */}
        return <section>
            <h1>Life Cycle One method demo - {this.state.myname}</h1>
            <h2>Counter - {this.state.counter}</h2>
    {/*        <button onClick={this.incrementCounter}>Click Here</button>      */}
            <button id="btn">Click Here</button>
        </section>
    }


}

export default LifeCycleOne;