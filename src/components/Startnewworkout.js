import Exercises from "./exercises.json";
import { useState } from "react";
// import { useNavigate } from "react-router-dom";

function Startnewworkout() {
    let today = new Date().toLocaleDateString();

    // const navigate = useNavigate();
    const [exercises, setExercises] = useState([]);
    const [bodypart, setbodypart] = useState("");
    const [exercise, setExercise] = useState("");
    const [sets, setSets] = useState([{ weight: "", reps: "" }]);

    const keys = Object.keys(Exercises);

    function getExercises(e) {
        let value = e.target.value;
        let bodypartExercise = Exercises[value];
        let optionexercises = bodypartExercise.map((key, index) => (
            <option key={index} value={key.exercise} className="custom-option">{key.exercise}</option>
        ));
        setbodypart(value);
        setExercises(optionexercises);
    }

    function handleSetChange(index, event) {
        const { name, value } = event.target;
        const newSets = [...sets];
        newSets[index][name] = value;
        setSets(newSets);
    }

    function addSet() {
        setSets([...sets, { weight: "", reps: "" }]);
    }

    function handlesubmit(e) {
        e.preventDefault();
        console.warn(bodypart + ',' + exercise, sets);
    }

    return (
        <form onSubmit={handlesubmit}>
            <div className="grid grid-cols-1 md:grid-cols-12 m-3 gap-4">
                <div className="bg-yellow-200 col-span-1 md:col-span-12 p-2 m-4 rounded-lg divide-y divide-solid divide-yellow-500">
                    <h1 className="text-center p-4">New Workout {today}</h1>
                    <div className="px-4">
                        <div className="flex flex-col md:flex-row items-center my-4">
                            <label className="w-full md:w-1/4 mb-2 md:mb-0 flex justify-center text-bold">Body part</label>
                            <select name="exercisetype" className="border-4 border-yellow-300 flex-grow p-2 hover:border-yellow-500 focus:border-yellow-500 focus:outline-none rounded-lg px-2" onChange={getExercises}>
                                <option value="" className="custom-option">Please select a body part</option>
                                {keys.map(key => (
                                    <option key={key} value={key} className="custom-option">{key}</option>
                                ))}
                            </select>
                        </div>
                        <div className="flex flex-col md:flex-row items-center">
                            <label className="w-full md:w-1/4 mb-2 md:mb-0 flex justify-center text-bold">Exercise</label>
                            <select name="exercisetype" className="border-4 border-yellow-300 flex-grow p-2 hover:border-yellow-500 focus:border-yellow-500 focus:outline-none rounded-lg px-2" onChange={(e) => setExercise(e.target.value)}>
                                <option value="" className="custom-option">Please select an exercise</option>
                                {exercises}
                            </select>
                        </div>
                        <div className="">
                            <table className="min-w-full bg-yellow-200 px-4">
                                <thead>
                                    <tr>
                                        <th className="py-2 w-1/5">Set</th>
                                        <th className="py-2 w-2/5">Weight</th>
                                        <th className="py-2 w-2/5">Reps</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {sets.map((set, index) => (
                                        <tr key={index}>
                                            <td className="py-2 text-center w-1/5">Set-{index + 1}</td>
                                            <td className="py-2 w-2/5">
                                                <input
                                                    type="number"
                                                    name="weight"
                                                    value={set.weight}
                                                    onChange={(e) => handleSetChange(index, e)}
                                                    className="border-4 border-yellow-300 flex-grow p-2 hover:border-yellow-500 focus:border-yellow-500 focus:outline-none rounded-lg px-2 w-full"
                                                />
                                            </td>
                                            <td className="py-2 w-2/5">
                                                <input
                                                    type="number"
                                                    name="reps"
                                                    value={set.reps}
                                                    onChange={(e) => handleSetChange(index, e)}
                                                    className="border-4 border-yellow-300 flex-grow p-2 hover:border-yellow-500 focus:border-yellow-500 focus:outline-none rounded-lg px-2 w-full"
                                                />
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
