import React, { useRef } from "react";

interface props {
  Add: (text: string) => void;
}

const Add: React.FC<props> = (props) => {
  const input = useRef<HTMLInputElement>(null);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const entered = input.current!.value;
    // console.log(entered);

    props.Add(entered);
    
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Todo
        <input type="text" name="" id="" ref={input} />
      </label>
      <button type="submit">Add</button>
    </form>
  );
};
export default Add;
