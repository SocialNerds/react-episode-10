import React, { Component } from 'react';
import Name from './Name';

export default class Hello extends Component {
  constructor() {
    super();
    this.state = {
      name: "Thanos",
    }
  }

  render() {
    setTimeout(() => {
      this.setState({
        name: "John"
      })
    }, 1000);
    return <h1>Hello, <Name name={this.state.name} /></h1>;
  }
}
