import { Component } from 'react'
interface MyComponentProps {
    message: string;
}
export default class Bai5_MyComponent extends Component<{}, MyComponentProps> {
  render() {
    return (
      <div>
        <h1>{this.props.message}</h1>
      </div>
    )
  }
}
