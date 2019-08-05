import React from "react";
import Todo from "./Todo.jsx";

const TodoList = props => {
  console.log("todolist.jsx props", props);
  return <div className="todo-list">
      {props.todoData.map(mres =>(
        <>
          <Todo key={mres.id} id={mres.id} todo={mres.task} toggleComplete={props.toggleComplete}/>
          </>
      ))}
          <button className='todo-complete' onClick={props.clearComplete}>Clear Completed</button>

  </div>;
};

export default TodoList;

// import React from 'react';

// import Item from './Item';

// const GroceryList = props => {
//     // const sortedList = props.groceries.sort((a, b) => a.purchased - b.purchased);
//     return (
//         <div className="shopping-list">
//             {props.groceries.map(item => (
//                 <Item key={item.id} item={item} toggleItem={props.toggleItem} />
//             ))}
//             <button className="clear-btn" onClick={props.clearPurchased}>
//                 Clear Purchased
//       </button>
//         </div>
//     );
// };

// export default GroceryList;
