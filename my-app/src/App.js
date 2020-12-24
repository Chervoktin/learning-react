import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Component } from 'react';


class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = { op1: 0, op2: 0, result: 0 }

    this.handleChangeOp1 = this.handleChangeOp1.bind(this);
    this.handleChangeOp2 = this.handleChangeOp2.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClear = this.handleClear.bind(this);
  }

  handleChangeOp1(event) {
    this.setState({
      op1: event.target.value,
    })
  }

  handleChangeOp2(event) {
    this.setState({
      op2: event.target.value,
    })
  }

  handleSubmit(event) {
    this.setState({ result: parseFloat(this.state.op1) + parseFloat(this.state.op2) });
    event.preventDefault();
  }

  handleClear(event) {
    this.setState({ result: 0, op1: 0, op2: 0});
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
         <h1>{this.state.result}</h1>
        <input type="number" value={this.state.op1} onChange={this.handleChangeOp1} />
        <input type="number" value={this.state.op2} onChange={this.handleChangeOp2} />
        <input type="submit" value="отправить"/> 
        <button onClick={this.handleClear}>очистить</button>
      </form>
     
    )
  }

}

function App(props) {
  return (
    <div className="App">
    <Calculator></Calculator>      
    </div>
  );
}

export default App;
