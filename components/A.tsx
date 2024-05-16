import React, { Component } from 'react'

export default class A extends Component {
    componentWillUnmount(): void {
        console.log("component");
        
    }
  render() {
    return (
      <div>A</div>
    )
  }
}
