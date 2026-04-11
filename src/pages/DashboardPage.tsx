import {useState} from 'react';
import Row1 from "../components/Row1";
import Row2 from "../components/Row2";

export type Task = {
  id: number;
  title: string;
  completed: boolean;
};

export default function DashboardPage(){
     const [tasks, setTasks] = useState<Task[]>([
    { id: 1, title: "Fold Clothes", completed: true },
    { id: 2, title: "Take Reggie for a walk", completed: false },
  ]);
    return (
       <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <Row1 tasks={tasks}/>
        <Row2 tasks={tasks} setTasks={setTasks}/>
       </div>
    )
}