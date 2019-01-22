//  先引入2个react js相关文件
import React from "react";
import ReactDOM from "react-dom";

import "./style.scss";

// 数据
var money = {
  amount: 100000
};
var user = {
  id: 123123,
  nickname: "土豪"
};
var store = {
  money: money,
  user: user
};

// eventHub
var fnLists = {};
var eventHub = {
  // 发布
  trigger(eventName, data) {
    let fnList = fnLists[eventName];
    if (!fnList) {
      return;
    }
    for (let i = 0; i < fnList.length; i++) {
      fnList[i](data);
    }
  },
  // 订阅
  on(eventName, fn) {
    if (!fnLists[eventName]) {
      fnLists[eventName] = [];
    }
    fnLists[eventName].push(fn);
  }
};

var x = {
  init() {
    eventHub.on("我想花钱", function(data) {
      // subscribe
      store.money.amount -= data; // reducer
      render();
    });
  }
};
x.init();

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      store: store
    };
  }
  render() {
    return (
      <div className="box">
        <BigDad money={this.state.store.money.amount} />
        <SmallDad money={this.state.store.money.amount} />
      </div>
    );
  }
}

class BigDad extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="dad">
        大爸 {this.props.money}
        <Son1 money={this.props.money} />
        <Son2 money={this.props.money} />
      </div>
    );
  }
}

class SmallDad extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="dad">
        小爸 {this.props.money}
        <Son3 money={this.props.money} />
        <Son4 money={this.props.money} />
      </div>
    );
  }
}

class Son1 extends React.Component {
  constructor() {
    super();
  }
  render() {
    return <div>儿子1 {this.props.money}</div>;
  }
}

class Son2 extends React.Component {
  constructor() {
    super();
  }
  spendMoney() {
    eventHub.trigger("我想花钱", 100);
  }
  render() {
    return (
      <div>
        儿子2 {this.props.money}
        <button onClick={() => this.spendMoney()}>我想花钱</button>
      </div>
    );
  }
}

class Son3 extends React.Component {
  constructor() {
    super();
  }
  render() {
    return <div>儿子3 {this.props.money}</div>;
  }
}

class Son4 extends React.Component {
  constructor() {
    super();
  }
  render() {
    return <div>儿子4 {this.props.money}</div>;
  }
}

function render() {
  ReactDOM.render(<App />, document.getElementById("root"));
}

render();
