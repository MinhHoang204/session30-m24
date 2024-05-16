import { Component } from 'react'
import Bai6_MyComponent from './Bai6_MyComponent';
interface AppState {
    value: string;
}
export default class Bai6 extends Component<{}, AppState> {
    constructor(props: {}) {
        super(props);
        this.state = {
          value: 'Interface rendering',
        };
    }
    
    updateValue = () => {
        this.setState({ value: 'Interface rendering' });
    };
    
  render() {
    return (
      <div>
        <button onClick={this.updateValue}>Change props</button>
        <Bai6_MyComponent value={this.state.value} />
      </div>
    )
  }
}
