import { Component } from 'react'

export default class Bai8 extends Component{
    state = {
        inputValue: '',
    };
    
    componentDidUpdate(prevProps, prevState) {
        // Kiểm tra nếu giá trị của ô input đã thay đổi
        if (prevState.inputValue !== this.state.inputValue) {
          document.title = this.state.inputValue || 'Page Title';
        }
    }
    
    handleInputChange = (event) => {
        this.setState({ inputValue: event.target.value });
    };
  render() {
    return (
      <div>
        {/*
          Để thay đổi tiêu đề của tab trình duyệt khi nhập dữ liệu vào ô input trong một class component, 
          bạn có thể sử dụng phương thức componentDidUpdate. Phương thức này 
          được gọi mỗi khi props hoặc state của component thay đổi,
          cho phép bạn thực hiện các tác vụ sau khi component đã được cập nhật. 
         */}
        <input
          type="text"
          value={this.state.inputValue}
          onChange={this.handleInputChange}
          placeholder="Thay đổi tiêu đề"
        />
      </div>
    )
  }
}
