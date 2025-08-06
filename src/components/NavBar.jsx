import React from "react";
import './styles/NavBar.css';

const NavBar = () => {
    return (
        <nav>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#converter">Converter</a></li>
                <li><a href="#exchange">Rates</a></li>
                <li><a href="#">About</a></li>
            </ul>
        </nav>
    );
}

export default NavBar;
