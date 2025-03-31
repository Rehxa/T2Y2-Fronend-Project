/** @format */

import { useState } from "react";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className='app'>
      <h1>Daily To-Do List</h1>
      <TodoList />
    </div>
  );
}

export default App;
