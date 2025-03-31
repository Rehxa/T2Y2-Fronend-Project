/** @format */

import Task from "./Task";

const TaskList = ({ tasks, setTasks }) => {
  return (
    <ul className='task-list'>
      {tasks.map((task) => (
        <Task key={task.id} task={task} setTasks={setTasks} />
      ))}
    </ul>
  );
};

export default TaskList;
