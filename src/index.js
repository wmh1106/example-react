// 必须引入2个 js 文件
import React from "react";
import ReactDOM from "react-dom";
/**
 * 题目：写一个 React 函数组件，要求：
 *    接受 name 和 age 作为 props
 *    在 div 里展示 name 和 age
 */

// 继承 React.Component
class App extends React.Component {
  constructor() {
    super();
    // 自己的数据
    this.state = {
      work: "front end"
    };
  }
  render() {
    return (
      <div className="App">
        <h1>Hello {this.props.name}</h1>
        <p>年龄：{this.props.age}</p>
        <p>工作：{this.state.work}</p>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
// 标签App就是函数，函数就是对象，标签的属性就是函数的参数（传入的数据）
ReactDOM.render(<App name="wmh" age="18" />, rootElement);
