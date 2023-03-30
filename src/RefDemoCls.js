import React, { Component } from "react";

class RefDemoCls extends Component
{
    constructor()
    {
        super()
        this.state = {}

        this.titleRef = React.createRef('');                                     //This is the way of creating a Ref in a Class Component
        this.divRef = React.createRef('');
    }

    componentDidMount()
    {
        this.divRef.current.style.cssText = "background-color: green; padding: 10px";
        this.titleRef.current.style.color = "#fff"                                              //white colors
    }

    render()
    {
        return <div ref={this.divRef}>
            <h1 ref={this.titleRef}>RefDemoCls</h1>
        </div>
    }


}

export default RefDemoCls