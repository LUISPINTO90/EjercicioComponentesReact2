import React from "react";
import "./Task.css";

const Task = ({ task, onTaskCompletion }) => {
  const handleCheckboxChange = () => {
    onTaskCompletion(task.id);
  };

  return (
    <div className="task-container">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={handleCheckboxChange}
      />
      <span className={task.completed ? "completed" : ""}>{task.title}</span>
    </div>
  );
};

export default Task;
