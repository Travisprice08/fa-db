import React from 'react';
import "./menu.scss";

export default function Menu({ menuOpen, setMenuOpen }) {
    return (
        <div>
            <div className={"menu " + (menuOpen && "active")}>
                {/*Try creating a new component for li's so only one onClick is necessary              */}
                <ul>
                    <li onClick={() => setMenuOpen(false)}>
                        <a href="#intro">Home</a>
                    </li>
                    <li onClick={() => setMenuOpen(false)}>
                        <a href="#about">About</a>
                    </li>
                    <li onClick={() => setMenuOpen(false)}>
                        <a href="#work">Projects</a>
                    </li>
                    <li onClick={() => setMenuOpen(false)}>
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}
