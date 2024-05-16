import { Component } from 'react'
interface MyComponentState {
    count: number;
}
export default class Bai4 extends Component<{}, MyComponentState> {
    constructor(props: {}) {
        super(props);
        this.state = {
          count: 0
        };
    }
    
    // Hàm sự kiện để thay đổi giá trị của state
    incrementCount = () => {
        this.setState({ count: this.state.count + 1 });
    };
    
    // Hàm này được gọi trước khi render, có thể ngăn chặn việc render lại
    shouldComponentUpdate(nextProps: {}, nextState: MyComponentState): boolean {
        // Kiểm tra nếu giá trị count mới lớn hơn 5 thì không render lại
        if (nextState.count > 5) {
          return false;
        }
        return true;
    }    
  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.incrementCount}>Change State</button>
      </div>
    )
  }
}
