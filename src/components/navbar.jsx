import React, { useEffect } from 'react';
import './navbar.css';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';


const Navbar = () => {
    useEffect(() => {
        const navbar = document.querySelector('.navbar');
        const handleScroll = () => {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        };
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (

        <nav className={`navbar scrolled `}>
            <NavLink to={`/`} activeclassname="active-link"><p className="logo">Presently AI</p></NavLink>
            <input type="checkbox" id="click" />
            <label htmlFor="click" className="menu-btn">
                <i className="fas fa-bars"></i>
            </label>
            <ul className="nav__links">

                <li className="nav-items"><NavLink to={`/`} activeclassname="active-link">Home</NavLink></li>
                <li className="nav-items"><NavLink to={`/support_page`} activeclassname="active-link">Support</NavLink></li>
                <li className="nav-items"><NavLink to={`/privacy_policy`} activeclassname="active-link">Privacy policy</NavLink></li>
                <li className="nav-items"><NavLink to={`/terms_and_conditions`} activeclassname="active-link">Terms and conditions</NavLink></li>
            </ul>

        </nav>

    );
}

export default Navbar;
