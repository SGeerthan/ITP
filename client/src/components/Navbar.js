import { React } from "react";
import "../nav.css";
//import { Link } from 'react-router-dom'

function Navbar() {
	return (
		<div className="bar">
		<header>
			<h3>HOSTEL MANANGEMENT SYSTEM</h3>
			<nav >
			    {/* <Link to="">Home</Link>
				<Link to="">Search Student</Link>
				<Link to="">View Gatepasses</Link>
				<Link to="">View Students</Link>
                <Link to="">Payement Mangement</Link> */}
				<a href="/#">Security</a>
				<a href="/#">Health</a>
				<a href="/#">Catering</a>
				
			</nav>
			
		</header>
		</div>
	);
}

export default Navbar;