import React, { Component } from 'react';

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
        name: "John",
      });
    }, 2000);
    return <h1>Hello {this.state.name}</h1>;
  }
}
