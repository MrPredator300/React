import PropTypes from 'prop-types'
import React, { Component } from 'react'

export class PureComp extends Component {

    constructor()
    {
        super()
        this.state = {
            username: "Ram"
        };
    }

    UpdateName =()=>{
        this.setState({
            username: "Rakesh"
        })
    }

    render() {
        console.log("Render is calling...")
        return (
        <div>
            <h1>Pure - Welcome to {this.state.username}</h1>
            <button onClick={this.UpdateName}>Update Name</button>
        </div>
        )
    }
}

export default PureComp