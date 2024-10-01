import { useEffect, useState } from "react";

function Dashboard() {
    const [existingWorkouts, setExistingworkout] = useState({});

    useEffect(() => {
        const newexistingWorkouts = JSON.parse(localStorage.getItem('workouts')) || {};
        setExistingworkout(newexistingWorkouts);
    }, []);

    return (
        <div className="container mx-auto bg-yellow-50 p-4 mt-3 rounded-xl divide-solid divide-yellow-400">
            <h1 className="text-2xl font-bold mb-4">Previous Workouts</h1>
            {Object.keys(existingWorkouts).length > 0 ? (
                Object.keys(existingWorkouts).map((date) => (
                    <div key={date} className="py-5 bg-yellow-300 px-4 m-2 rounded-lg">
                        <h2 className="font-semibold text-lg mb-2">{date}</h2>
                        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                            {existingWorkouts[date].map((workout, index) => (
                                <div key={index} className="p-4 bg-yellow-200 rounded-lg shadow-md">
                                    <h3 className="font-semibold">{workout.exercise}</h3>
                                    <p className="text-sm mt-2">Body Part: {workout.bodypart}</p>
                                    <p className="text-sm">Sets:</p>
                                    <ul className="list-disc list-inside">
                                        {workout.sets.map((set, idx) => (
                                            <li key={idx} className="text-xs">
                                                Weight: {set.weight}, Reps: {set.reps}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                ))
            ) : (
                <div className="p-5 bg-yellow-200 px-4 m-2 rounded-lg">
                    <h2>No workouts available</h2>
                </div>
            )}
        </div>
    );
}

export default Dashboard;