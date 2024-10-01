
import { useEffect, useState } from "react";
import Graphs from "./Graphs";
function GraphDashboard() {
    const [workouts,setWorkouts] = useState({}); 
    useEffect(() => {
        // const workouts = ;
        setWorkouts(JSON.parse(localStorage.getItem('workouts')));
      }, []);
      
    const newexistingWorkouts = workouts || {};

return(<div>
<Graphs workoutData={newexistingWorkouts} />
</div>
)

}

export default GraphDashboard;