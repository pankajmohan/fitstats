import Exercises from "./exercises.json";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Startnewworkout() {
    const today = new Date().toISOString().split('T')[0]; // Format date as YYYY-MM-DD

    const navigate = useNavigate();
    const [date, setDate] = useState(today); // Set initial date to today
    const [exercises, setExercises] = useState([]);
    const [bodypart, setBodypart] = useState("");
    const [exercise, setExercise] = useState("");
    const [sets, setSets] = useState([{ weight: "0", reps: "0" }]); // Initialize with default values

    const keys = Object.keys(Exercises);

    function getExercises(e) {
        let value = e.target.value;
        let bodypartExercise = Exercises[value];
        let optionExercises = bodypartExercise.map((key, index) => (
            <option key={index} value={key.exercise} className="custom-option">{key.exercise}</option>
        ));
        setBodypart(value);
        setExercises(optionExercises);
    }

    function handleSetChange(index, event) {
        const { name, value } = event.target;
        const newSets = [...sets];
        newSets[index][name] = value;
        setSets(newSets);
    }

    function addSet() {
        setSets([...sets, { weight: "0", reps: "0" }]); // Initialize new set with default values
    }

    function removeSet(index) {
        setSets(sets.filter((_, i) => i !== index));
    }

    function handleSubmit(e) {
        e.preventDefault();

        // Validate inputs
        if (!bodypart || !exercise || sets.some(set => !set.weight || !set.reps)) {
            alert("Please fill out all fields correctly.");
            return;
        }

        // Create the workout details structure
        const workoutDetails = {
            bodypart,
            exercise,
            sets
        };

        // Get existing workouts from localStorage (or initialize an empty object)
        const existingWorkouts = JSON.parse(localStorage.getItem('workouts')) || {};

        // Check if a workout already exists for the selected date
        if (existingWorkouts[date]) {
            const existingWorkout = existingWorkouts[date].find(w => w.exercise === exercise);
            if (existingWorkout) {
                existingWorkout.sets.push(...sets); // Append new sets
            } else {
                existingWorkouts[date].push(workoutDetails);
            }
        } else {
            existingWorkouts[date] = [workoutDetails];
        }

        // Save the updated workouts object back to localStorage
        localStorage.setItem('workouts', JSON.stringify(existingWorkouts));

        navigate('/fitstats');
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-12 m-3 gap-4">
                <div className="bg-yellow-200 col-span-1 md:col-span-12 p-2 m-4 rounded-lg divide-y divide-solid divide-yellow-500">
                    <h1 className="text-center p-4">New Workout</h1>
                    <div className="px-4">
                        {/* Date Input */}
                        <div className="flex flex-col md:flex-row items-center my-4">
                            <label className="w-full md:w-1/4 mb-2 md:mb-0 flex justify-center text-bold">Date</label>
                            <input
                                type="date"
                                name="date"
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                                max={today} // Restrict input to today or earlier
                                className="bg-yellow-100 border-4 border-yellow-300 flex-grow p-2 hover:border-yellow-500 focus:border-yellow-500 focus:outline-none rounded-lg px-2"
                            />
                        </div>
                        {/* Body part Selection */}
                        <div className="flex flex-col md:flex-row items-center my-4">
                            <label className="w-full md:w-1/4 mb-2 md:mb-0 flex justify-center text-bold">Body part</label>
                            <select name="exercisetype" className="bg-yellow-100 border-4 border-yellow-300 flex-grow p-2 hover:border-yellow-500 focus:border-yellow-500 focus:outline-none rounded-lg px-2" onChange={getExercises}>
                                <option value="" className="custom-option">Please select a body part</option>
                                {keys.map(key => (
                                    <option key={key} value={key} className="custom-option">{key}</option>
                                ))}
                            </select>
                        </div>
                        {/* Exercise Selection */}
                        <div className="flex flex-col md:flex-row items-center">
                            <label className="w-full md:w-1/4 mb-2 md:mb-0 flex justify-center text-bold">Exercise</label>
                            <select name="exercisetype" className="bg-yellow-100 border-4 border-yellow-300 flex-grow p-2 hover:border-yellow-500 focus:border-yellow-500 focus:outline-none rounded-lg px-2" onChange={(e) => setExercise(e.target.value)}>
                                <option value="" className="custom-option">Please select an exercise</option>
                                {exercises}
                            </select>
                        </div>
                        {/* Sets Table */}
                        <div className="">
                            <table className="min-w-full bg-yellow-200 px-4">
                                <thead>
                                    <tr>
                                        <th className="py-2 w-1/5">Set</th>
                                        <th className="py-2 w-2/5">Weight</th>
                                        <th className="py-2 w-2/5">Reps</th>
                                        <th className="py-2 w-1/5">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {sets.map((set, index) => (
                                        <tr key={index}>
                                            <td className="py-2 text-center w-1/4">Set-{index + 1}</td>
                                            <td className="p-2 w-1/4">
                                                <input
                                                    type="number"
                                                    name="weight"
                                                    value={set.weight}
                                                    onChange={(e) => handleSetChange(index, e)}
                                                    className="bg-yellow-100 border-4 border-yellow-300 flex-grow p-2 hover:border-yellow-500 focus:border-yellow-500 focus:outline-none rounded-lg px-2 w-full"
                                                />
                                            </td>
                                            <td className="p-2 w-1/4">
                                                <input
                                                    type="number"
                                                    name="reps"
                                                    value={set.reps}
                                                    onChange={(e) => handleSetChange(index, e)}
                                                    className="bg-yellow-100 border-4 border-yellow-300 flex-grow p-2 hover:border-yellow-500 focus:border-yellow-500 focus:outline-none rounded-lg px-2 w-full"
                                                />
                                            </td>
                                            <td className="p-2 w-1/5 text-center">
                                                <button
                                                    type="button"
                                                    onClick={() => removeSet(index)}
                                                    className="bg-red-400 border-2 border-red-500 p-1 text-xs rounded-lg"
                                                >
                                                    Remove
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <div className="flex justify-center m-4">
                                <button type="button" onClick={addSet} className="bg-yellow-400 border-2 border-yellow-500 p-2 text-sm rounded-lg">
                                    Add Set
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center text-center justify-center p-4">
                        <button className="rounded-lg border-4 border-yellow-400 bg-yellow-400 p-2">Submit</button>
                    </div>
                </div>
            </div>
        </form>
    );
}

export default Startnewworkout;
