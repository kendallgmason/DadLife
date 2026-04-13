import {useState, useEffect } from 'react';
import Row1 from "../components/Row1";
import Row2 from "../components/Row2";

export type Task = {
  id: number;
  title: string;
  completed: boolean;
};

export default function DashboardPage(){
  const [tasks, setTasks] = useState<Task[]>(() => {
  const saved = localStorage.getItem("dadlife-tasks");

  if (saved) {
    try {
      return JSON.parse(saved);
    } catch (error) {
      console.error("Failed to parse saved tasks:", error);
    }
  }

  return [
    { id: 1, title: "Fold Clothes", completed: true },
    { id: 2, title: "Take Reggie for a walk", completed: false },
  ];
});
  
     useEffect(() => {
      const saved = localStorage.getItem('dadlife-tasks');

      if (saved) {
        setTasks(JSON.parse(saved));
      }
     }, []);

     useEffect(() => {
      localStorage.setItem('dadlife-tasks', JSON.stringify(tasks));

     }, [tasks]);
  


    return (
       <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <Row1 tasks={tasks}/>
        <Row2 tasks={tasks} setTasks={setTasks}/>
       </div>
    )
}