import { useMemo, useState } from "react";
import {
  Button,
  Card,
  CardHeader,
  Checkbox,
  Input,
  makeStyles,
  Text,
} from "@fluentui/react-components";
import {
  Add24Regular,
  Book24Regular,
  Dumbbell24Regular,
  CheckmarkCircle24Regular,
} from "@fluentui/react-icons";

type Task = {
  id: number;
  text: string;
  completed: boolean;
};

const useStyles = makeStyles({
  page: {
    display: "flex",
    flexDirection: "column",
    gap: "24px",
    minWidth: 0,
  },

  headerRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: "16px",

    "@media (max-width: 900px)": {
      flexDirection: "column",
      alignItems: "stretch",
    },
  },

  title: {
    fontSize: "40px",
    fontWeight: 700,
    lineHeight: 1.1,

    "@media (max-width: 640px)": {
      fontSize: "32px",
    },
  },

  mobileWelcome: {
    display: "none",
    fontSize: "16px",
    fontWeight: 600,
    color: "#605e5c",

    "@media (max-width: 900px)": {
      display: "block",
    },
  },

  cardsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
    gap: "16px",

    "@media (max-width: 1100px)": {
      gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
    },

    "@media (max-width: 640px)": {
      gridTemplateColumns: "1fr",
    },
  },

  summaryCard: {
    minWidth: 0,
    padding: "20px",
  },

  summaryTitle: {
    fontSize: "18px",
    fontWeight: 700,
    marginBottom: "12px",
  },

  summaryValue: {
    fontSize: "16px",
    color: "#323130",
  },

  contentGrid: {
    display: "grid",
    gridTemplateColumns: "minmax(0, 1fr) minmax(320px, 420px)",
    gap: "16px",
    alignItems: "start",

    "@media (max-width: 1000px)": {
      gridTemplateColumns: "1fr",
    },
  },

  panel: {
    minWidth: 0,
    padding: "20px",
  },

  panelTitle: {
    fontSize: "18px",
    fontWeight: 700,
    marginBottom: "20px",
  },

  taskList: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },

  taskRow: {
    display: "grid",
    gridTemplateColumns: "minmax(0, 1fr) auto",
    gap: "12px",
    alignItems: "center",

    "@media (max-width: 640px)": {
      gridTemplateColumns: "1fr",
    },
  },

  taskMain: {
    minWidth: 0,
  },

  taskText: {
    fontSize: "16px",
    wordBreak: "break-word",
  },

  taskTextCompleted: {
    textDecorationLine: "line-through",
    color: "#605e5c",
  },

  deleteButton: {
    minWidth: "100px",

    "@media (max-width: 640px)": {
      width: "100%",
    },
  },

  actionList: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },

  actionButton: {
    width: "100%",
    justifyContent: "center",
  },

  addTaskRow: {
    display: "flex",
    gap: "12px",
    marginBottom: "16px",

    "@media (max-width: 640px)": {
      flexDirection: "column",
    },
  },

  input: {
    flexGrow: 1,
  },
});

export default function DashboardPage() {
  const styles = useStyles();

  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, text: "Fold Clothes", completed: true },
    { id: 2, text: "Take Reggie for a walk", completed: false },
  ]);

  const [weightLogged, setWeightLogged] = useState(false);
  const [bjjSessions, setBjjSessions] = useState(2);
  const [devotionDone, setDevotionDone] = useState(true);
  const [newTask, setNewTask] = useState("");

  const remainingTasks = useMemo(
    () => tasks.filter((task) => !task.completed).length,
    [tasks]
  );

  const addTask = () => {
    const trimmed = newTask.trim();
    if (!trimmed) return;

    setTasks((prev) => [
      ...prev,
      {
        id: Date.now(),
        text: trimmed,
        completed: false,
      },
    ]);
    setNewTask("");
  };

  const toggleTask = (id: number, checked: boolean) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: checked } : task
      )
    );
  };

  const deleteTask = (id: number) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  return (
    <div className={styles.page}>
      <div className={styles.headerRow}>
        <h1 className={styles.title}>My Dashboard</h1>
        <div className={styles.mobileWelcome}>Welcome, Kendall</div>
      </div>

      <div className={styles.cardsGrid}>
        <Card className={styles.summaryCard}>
          <div className={styles.summaryTitle}>Tasks Today</div>
          <div className={styles.summaryValue}>
            {remainingTasks} task{remainingTasks !== 1 ? "s" : ""} remaining
          </div>
        </Card>

        <Card className={styles.summaryCard}>
          <div className={styles.summaryTitle}>Slimming World</div>
          <div className={styles.summaryValue}>
            {weightLogged ? "Weight logged" : "On plan"}
          </div>
        </Card>

        <Card className={styles.summaryCard}>
          <div className={styles.summaryTitle}>BJJ</div>
          <div className={styles.summaryValue}>
            {bjjSessions} session{bjjSessions !== 1 ? "s" : ""}
          </div>
        </Card>

        <Card className={styles.summaryCard}>
          <div className={styles.summaryTitle}>Devotional</div>
          <div className={styles.summaryValue}>
            {devotionDone ? "Completed ✅" : "Not completed yet"}
          </div>
        </Card>
      </div>

      <div className={styles.contentGrid}>
        <Card className={styles.panel}>
          <div className={styles.panelTitle}>Today's Tasks</div>

          <div className={styles.addTaskRow}>
            <Input
              className={styles.input}
              value={newTask}
              placeholder="Add a new task"
              onChange={(_, data) => setNewTask(data.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") addTask();
              }}
            />
            <Button
              appearance="primary"
              icon={<Add24Regular />}
              onClick={addTask}
            >
              Add Task
            </Button>
          </div>

          <div className={styles.taskList}>
            {tasks.map((task) => (
              <div key={task.id} className={styles.taskRow}>
                <div className={styles.taskMain}>
                  <Checkbox
                    checked={task.completed}
                    onChange={(_, data) => toggleTask(task.id, !!data.checked)}
                    label={
                      <span
                        className={`${styles.taskText} ${
                          task.completed ? styles.taskTextCompleted : ""
                        }`}
                      >
                        {task.text}
                      </span>
                    }
                  />
                </div>

                <Button
                  className={styles.deleteButton}
                  onClick={() => deleteTask(task.id)}
                >
                  Delete
                </Button>
              </div>
            ))}

            {tasks.length === 0 && (
              <Text>No tasks yet. Add your first task above.</Text>
            )}
          </div>
        </Card>

        <Card className={styles.panel}>
          <div className={styles.panelTitle}>Quick Actions</div>

          <div className={styles.actionList}>
            <Button
              className={styles.actionButton}
              appearance="primary"
              icon={<Add24Regular />}
              onClick={() => {
                setNewTask("New Task");
              }}
            >
              Add Task
            </Button>

            <Button
              className={styles.actionButton}
              icon={<Dumbbell24Regular />}
              onClick={() => setWeightLogged(true)}
            >
              Log Weight
            </Button>

            <Button
              className={styles.actionButton}
              icon={<Book24Regular />}
              onClick={() => setBjjSessions((prev) => prev + 1)}
            >
              Add BJJ Session
            </Button>

            <Button
              className={styles.actionButton}
              icon={<CheckmarkCircle24Regular />}
              onClick={() => setDevotionDone(true)}
            >
              Mark Devotion
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}