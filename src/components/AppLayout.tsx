import Sidebar from "./Sidebar";
import TopBar from "./TopBar";
import DashboardPage from "../pages/DashboardPage";

export default function AppLayout() {
    return (
        <div style={{ display: "flex" }} className="app">
       
            <div className="Sidebar">
        <Sidebar />
        </div>
        
        <div className="top-dash-group">
            <div className="TopBar">
            <TopBar />
            </div>

            <div>
            <DashboardPage />
            </div>
        </div>
       
        </div>
    )
}
        
