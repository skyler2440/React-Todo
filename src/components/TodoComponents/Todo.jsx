import React from "react";

const Todo = props => {
  console.log("todoFile props", props);
  return (
      <div onClick={() => props.toggleComplete(props.id)} >
<p>{props.todo}</p>
      </div>
  );
};
export default Todo;

// const Item = props => {
//   return (
//     <div
//       className={`item${props.item.purchased ? ' purchased' : ''}`}
//       onClick={() => props.toggleItem(props.item.id)}
//     >
//       <p>{props.item.name}</p>
//     </div>
//   );
// };

// export default Item;
