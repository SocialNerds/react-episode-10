import React, { Component } from 'react';
import { observer } from 'mobx-react';

@observer
export default class TodoList extends Component {
  constructor(props) {
    super(props);
    this.onFilter = this.onFilter.bind(this);
    this.onCreate = this.onCreate.bind(this);
    this.toggleComplete = this.toggleComplete.bind(this);
    this.clearCompleted = this.clearCompleted.bind(this);

  }

  onFilter(e) {
    this.props.store.filter = e.target.value;
  }

  onCreate(e) {
    if (e.which === 13) {
      this.props.store.createTodo(Date.now(), e.target.value);
      e.target.value = ""
    }
  }

  clearCompleted() {
    this.props.store.clearCompleted();
  }

  toggleComplete(todo) {
    todo.done = !todo.done;
  }

  render() {
    const todoList = this.props.store.filteredTodos.map((todo) => {
      return (
        <li key={todo.id}>
          <input type="checkbox" onChange={() => this.toggleComplete(todo)} checked={todo.done} />
          {todo.title}
        </li>
      );
    });
    return (
      <div>
        <h1>Todos</h1>
        <input onChange={this.onFilter} placeholder="Filter" />
        <input onKeyPress={this.onCreate} placeholder="Create" />
        <ul>
          {todoList}
        </ul>
        <a href="#" onClick={this.clearCompleted}>Clear Completed</a>
      </div>
    );
  }
}
