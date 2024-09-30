import Exercises from "./exercises.json";
function Addnewexercise() {
    return (
        <div className="grid grid-cols-12 m-3 gap-4">
            <div className="bg-yellow-200 col-span-12 p-2 m-4 rounded-lg divide-y divide-solid divide-yellow-500">
                <h1 className="text-center p-4"> Add New Exercise</h1>
                <form>
                    <div className="px-4">
                        <div className="flex items-center my-4">
                            <label className="w-1/4">Exercise name</label>
                            <input type="text" name="exercisename" className="border-4 border-yellow-300 flex-grow p-2 hover:border-yellow-500 focus:border-yellow-500 focus:outline-none rounded-lg px-2" />
                        </div>
                        <div className="flex items-center">
                            <label className="w-1/4">Exercise Type</label>
                            <select type="text" name="exercisetype" className="border-4 border-yellow-300 flex-grow p-2 hover:border-yellow-500 focus:border-yellow-500 focus:outline-none rounded-lg px-2">
                                <option value="">Please select a exercise type</option>
                                <option value="Chest">Chest</option>
                                <option value="Back">Back</option>
                                <option value="Shoulders">Shoulders</option>
                                <option value="Arms">Arms</option>
                                <option value="Core">Core</option>
                                <option value="legs">legs</option>
                            </select>
                        </div>
                        <div className="flex items-center text-center justify-center m-4">
                            <button className="rounded-lg border-4  border-yellow-400 bg-yellow-400 p-2">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Addnewexercise;