import React, { Component } from 'react';
import { addTodo, deleteTodo, updateTodoCompleted, getTodos } from '../utils/api';
import './TodosPage.css';

export default class TodosPage extends Component {
  state = {
    todo: '',
    todos: []
  }

  async componentDidMount() {
    try {
      const todos = await getTodos();
      console.log(todos);
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
    const { todos } = this.state;
    try {
      await deleteTodo(id);

      const updatedTodos = todos.filter(todo => todo.id !== id);
      this.setState({ todos: updatedTodos });
    }
    catch (err) {
      console.log(err.message);
    }
  }

  handleCompletedChecked = async todo => {
    todo.completed = !todo.completed;
    const { todos } = this.state;
    try {
      const updatedTodo = await updateTodoCompleted(todo);
      console.log(updatedTodo);
      const updatedTodos = todos.map(todo => todo.id === updatedTodo.id ? updatedTodo : todo);
      this.setState({ todos: updatedTodos });
    }
    catch (err) {
      console.log(err);
    }
  }

  render() {
    const { todo, todos } = this.state;
    return (
      <div className='TodoPage'>

        <form onSubmit={this.handleAdd}>
          <input placeholder="add a task" value={todo} onChange={this.handleTodoChange}></input>
        </form>
        <ul>
          {todos.map(todo => (
            <li key={todo.id}>

              
              <h2>{todo.task}</h2>
              <label for="checkbox"> Completed:
                <input name="checkbox" type="checkbox" value={todo.completed} checked={todo.completed}
                  onChange={() => this.handleCompletedChecked(todo)} />
              </label>
                
              <button onClick={() => this.handleDelete(todo.id)}>delete</button>
            </li>
          ))}
            
        </ul>

          
                
        
      </div>
    );
  }
}
