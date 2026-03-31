import { Button } from "@fluentui/react-components";

export default function TopBar(){
    
    const now = new Date();
    const date = now.toLocaleDateString("en-GB");
    const time = now.toLocaleTimeString('en-GB')

    return (
    <div 
     style={{ 
              height: "60px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between" 
             }}
             >

      <h3>My Dashboard</h3>
      <div>
      <Button style={{ fontSize: "10px" }} appearance="subtle">Welcome, Kendall</Button>
      <Button style={{ fontSize: "10px" }} appearance="subtle">Date: {date} Time: {time}</Button>
      </div>
    </div>
  );
};