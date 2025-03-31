/** @format */

import { useState } from "react";

const Task = ({ task, setTasks }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(task.text);

  const handleComplete = () => {
    setTasks((prev) =>
      prev.map((t) =>
        t.id === task.id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  const handleEdit = () => {
    setTasks((prev) =>
      prev.map((t) => (t.id === task.id ? { ...t, text: editText } : t))
    );
    setIsEditing(false);
  };

  const handleDelete = () => {
    setTasks((prev) => prev.filter((t) => t.id !== task.id));
  };

  return (
    <li className={`${task.completed ? "task completed" : "task"}`}>
      <input
        type='checkbox'
        checked={task.completed}
        onChange={handleComplete}
      />

      {isEditing ? (
        <>
          <input
            type='text'
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
          />
          <button onClick={handleEdit}>Save</button>
        </>
      ) : (
        <>
          <span>{task.text}</span>
          <button id='Edit-button' onClick={() => setIsEditing(true)}>
            Edit
          </button>
        </>
      )}

      <button id='Delete-button' onClick={handleDelete}>
        Delete
      </button>
    </li>
  );
};

export default Task;
