import React, { useState } from 'react'
import {
    Link
} from "react-router-dom";
import "./Navbar.css"
export default function Navbar() {
    const [menuVisibility, setMenuVisibility] = useState(false)
    return (
        <nav>
            <div className="nav-container">
                <h1>AA-Tek</h1>
                <button className="burger-button">
                    merhaba
                </button>
                <ul className={menuVisibility ? "nav-links show-nav" : "nav-links"}>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/profile">Profile</Link>
                    </li>
                </ul>
             
            </div>
        </nav>
    )
}
