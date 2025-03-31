/** @format */

import { useState } from "react";

let taskId = 0;
const AddTask = ({ setTasks }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    setTasks((prev) => [
      ...prev,
      {
        id: ++taskId,
        text: inputValue,
        completed: false,
      },
    ]);
    setInputValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder='Add a new task...'
      />
      <button id='Add-button' type='submit'>
        Add
      </button>
    </form>
  );
};

export default AddTask;
