import { Component } from 'react'
interface MyComponentProps {
    value: string;
}
  
interface MyComponentState {

}
export default class Bai6_MyComponent extends Component<{}, MyComponentProps, MyComponentState> {
    constructor(props: MyComponentProps) {
        super(props);
    }
    
    shouldComponentUpdate(nextProps: MyComponentProps) {
        // Kiểm tra nếu prop value thay đổi, component sẽ không render lại
        return this.props.value !== nextProps.value;
    }
  render() {
    return (
      <div>
        <h1>{this.props.value}</h1>
      </div>
    )
  }
}
