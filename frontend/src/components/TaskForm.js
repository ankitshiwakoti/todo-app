import React, { useState } from "react";

const TaskForm = ({ onTaskAdded }) => {
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim() === "") return;

    const newTask = {
      task,
      completed: false, // Default to not completed
    };

    onTaskAdded(newTask); // Call the function from `Home`
    setTask(""); // Reset input field
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a new task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
