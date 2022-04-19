import { React, useState } from 'react'
import "./machineList.scss"

export default function MachineList({ id, title, active, setSelectedBuilding }) {
    const setSelectedBuildingClicked = e => {
        setSelectedBuilding(id);
    }
    return (
        <li
            className={active ? "machineList active" : "machineList"}
            onClick={setSelectedBuildingClicked}
        >
            {title}
        </li>
    )


}
