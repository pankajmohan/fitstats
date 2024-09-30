import Exercises from "./exercises.json";
import { useNavigate } from "react-router-dom";
function Startnewworkout() {
    const navigate = useNavigate();

    function handleChosenWorkout(e){
        console.warn(e);
        
    }

    


    const keys = Object.keys(Exercises);
    return (

        <div className="grid grid-cols-12 m-3 gap-4">
        {keys.map(key => (
          <div key={key} className="col-span-12 md:col-span-4 bg-yellow-200 p-8 rounded-3xl hover:border-yellow-500 hover:bg-yellow-300 text-center m-2" onClick={()=>(handleChosenWorkout(key))}>{key}</div>
        ))}
        </div>
    )
}

export default Startnewworkout;