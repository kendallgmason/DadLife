export default function Row1(){
    return(
        <div style= {{ display: "flex"}}>
        <div style={{ padding: "16px", border: "1px solid #ddd", borderRadius: "8px", width: "200px", gap: "12px" }}>
    <h3>Tasks Today</h3>
    <p>3 remaining</p>
  </div>

  <div style={{ padding: "16px", border: "1px solid #ddd", borderRadius: "8px", width: "200px", gap: "12px" }}>
    <h3>Slimming World</h3>
    <p>On plan</p>
  </div>

  <div style={{ padding: "16px", border: "1px solid #ddd", borderRadius: "8px", width: "200px", gap: "12px" }}>
    <h3>BJJ</h3>
    <p>2 sessions</p>
  </div>

  <div style={{ padding: "16px", border: "1px solid #ddd", borderRadius: "8px", width: "200px", gap: "12px" }}>
    <h3>Devotional</h3>
    <p>Completed ✅</p>
    </div>
    </div>
    )
}