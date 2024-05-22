import React from "react";

interface props {
  items: { id: number; text: string }[];
}

const Todo: React.FC<props> = (props) => {
  return (
    <div>
      <ul>
        {props.items.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
