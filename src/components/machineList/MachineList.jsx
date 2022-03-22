import { React, useState } from 'react'
import "./machineList.scss"

// export default function MachineList({ id, jobNum, partNum, active, setSelected }) {
//     return (
//         <li
//             className={active ? "machineList active" : "machineList"}
//             onClick={() => setSelected(jobNum)}
//         >
//             {partNum}
//         </li>
//     )

export default function MachineList({ id, title, active, setSelected }) {
    return (
        <li
            className={active ? "machineList active" : "machineList"}
            onClick={() => setSelected(id)}
        >
            {title}
        </li>
    )


}
