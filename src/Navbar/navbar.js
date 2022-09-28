import { Link } from "react-router-dom"
import './Navbar.css';
function Navbar(){
    return (
     <nav>
        <h1>VIRTUSA</h1>
        <ul>
        <li><Link to="/find">Find Bike</Link></li>
        <li><Link to="/contactus">Contactus</Link></li>
        <li><Link to="/organize"> Loan calculate </Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/signup">Sign Up</Link></li>
        </ul>
     </nav>
    )
}
export default Navbar