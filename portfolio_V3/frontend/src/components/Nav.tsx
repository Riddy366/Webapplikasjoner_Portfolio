import { Link } from "react-router-dom";


export default function Nav() {
    return(
        <>
        {/* Navigasjonsbar med routing */}
        <nav className="navbar">
            <ul className="nav-list">
                <li><a href="#">About me</a></li>
                <li><Link to="/experiences">Experiences</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
        </>
    )
}