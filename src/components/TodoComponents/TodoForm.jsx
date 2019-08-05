import React from "react";

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      task: ""
    };
  }
  handleChanges = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  submitTodo = e => {
    e.preventDefault()
    this.props.addTodo(this.state.task)
  }

  
  render() {
    return (
      <form onSubmit={this.submitTodo}>
        <input
          type="text"
          value={this.state.task}
          name="task"
          onChange={this.handleChanges}
        />
        <button>Submit Todo</button>
      </form>
    );
  }
}
export default TodoForm;
// <form onSubmit={this.submitItem}>
//         <input
//           type="text"
//           value={this.state.item}
//           name="item"
//           onChange={this.handleChanges}
//         />
//         <button>Add</button>
//       </form>
