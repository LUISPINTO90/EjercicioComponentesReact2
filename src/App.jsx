import React, { useState } from "react";
import TaskList from "./TaskList";
import "./App.css";

const App = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Hacer la compra", completed: false },
    { id: 2, title: "Lavar los platos", completed: false },
    { id: 3, title: "Pasear al perro", completed: false },
  ]);

  const handleTaskCompletion = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className="app-container">
      <h1>Lista de Tareas</h1>
      <TaskList tasks={tasks} onTaskCompletion={handleTaskCompletion} />
    </div>
  );
};

export default App;
