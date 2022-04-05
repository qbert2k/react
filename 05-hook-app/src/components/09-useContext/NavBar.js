import React from 'react';
import {Link, NavLink} from 'react-router-dom';

const NavBar = () => {
    const activeClassName = 'nav-link active';
    const inactiveClassName = 'nav-link';

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand">useContext</Link>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <NavLink to="/"
                                 className={({isActive}) => isActive ? activeClassName : inactiveClassName}>
                            Home
                        </NavLink>
                        <NavLink to="/login"
                                 className={({isActive}) => isActive ? activeClassName : inactiveClassName}>
                            Login
                        </NavLink>
                        <NavLink to="/about"
                                 className={({isActive}) => isActive ? activeClassName : inactiveClassName}>
                            About
                        </NavLink>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
