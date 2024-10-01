
// import { useEffect, useState } from "react";
import Graphs from "./Graphs";
function GraphDashboard() {

    const newexistingWorkouts = JSON.parse(localStorage.getItem('workouts')) || {};

return(<div>
<Graphs workoutData={newexistingWorkouts} />
</div>
)

}

export default GraphDashboard;