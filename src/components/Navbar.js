import { NavLink } from "react-router-dom";

function Navbar(){
    return(<div className="flex flex-row justify-end items-center bg-yellow-400 m-1">
                <NavLink className="text-xl  p-2 m-2 rounded  hover:bg-yellow-300">Home</NavLink>
                <NavLink className="text-xl  p-2 m-2 rounded  hover:bg-yellow-300">Add Workout</NavLink>
            </div>
    )
}
export default Navbar;