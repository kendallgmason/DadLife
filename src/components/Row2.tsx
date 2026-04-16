import { useState } from "react";
import { Button, Input, Checkbox } from "@fluentui/react-components";
import type { Task } from "../pages/DashboardPage";

export default function Row2({ tasks, setTasks }: {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}) {
  const [showTask, setShowTask] = useState(false);
  const [newTaskTitle, setNewTaskTitle] = useState("");

  // Toggle ONE task by id
  const handleCheckbox = (taskId: number) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  // ➕ Add new task
  const handleAddTask = () => {
    const newTask: Task = {
      id: Date.now(),
      title: newTaskTitle,
      completed: false,
    };

    if (!newTaskTitle.trim()) return;

    setTasks((prevTasks) => [...prevTasks, newTask]);
    setNewTaskTitle("");
    setShowTask(false);
  };

  // Delete a task 

  const deleteTask = ( taskId: number ) => {
        setTasks((prevTasks) => 
                  prevTasks.filter((task) => 
                  taskId !== task.id
      ))
       
  }

  return (
    <div style={{ display: "flex", gap: "16px" }}>
      
      {/* LEFT PANEL */}
      <div
        style={{
          flex: 1,
          padding: "16px",
          border: "1px solid #ddd",
          borderRadius: "8px",
          background: "#fff",
        }}
      >
        <h3>Today's Tasks</h3>

        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          {tasks.map((task) => (

            <span
              key={task.id}
              style={{
                textDecorationLine: task.completed ? "line-through" : "none",
              }}
            >
              <Checkbox
                checked={task.completed}
                onChange={() => handleCheckbox(task.id)}
              />
              {task.title}
              <Button onClick={() => deleteTask(task.id)}>Delete</Button>
            </span>
          ))}
        </div>
      </div>

      {/* RIGHT PANEL */}
      <div
        style={{
          flex: 1,
          padding: "16px",
          border: "1px solid #ddd",
          borderRadius: "8px",
          background: "#fff",
        }}
      >
        <h3>Quick Actions</h3>

        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <Button onClick={() => setShowTask((prev) => !prev)}>
            + Add Task
          </Button>

          {showTask && (
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <Input
                value={newTaskTitle}
                placeholder="Enter a task for today"
                onChange={(_, data) => setNewTaskTitle(data.value)}
              />
              <Button onClick={handleAddTask}>Save Task</Button>
            </div>
          )}

          <Button>Log Weight</Button>
          <Button>Add BJJ Session</Button>
          <Button>Mark Devotion</Button>
        </div>
      </div>
    </div>
  );
}
