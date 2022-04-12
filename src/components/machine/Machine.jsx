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
    const [selected, setSelected] = useState("bldgOne");
    const [data, setData] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const modalRef = useRef();
    const openModal = () => {
        setShowModal(prev => !prev);
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
        document.addEventListener('keydown', keyPress);
        return () => document.removeEventListener('keydown', keyPress);

    },

        [selected, keyPress]
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
                            active={selected === item.id}
                            setSelected={setSelected}
                            id={item.id}
                        />
                    ))}
                </ul>
                {/* This displays the individual machine cards. Clicking should open a modal with machine info */}
                <div className="container">
                    {data.map((d) => (
                        <Button onClick={openModal}
                            active={selected === d.id}
                            setSelected={setSelected}
                            id={d.id}
                        >
                            <div className="item">
                                <h3>{d.title}</h3>
                                <MachineCard
                                    // active={selected === d.id}
                                    // setSelected={setSelected}
                                    // id={d.id}
                                    showModal={showModal}
                                    setShowModal={setShowModal} />
                            </div>
                        </Button>
                    ))}
                </div>
            </div>
        </Container>
    )
}

