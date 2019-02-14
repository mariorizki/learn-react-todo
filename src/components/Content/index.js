import React, { Component } from 'react';
import TodoForm from '../TodoForm';
import TodoList from '../TodoList';

class Content extends Component {
  constructor() {
    super();
    this.state = {
      data: [
        { id: 1, text: 'Learn HTML' },
        { id: 2, text: 'Learn CSS' },
        { id: 3, text: 'Learn JavaScript' }
      ]
    };
  }

  addTodo = (event, inputText) => {
    event.preventDefault();
    const newData = this.state.data.concat({ text: inputText });
    this.setState({ data: newData });
  };

  deleteTodo = id => {
    const deleted = this.state.data.filter(todo => {
      return todo.id !== id;
    });

    this.setState({ data: deleted });
  };

  editTodo = id => {
    const textInput = prompt('Edit todo to..');

    if (textInput !== null) {
      const edited = this.state.data.map(todo => {
        if (todo.id === id) {
          todo.text = textInput;
        }
        return todo;
      });
      this.setState({ data: edited });
    }
  };

  render() {
    console.log(this.state.data);
    return (
      <div>
        <TodoForm addTodo={this.addTodo} />
        <TodoList
          data={this.state.data}
          deleteTodo={this.deleteTodo}
          editTodo={this.editTodo}
        />
      </div>
    );
  }
}

export default Content;
