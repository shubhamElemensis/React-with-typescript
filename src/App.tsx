import React from "react";
interface book {
  name: string;
  age: number;
}
export default function App({ name, age }: book) {
  return (
    <div>
      {name}
      {age}
    </div>
  );
}
