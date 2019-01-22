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
  // 初始化数据
  constructor(props) {
    super(props);
    // 自己的数据
    this.state = {
      work: "front end",
      workNumber: 1
    };
  }

  add() {
    // 改变数据，只能用setState，并且注意它是异步的。
    this.setState({
      workNumber: this.state.workNumber + 1
    });

    /*
    想连续操作workNumber，用下面的写法
    this.setState(state => {
      console.log(state);
      return {
        workNumber: state.workNumber + 1
      };
    });
    this.setState(state => {
      console.log(state);
      return {
        workNumber: state.workNumber + 1
      };
    });
    */
  }

  render() {
    // 这里事件要绑定 this， 不绑定就是 undefined，react 强制设置的
    return (
      <div className="App">
        <h1>Hello {this.props.name}</h1>
        <p>年龄：{this.props.age}</p>
        <p>工作：{this.state.work}</p>
        <p>工龄：{this.state.workNumber}</p>
        <button onClick={this.add.bind(this)}>工龄加1</button>
      </div>
    );
  }
}

class ss {}

const rootElement = document.getElementById("root");
// 标签App就是函数，函数就是对象，标签的属性就是函数的参数（传入的数据）
ReactDOM.render(<App name="wmh" age="18" />, rootElement);
