import React, { Component } from 'react';
import { addTodo, getTodos } from '../utils/api';
import './TodosPage.css';

export default class TodosPage extends Component {
  state = {
    todo: '',
    todos: []
  }

  async componentDidMount() {
    try {
      const todos = await getTodos();
      this.setState({ todos: todos || [] });
    }
    catch (err) {
      console.log(err.message);
    }
  }

  handleAdd = async e => {
    e.preventDefault();
    const { todo, todos } = this.state;
    
    try {
      const addedTodo = await addTodo({ task: todo });
      const updatedTodos = [...todos, addedTodo];
      this.setState({ todos: updatedTodos, todo: '' });
    }
    catch (err) {
      console.log(err.message);
    }
  }

  handleTodoChange = ({ target }) => {
    this.setState({ todo: target.value });
  }

  handleDelete = async id => {
    console.log('You want to delete: ', id);
  }

  render() {
    const { todo, todos } = this.state;
    return (
      <div>
        <form onSubmit={this.handleAdd}>
          <ul>
            {todos.map(todo => (
              <li key={todo.task}>

                <h2>{todo.task}</h2>
                
                <button>X</button>
              </li>
            ))}
          </ul>
          <input value={todo} onChange={this.handleTodoChange}></input>
          

        </form>
      </div>
    );
  }
}
