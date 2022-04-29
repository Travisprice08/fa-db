import { React } from 'react';
import "./menu.scss";

export default function Menu({ menuOpen, setMenuOpen }) {

    return (
        <div>
            <div className={"menu " + (menuOpen && "active")}>
                <ul>
                    <li>
                        <h3>Amauri Inclan</h3>
                        <p>619-XXX-XXXX</p>
                    </li>
                    <li>
                        <h3>Joe Hans</h3>
                        <p>619-XXX-XXXX</p>
                    </li>
                    <li>
                        <h3>Noel Ascio</h3>
                        <p>619-XXX-XXXX</p>
                    </li>
                    <li>
                        <h3>Edwin Yanez</h3>
                        <p>619-XXX-XXXX</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}
