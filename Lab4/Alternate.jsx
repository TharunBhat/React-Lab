import { useState } from "react";

const ToDoFunction = () => {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const addTask = () => {
    if (!input.trim()) return;
    setTasks([...tasks, { text: input, done: false }]);
    setInput("");
  };

  return (
    <div style={styles.container}>
      <h1>React To-Do List</h1>

      <div>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter a task..."
          style={styles.input}
        />

        <button onClick={addTask} style={styles.addButton}>
          Add Task
        </button>
      </div>

      <ul style={styles.list}>
        {tasks.map((task, i) => (
          <li
            key={i}
            style={task.done ? styles.completedTask : styles.pendingTask}
          >
            <span
              onClick={() =>
                setTasks(
                  tasks.map((t, index) =>
                    index === i ? { ...t, done: !t.done } : t
                  )
                )
              }
              style={{ cursor: "pointer" }}
            >
              {i + 1}. {task.done ? "✔️" : "❌"} {task.text}
            </span>

            <button
              style={styles.deleteButton}
              onClick={() =>
                setTasks(tasks.filter((_, index) => index !== i))
              }
            >
              🗑️
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
    marginTop: "50px",
  },
  input: {
    padding: "10px",
    fontSize: "16px",
    width: "250px",
  },
  addButton: {
    marginLeft: "10px",
    padding: "10px",
    cursor: "pointer",
  },
  list: {
    listStyleType: "none",
    padding: 0,
    marginTop: "20px",
  },
  pendingTask: {
    padding: "10px",
    fontSize: "18px",
    borderBottom: "1px solid #ddd",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  completedTask: {
    padding: "10px",
    fontSize: "18px",
    textDecoration: "line-through",
    color: "gray",
    borderBottom: "1px solid #ddd",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  deleteButton: {
    background: "none",
    border: "none",
    fontSize: "18px",
    cursor: "pointer",
  },
};

export default ToDoFunction;
