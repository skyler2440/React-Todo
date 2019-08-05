import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';

const todoData = [
  {
    task:'Finish Todo List',
    id:1,
    completed: false
  },
  {
    task:'Style Todo List',
    id:2,
    completed:false
  },
  {
    task:'Remove Default Todos',
    id:3,
    completed:false
  }
];

class App extends React.Component {
constructor(){
  super();
  this.state = {
    todoData
  };
}


  render() {
    console.log('tododata', this.state.todoData)
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm />
      </div>
    );
  }
}

export default App;
