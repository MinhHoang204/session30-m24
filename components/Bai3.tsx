import { Component } from 'react'
interface MyComponentState {
    message: string;
}
export default class Bai3 extends Component<{}, MyComponentState> {
    constructor(props: {}) {
        super(props);
        this.state = {
          message: 'Company: Rikkei Academy'
        };
    }

    handleChangeMessage = () => {
        this.setState({ message: 'Company: RikkeiSoft' });
    }
    
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={this.handleChangeMessage}>Change State</button>
      </div>
    )
  }
}
