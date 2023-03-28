import { Component } from "react";

class UpdateTitle extends Component
{
    constructor()
    {
        super()
        this.state = {
            counter: 0
        }
    }

    updateCounter = () =>
    {
        this.setState({
            counter: this.state.counter + 1
        })
        //console.log(this.state.counter)
    }

    componentDidMount()                                                             //By only using componentDidMount() the counter inside button only will get updated not the title
    {
        document.title = "You Clicked " + this.state.counter + " times";
       // document.title = `You clicked $(this.state.counter) times`;           This is not WORKING !!!
    }

    componentDidUpdate()                                                            //By using componentDidUpdate() the counter on the tab of browser will also get updated
    {
        document.title = "You Clicked " + this.state.counter + " times";
    }

    render()
    {
        return <section>
            <h1>Page Title Update</h1>
            <button onClick={this.updateCounter}>You Clicked {this.state.counter} times</button>
        </section>
    }


}

export default UpdateTitle;