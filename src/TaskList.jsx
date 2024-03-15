import React from "react";
import Task from "./Task";
import "./TaskList.css";

const TaskList = ({ tasks, onTaskCompletion }) => {
  const completedTasks = tasks.filter((task) => task.completed);

  return (
    <div className="task-list-container">
      <h2>Total de tareas completadas: {completedTasks.length}</h2>
      {tasks.map((task) => (
        <Task key={task.id} task={task} onTaskCompletion={onTaskCompletion} />
      ))}
    </div>
  );
};

export default TaskList;
