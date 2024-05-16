import { Component } from 'react'
interface State{
    userName:string,
}
export default class Bai1 extends Component<{}, State> {
    constructor(props: {}) {
        super(props);
        this.state = {
          userName: 'Nguyễn Minh Hoàng' 
      }
    }  
  render() {
    return (
      <div>
        <h1>{this.state.userName}</h1>
      </div>
    )
  }
}
