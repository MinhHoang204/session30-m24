import { Component } from 'react'

export default class Bai7 extends Component {
    componentDidMount() {
        document.title = 'New Page Title';
    }
  render() {
    return (
        <div>Page Content
            {/*
            Để thay đổi tiêu đề của tab trình duyệt mỗi khi một class component được mount vào trong DOM, 
            bạn có thể sử dụng phương thức componentDidMount của class component. 
            Phương thức này được gọi sau khi component được mount vào DOM, 
            cho phép bạn thực hiện các tác vụ khởi tạo sau khi component đã sẵn sàng. 
             */}
        </div>
    )
  }
}
