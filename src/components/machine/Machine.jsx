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

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", "Basic MzA2MzpBbXNvaWwwNyE=");

    const requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    fetch("https://gccdtapp04.epicorsaas.com/saas1049/api/v1/BaqSvc/SET-UP_SCHEDULE(157806)", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));

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
        setSelectedItemId(null);
    },

        [selectedBuilding]
    );
    return (
        <Container>
            <div className="machine" id="machine">
                <h1><span>S</span>chedule</h1>
                <h3>*This is the demo site. Actual site has proprietary data and cannot be shared*</h3>
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

