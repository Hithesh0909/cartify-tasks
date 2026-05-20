import React, { useState, useEffect } from "react";
import "./App.css";

function App() {

  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    console.log("Tasks Updated");
  }, [tasks]);

  const addTask = () => {

    if(task.trim() === ""){
      alert("Task cannot be empty");
      return;
    }

    setTasks([...tasks, task]);
    setTask("");
  };

  const deleteTask = (index) => {

    const updatedTasks = tasks.filter((_, i) => i !== index);

    setTasks(updatedTasks);
  };

  return (

    <div className="container">

      <h1>Cartify Task Manager</h1>

      <div className="task-form">

        <input
          type="text"
          placeholder="Enter Task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />

        <button onClick={addTask}>
          Add Task
        </button>

      </div>

      <div className="task-list">

        {
          tasks.map((item, index) => (

            <div className="task-card" key={index}>

              <p>{item}</p>

              <button onClick={() => deleteTask(index)}>
                Delete
              </button>

            </div>

          ))
        }

      </div>

    </div>
  );
}

export default App;