import { Component } from 'react'

export default class Bai2 extends Component {
    componentDidMount() {
        console.log("Component đã được mount!");
    }
  render() {
    return (
      <div>
        <p>Notification Component</p>
      </div>
    )
  }
}
