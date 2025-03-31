/** @format */

import { useState } from "react";
import AddTask from "./AddTask";
import TaskList from "./TaskList";
import FilterButtons from "./FilterButtons";
import ClearAllButton from "./ClearAllButton";

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");

  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") return task.completed;
    if (filter === "incomplete") return !task.completed;
    return true;
  });

  return (
    <div className='todo-list'>
      <AddTask setTasks={setTasks} />
      <FilterButtons setFilter={setFilter} />
      <TaskList tasks={filteredTasks} setTasks={setTasks} />
      <ClearAllButton setTasks={setTasks} />
    </div>
  );
};

export default TodoList;
