import DashboardTabs from "./DashboardTabs"
import Navbar from "./Navbar"

function Homepage() {
  return (
    <div className="dashboard">
        <Navbar />
        <DashboardTabs/>
        
    </div>
  )
}

export default Homepage