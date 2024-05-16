import { Component } from 'react'
import Bai5_MyComponent from './Bai5_MyComponent'
interface AppState {
    message: string;
}
  
export default class Bai5 extends Component<{}, AppState> {
    constructor(props: {}) {
        super(props);
        this.state = {
          message: 'Status:"Open the form"'
        };
    }
    
    updateMessage = () => {
        this.setState({ message: 'Status:"Close the form"' });
    };
    
  render() {
    return (
      <div>
        <Bai5_MyComponent message={this.state.message} />
        <button onClick={this.updateMessage}>Change props</button>
      </div>
    )
  }
}
