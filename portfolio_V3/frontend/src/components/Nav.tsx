import { Link } from "react-router-dom";


export default function Nav() {
    return(
        <>
        <nav className="navbar">
            <ul className="nav-list">
                <li><a href="#">Om meg</a></li>
                <li><Link to="/erfaringer">Erfaringer</Link></li>
                <li><Link to="/kontakt">Kontakt</Link></li>
            </ul>
        </nav>
        </>
    )
}