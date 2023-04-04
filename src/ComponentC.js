import React, { Component } from 'react'
import ComponentE from './ComponentE'

export class ComponentC extends Component {
  render() {
//    console.log(this.props.username)
    return (
      <div>
        <ComponentE username={this.props.username} />
      </div>
    )
  }
}

export default ComponentC