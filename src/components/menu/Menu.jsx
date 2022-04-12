import { React, useEffect, useState } from 'react';
import {
    bldgOne,
    bldgThree,
    bldgFour
} from '../../data';
import "./menu.scss";

export default function Menu({ menuOpen, setMenuOpen }) {
    const [selected, setSelected] = useState("bldgOne");
    const [data, setData] = useState([]);

    useEffect(() => {

        switch (selected) {
            case "bldgOne":
                setData(bldgOne);
                break;
            case "bldgFour":
                setData(bldgFour);
                break;
            case "bldgThree":
                setData(bldgThree);
                break;
            default:
                setData(bldgOne);
        }

    }, [selected])

    return (
        <div>
            <div className={"menu " + (menuOpen && "active")}>
                {/*Try creating a new component for li's so only one onClick is necessary              */}
                <ul>
                    <li onClick={() => setMenuOpen(false)}>
                        <a href="#Building 1">Building 1</a>
                    </li>
                    <li onClick={() => setMenuOpen(false)}>
                        <a href="#Building 3">Building 3</a>
                    </li>
                    <li onClick={() => setMenuOpen(false)}>
                        <a href="#Building 4">Building 4</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}
