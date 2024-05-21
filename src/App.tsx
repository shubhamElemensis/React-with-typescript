import React, { useState } from "react";
// interface book {
//   name: string;
//   age: number;
// }

interface user {
  name: string;
  age: number;
}
export default function App() {
  const [input, setinput] = useState<user| null >({ name: "", age: 0 });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);

      setinput({
        name: e.target.value,
        age: e.target.value
    });
  };
  return (
    <div>
      <input
        type="text"
        name="name"
        onChange={handleChange}
        placeholder="name"
      />
      <input
        type="number"
        name="age"
        onChange={handleChange}
        placeholder="age"
      />
    </div>
  );
}
