// src/components/Common/Footer.js
import React from 'react';

function Footer() {
    return (
        <footer className="footer bg-light py-3">
            <div className="container text-center">
                <p className="mb-0">&copy; {new Date().getFullYear()} E-Learning Platform. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
