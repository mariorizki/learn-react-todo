import React, { Component } from 'react';

class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = { inputText: '' };
  }

  handleChange = event => {
    this.setState({ inputText: event.target.value });
  };

  clearInputText = () => {
    this.setState({ inputText: '' });
  };

  render() {
    return (
      <form
        onSubmit={event => {
          this.props.addTodo(event, this.state.inputText);
          this.clearInputText();
        }}
      >
        <input
          type="text"
          placeholder="Input your todo.."
          value={this.state.inputText}
          onChange={this.handleChange}
        />
        <input type="submit" value="Add Todo" />
      </form>
    );
  }
}

export default TodoForm;
