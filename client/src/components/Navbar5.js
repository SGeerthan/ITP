import { useRef} from "react";
import "../css/nav.css";
import { Link,useNavigate  } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

function Navbar5() {
	const navRef = useRef();
	const navigate = useNavigate(); // Get history object for programmatic navigation

    const handleLogout = () => {
        // Perform logout actions here (e.g., clear session)
        // Navigate to the login page
        navigate('/stlog');
    };



	return (
		<div className="bar">
		<header>
			<h3>HOSTEL MANANGEMENT SYSTEM</h3>
			<nav ref={navRef}>
			   <Link to="/healthinfo">Add health info</Link>
               <Link to="/apgt">Create Medical profile</Link>
			   <Link to="/paymentform">Add medicalcal record</Link>
               <Link to="/gethealthinfo">Get helth infos</Link>
				
				<button className="logout-button" onClick={handleLogout}>
                    <FontAwesomeIcon icon={faSignOutAlt} />
                </button>
				
				
			</nav>
			
		</header>
		</div>
	);
}

export default Navbar5;

