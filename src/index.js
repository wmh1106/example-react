import React from "react";
import ReactDOM from "react-dom";
/**
 * 写一个 React 函数组件，要求：
 *    接受 name 和 age 作为 props
 *    在 div 里展示 name 和 age
 */
class App extends React.Component {
  constructor() {
    super();
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
ReactDOM.render(<App name="wmh" age="18" />, rootElement);
