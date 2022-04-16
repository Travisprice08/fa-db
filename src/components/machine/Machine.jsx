import MachineList from '../machineList/MachineList';
import { MachineCard } from '../machineCard/MachineCard';
import "./machine.scss";
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';
import { useEffect, useState, useRef, useCallback } from "react";
import { MdClose, MdKeyboardArrowLeft } from 'react-icons/md';
import {
    bldgOne,
    bldgThree,
    bldgFour
} from "../../data";
import { Button, Container } from 'react-bootstrap';

export default function Machine() {
    const [selectedBuilding, setSelectedBuilding] = useState("bldgOne");
    const [buildingData, setBuildingData] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [selectedItemId, setSelectedItemId] = useState(null);
    const modalRef = useRef();
    const openModal = (e) => {
        const id = e.target.id;
        setSelectedItemId(Number(id));
        setShowModal(true);
    };

    const animation = useSpring({
        config: {
            duration: 250
        },
        opacity: showModal ? 1 : 0,
        transform: showModal ? `translateY(0%)` : `translateY(-100%)`
    });

    const closeModal = e => {
        if (modalRef.current === e.target) {
            setShowModal(false);
        }
    };

    const keyPress = useCallback(
        e => {
            if (e.key === 'Escape' && showModal) {
                setShowModal(false);
                console.log('I pressed');
            }
        },
        [setShowModal, showModal]
    );

    const list = [
        {
            id: "bldgOne",
            title: "Building 1"
        },
        {
            id: "bldgThree",
            title: "Building 3"
        },
        {
            id: "bldgFour",
            title: "Building 4"
        },
    ];

    useEffect(() => {
        /*TODO: You can make this switch case even more efficient, but this is fine for now
        Thinking long term, what if you have 100 buildings? You'll have to make a new switch statement for each one!
        */
        switch (selectedBuilding) {
            case "bldgOne":
                setBuildingData(bldgOne);
                break;
            case "bldgFour":
                setBuildingData(bldgFour);
                break;
            case "bldgThree":
                setBuildingData(bldgThree);
                break;
            default:
                setBuildingData(bldgOne);
        }
        // clear out itemId so the machine card doesn't look something up that's not there when switching buildings
        setSelectedItemId(null);
    },

        [selectedBuilding]
    );

    return (
        <Container>
            <div className="machine" id="machine">
                <h1><span>S</span>chedule</h1>
                {/* This displays the building list under at the top */}
                <ul>
                    {list.map(item => (
                        <MachineList
                            title={item.title}
                            active={selectedBuilding === item.id}
                            setSelectedBuilding={setSelectedBuilding}
                            id={item.id}
                        />
                    ))}
                </ul>
                {/* This displays the individual machine cards. Clicking should open a modal with machine info */}
                <div className="container">
                    {buildingData.map((d) => (
                        <Button onClick={openModal}
                            active={selectedBuilding === d.id}
                            id={d.id}
                        >
                        {d.title}
                        </Button>
                    ))}
                </div>
            </div>
            {selectedItemId ? <MachineCard
                showModal={showModal}
                setShowModal={setShowModal} 
                buildingData={buildingData}
                selectedItemId={selectedItemId}
            /> : null}
        </Container>
    )
}