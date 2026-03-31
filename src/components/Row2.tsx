import { Button } from "@fluentui/react-components";

export default function Row2() {
  return (
    <div style={{ display: "flex", gap: "16px" }}>
      
      {/* LEFT PANEL */}
      <div
        style={{
          flex: 1,
          gap: "12px",
          padding: "16px",
          border: "1px solid #ddd",
          borderRadius: "8px",
          background: "#fff",
        }}
      >
        <h3>Today's Actions</h3>

        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <span>☐ Apply to 2 jobs</span>
          <span>☐ 1 hour coding</span>
          <span>☑ Morning devotion</span>
          <span>☑ Family time</span>
        </div>
      </div>

      {/* RIGHT PANEL */}
      <div
        style={{
          flex: 1,
          gap: "12px",
          padding: "16px",
          border: "1px solid #ddd",
          borderRadius: "8px",
          background: "#fff",
        }}
      >
        <h3>Quick Actions</h3>

        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
         <Button appearance="primary">+ Add Task</Button>
        <Button appearance="secondary">Log Weight</Button>
        <Button appearance="outline">Add BJJ Session</Button>
        <Button appearance="outline">Mark Devotion</Button>
        </div>
      </div>
    </div>
  );
}