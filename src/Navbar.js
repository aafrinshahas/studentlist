import { Link } from "react-router-dom";


function Navbar(){
    return(
        <nav className="bg-red-300 p-5 text-white text-2xl">
        <Link to="/" className='underline decoration-black pr-10'>List of Students</Link>
        {" "}
        <Link to="/favstudentlist" className='underline decoration-black '>Favourite Students</Link>
       </nav>
    )
}

export default Navbar;