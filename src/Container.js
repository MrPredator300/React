import { Component } from "react";
import ClockHook from "./ClockHook";

class Container extends Component
{
    constructor()
    {
        super()
        this.state = {
            visible: true
        }
    }

    render()
    {
        return <section>
            {
                this.state.visible ? <ClockHook /> : null
            }
            <button onClick={()=>this.setState({visible: !this.state.visible})}>Toggle</button>                     {/* always use this.setState() not this.state() */}
        </section>
    }

}

export default Container;