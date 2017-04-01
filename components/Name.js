import React, { Component } from 'react';

export default class Name extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    setTimeout(() => {
      this.props.changeName("John");
    }, 1000);
    return <strong>{this.props.name}</strong>;
  }
}
