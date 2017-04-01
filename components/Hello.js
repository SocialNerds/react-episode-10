import React, { Component } from 'react';
import Name from './Name';

export default class Hello extends Component {
  constructor() {
    super();
    this.state = {
      name: "Thanos",
    }

    this.changeName = this.changeName.bind(this);
  }

  changeName(name) {
    this.setState({
      name
    });
  }

  render() {
    return <h1>Hello, <Name changeName={this.changeName} name={this.state.name} /></h1>;
  }
}
