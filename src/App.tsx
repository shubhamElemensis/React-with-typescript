import React, { useState } from "react";
import Todo from "./components/Todo";
import Add from "./components/Add";

interface todo {
  id: number;
  text: string;
}
export default function App() {
  const [todos, settodos] = useState<todo[]>([]);
  const addTodoHandler = (text: string) => {
    console.log(text);
    settodos([...todos,{ id: Math.random(), text: text }]);
  };
  console.log(todos);

  return (
    <>
      <Add Add={addTodoHandler} />
      <Todo items={todos} />
    </>
  );
}
