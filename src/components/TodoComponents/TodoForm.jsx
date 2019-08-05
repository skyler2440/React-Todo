import React from "react";

const TodoForm = props => {
  console.log("todoform props", props);
  return (
    <div className="todo-form">
      <form onSubmit="">
        <input type="text" name="task" placeholder="Todo Name" />
        <button>Submit Todo</button>
      </form>
      <button>Clear Complete</button>
      <h2>{}</h2>
    </div>
  );
};
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
