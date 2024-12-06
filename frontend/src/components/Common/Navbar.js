// src/components/Common/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import AuthService from '../../services/AuthService';

function Navbar() {
    const currentUser = AuthService.getCurrentUser(); // Get the current user from localStorage

    const handleLogout = () => {
        AuthService.logout(); // Logout the user
        window.location.reload(); // Reload the page to reflect changes
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <Link className="navbar-brand" to="/">E-Learning</Link>
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav ml-auto">
                    {!currentUser ? (
                        <>
                            <li className="nav-item">
                                <Link className="nav-link" to="/login">Login</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/register">Register</Link>
                            </li>
                        </>
                    ) : (
                        <>
                            <li className="nav-item">
                                <Link className="nav-link" to="/profile">Profile</Link>
                            </li>
                            <li className="nav-item">
                                <button className="nav-link btn btn-link" onClick={handleLogout}>
                                    Logout
                                </button>
                            </li>
                        </>
                    )}
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
