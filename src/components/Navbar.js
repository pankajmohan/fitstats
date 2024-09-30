import { NavLink } from "react-router-dom";

function Navbar(){
    return(<div className="flex flex-row justify-end items-center bg-yellow-400 m-1">
                <NavLink className="text-md  p-2 m-2 rounded  hover:bg-yellow-300">Home</NavLink>
                <NavLink to={"/startnewworkout"}className="text-md  p-2 m-2 rounded  hover:bg-yellow-300">Add New Workout</NavLink>
                <NavLink to={"/addexercises"} className="text-md  p-2 m-2 rounded  hover:bg-yellow-300">Add New Exercise</NavLink>
            </div>
    )
}
export default Navbar;