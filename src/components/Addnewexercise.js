import Exercises from "./exercises.json";

function Addnewexercise() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-12 m-3 gap-4">
            <div className="bg-yellow-200 col-span-1 md:col-span-12 p-2 m-4 rounded-lg divide-y divide-solid divide-yellow-500">
                <h1 className="text-center p-4"> Add New Exercise</h1>
                <form>
                    <div className="px-4">
                        <div className="flex flex-col md:flex-row items-center my-4">
                            <label className="w-full md:w-1/4 mb-2 md:mb-0 flex justify-center">Exercise name</label>
                            <input type="text" name="exercisename" className="border-4 border-yellow-300 flex-grow p-2 hover:border-yellow-500 focus:border-yellow-500 focus:outline-none rounded-lg px-2" />
                        </div>
                        <div className="flex flex-col md:flex-row items-center">
                            <label className="w-full md:w-1/4 mb-2 md:mb-0 flex justify-center">Exercise Type</label>
                            <select name="exercisetype" className="border-4 border-yellow-300 flex-grow p-2 hover:border-yellow-500 focus:border-yellow-500 focus:outline-none rounded-lg px-2">
                                <option value="" className="custom-option">Please select an exercise type</option>
                                <option value="Chest" className="custom-option">Chest</option>
                                <option value="Back" className="custom-option">Back</option>
                                <option value="Shoulders" className="custom-option">Shoulders</option>
                                <option value="Arms" className="custom-option">Arms</option>
                                <option value="Core" className="custom-option">Core</option>
                                <option value="legs" className="custom-option">Legs</option>
                            </select>
                        </div>
                        <div className="flex items-center text-center justify-center m-4">
                            <button className="rounded-lg border-4 border-yellow-400 bg-yellow-400 p-2">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Addnewexercise;
