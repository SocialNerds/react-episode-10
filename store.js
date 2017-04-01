import { observable, computed, action } from 'mobx';
import Todo from './components/Todo';

class Store {
  @observable todos = [];
  @observable filter = "";

  @computed get filteredTodos() {
    const match = new RegExp(this.filter, 'i');
    return this.todos.filter(todo => !this.filter || match.test(todo.title))
  }

  @action createTodo(id, title, done = false) {
    const todo = new Todo(id, title, done);
    this.todos.push(todo);
  }

  @action clearCompleted() {
    console.log(this.todos)
    const todos = this.todos.filter(todo => !todo.done)
    this.todos.replace(todos);
  }
}

const store = new Store();
export default store;
