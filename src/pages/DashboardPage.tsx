import Row1 from "../components/Row1";
import Row2 from "../components/Row2";

export default function DashboardPage(){
    return (
       <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <Row1 />
        <Row2 />
       </div>
    )
}