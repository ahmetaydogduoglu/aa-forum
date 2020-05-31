import React, { useState } from 'react'
import {
    Link
} from "react-router-dom";
import "./Navbar.css"
import { FaBars } from 'react-icons/fa';
export default function Navbar() {
    const [menuVisibility, setMenuVisibility] = useState(false)
    console.log(menuVisibility)
    return (
        <nav>
            <div className={menuVisibility ? "nav-container show-nav" : "nav-container"}>
                <h1><Link>AA-FORUM</Link></h1>
                <button  onClick={() => setMenuVisibility(!menuVisibility)} className="burger-button">
                    <FaBars color="#A89AB4" size={30}/>
                </button>
                <ul className={menuVisibility? "nav-links show-list":"nav-links"}>
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
