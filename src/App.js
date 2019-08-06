import React from "react";
import TodoForm from "./components/TodoComponents/TodoForm.jsx";
import TodoList from "./components/TodoComponents/TodoList.jsx";
import Todo from "./components/TodoComponents/Todo.jsx";

const todoData = [
  {
    task: "Finish Todo List",
    id: 1,
    completed: false
  },
  {
    task: "Style Todo List",
    id: 2,
    completed: false
  },
  {
    task: "Remove Default Todos",
    id: 3,
    completed: false
  }
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todoData
    };
  }
  toggleComplete = id => {
    console.log('toggle works', id)
    this.setState({
      todoData: todoData.map(mres => {
        console.log('toggleMapResults', mres.id)
        if(mres.id === id) {
          return{
            ...mres,
            completed: !mres.completed
          }
        } else {
          return mres;
        }
      })
    })
  }

  addTodo = todoTask => {
    const newTodo = {
      task: todoTask,
      id: Date.now(),
      completed: false
    }
    this.setState({
      todoData: [...this.state.todoData, newTodo]
    })
  }
  clearComplete = () => {
    this.setState({
      todoData: this.state.todoData.filter(res => !res.completed)
    })
  }
  render() {
    console.log("mock todo data array", this.state.todoData);
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <p>{}</p>
        <Todo />
        <TodoList todoData={this.state.todoData} toggleComplete={this.toggleComplete} clearComplete={this.clearComplete}/>
        <TodoForm addTodo={this.addTodo}/>
      </div>
    );
  }
}

export default App;
