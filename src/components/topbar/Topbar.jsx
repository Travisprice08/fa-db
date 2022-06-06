import { React, useState } from 'react';
import './topbar.scss';
import TextField from "@mui/material/TextField";
import Machine from '../machine/Machine';
import {
    bldgOne,
    bldgThree,
    bldgFour
} from "../../data";

export default function Topbar({ menuOpen, setMenuOpen }) {
    const [inputText, setInputText] = useState("");
    let inputHandler = (e) => {
        const lowerCase = e.target.value.toLowerCase();
        setInputText(lowerCase);
    };

    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <img src="../assets/fifth.png" alt="" className='logo' />
                </div>
                <div className="itemContainer">
                    <h1>5<span>th</span> Axis</h1>
                </div>
                <div className="search">
                    {/*Add future search bar function*/}
                    {/* <TextField
                        id='search'
                        onChange={inputHandler}
                        variant='outlined'
                        fullWidth
                        label='Search'
                    /> */}
                    {/* <bldgOne input={inputText} />
                    <bldgThree input={inputText} />
                    <bldgFour input={inputText} /> */}

                </div>
                <div className="right">
                    <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
