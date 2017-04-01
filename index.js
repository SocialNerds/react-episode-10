import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import store from './store';
import TodoList from './components/TodoList';

ReactDOM.render(<TodoList store={store}/>, document.getElementById('app'));
