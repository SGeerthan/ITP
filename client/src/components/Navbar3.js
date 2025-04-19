import { useRef} from "react";
import "../css/nav.css";
import { Link,useNavigate  } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

function Navbar3() {
	const navRef = useRef();
	const navigate = useNavigate(); // Get history object for programmatic navigation

    const handleLogout = () => {
        // Perform logout actions here (e.g., clear session)
        // Navigate to the login page
        navigate('/');
    };



	return (
		<div className="bar">
		<header>
			<h3>HOSTEL MANANGEMENT SYSTEM</h3>
			<nav ref={navRef}>
			    
				<Link to="/payment">Expenses</Link>
				<Link to="/payment">Update E-wallet</Link>
				<button className="logout-button" onClick={handleLogout}>
                    <FontAwesomeIcon icon={faSignOutAlt} />
                </button>
				
				
			</nav>
			
		</header>
		</div>
	);
}

export default Navbar3;
