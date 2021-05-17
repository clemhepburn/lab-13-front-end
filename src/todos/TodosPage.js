import React, { Component } from 'react';
import { addTodo } from '../utils/api';
import './TodosPage.css';

export default class TodosPage extends Component {
  state = {
    todo: '',
    todos: []
  }

  handleAdd = async e => {
    e.preventDefault();
    const { todo } = this.state;
    const addedTodo = await addTodo({ task: todo });
    console.log('added', addedTodo);
  }

  handleTodoChange = ({ target }) => {
    this.setState({ todo: target.value });
  }

  render() {
    const { todo } = this.state;
    return (
      <div>
        <form onSubmit={this.handleAdd}>
          add new todo
          <input value={todo} onChange={this.handleTodoChange}></input>
        </form>
      </div>
    );
  }
}
