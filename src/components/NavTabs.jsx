import { NavLink } from 'react-router-dom';
import '../styles/Header.css'

const NavTabs = () => {
    return (
        <nav className="nav-bar">
            <NavLink to="/about" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                About
            </NavLink>
            <NavLink to="/portfolio" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                Portfolio
            </NavLink>
            <NavLink to="/contact" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                Contact
            </NavLink>
            <NavLink to="/resume" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                Resume
            </NavLink>
        </nav>
    );
};

export default NavTabs;
