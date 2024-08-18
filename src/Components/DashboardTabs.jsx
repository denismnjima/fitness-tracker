import Calories from "./Calories"
import { useEffect, useState } from "react";
import { supabase } from "../config/supabaseClient";
import { useUser } from "../Hooks/useUserStore";
function DashboardTabs() {
  // const [loading,setLoading] = useState(false)
  // useEffect(() => {
  //   const fetchActivities = async () => {
  //     const today = new Date().toISOString().split('T')[0];
  //     const { data, error } = await supabase
  //       .from('user_activities')
  //       .select('*')
  //       .eq('user_id', user.id)
  //       .like('activity_date', `${today}%`); 

  //     if (error) {
  //       console.error('Error fetching activities:', error);
  //     } else {
  //       console.log(data)
  //     }

  //     // setLoading(false);
  //   };

  //   fetchActivities();
  // }, []);

  return (
    <div className="dashboard-tabs">
        <Calories/>
    </div>
  )
}

export default DashboardTabs