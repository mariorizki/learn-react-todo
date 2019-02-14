import React, { Component } from 'react';

class TodoList extends Component {
  render() {
    return (
      <ul>
        {this.props.data.map(todo => {
          return (
            <li>
              {todo.text}{' '}
              <button onClick={() => this.props.deleteTodo(todo.id)}>X</button>
              <button onClick={() => this.props.editTodo(todo.id)}>Edit</button>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default TodoList;
