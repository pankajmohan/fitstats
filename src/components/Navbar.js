import { NavLink } from "react-router-dom";

function Navbar(){
    return(<div className="flex flex-row  justify-center md:justify-end items-center bg-yellow-400 m-1">
                <NavLink to={"/fitstats"}className="text-sm md:text-md  p-2 m-2 rounded  hover:bg-yellow-300 nav-bar-link hidden md:block">Home</NavLink>
                <NavLink to={"/startnewworkout"} className="text-sm md:text-md  p-2 m-2 rounded  hover:bg-yellow-300 nav-bar-link"> Add New Workout</NavLink>
                <NavLink to={"/history"}className="text-sm md:text-md  p-2 m-2 rounded  hover:bg-yellow-300 nav-bar-link">History</NavLink>
                <NavLink to={"/addexercises"} className="text-sm md:text-md  p-2 m-2 rounded  hover:bg-yellow-300 nav-bar-link hidden"> +Exercise</NavLink>
            </div>
    )
}
export default Navbar;