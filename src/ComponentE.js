import React, { Component } from 'react'
import ComponentF from './ComponentF'

export class ComponentE extends Component {
  render() {
//    console.log(this.props.username)
    return (
      <div>
        <ComponentF username={this.props.username} />
      </div>
    )
  }
}

export default ComponentE