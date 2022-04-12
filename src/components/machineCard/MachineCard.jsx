import React, { useState, useRef, useEffect, useCallback } from 'react';
import { useSpring, animated } from 'react-spring';
import styled from 'styled-components';
import { MdClose } from 'react-icons/md';
import MachineList from '../machineList/MachineList';
import "./machineCard.scss";
import {
    bldgOne,
    bldgThree,
    bldgFour
} from "../../data";
import { Container } from 'react-bootstrap';

const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  color: red;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`;

export const MachineCard = ({ showModal, setShowModal }) => {
    const [selected, setSelected] = useState("bldgOne");
    const [data, setData] = useState([]);
    const modalRef = useRef();

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

    // const list = (bldgOne, bldgThree, bldgFour)

    const building = [
        {
            bldgOne
            // id: "bldgOne",
            // title: "Building 1"
        },
        {
            bldgThree
            // id: "bldgThree",
            // title: "Building 3"
        },
        {
            bldgFour
            // id: "bldgFour",
            // title: "Building 4"
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
            // default:
            //     setData(bldgOne);
        }
        document.addEventListener('keydown', keyPress);
        return () => document.removeEventListener('keydown', keyPress);
    },

        [selected, keyPress]
    );

    return (
        <Container>
            {showModal ? (
                < div classname='background' onClick={closeModal} ref={modalRef}>
                    < div classname='animated' style={animation}>
                        < div classname='modalWrapper' showModal={showModal}>
                            < div classname='modalContent'>
                                {data.map((d) => (
                                    <div className="item"
                                        active={selected === d.id}
                                        setSelected={setSelected}
                                        id={d.id}
                                    >
                                        <p>{d.jobNum}</p>
                                        <p>{d.partNum}</p>
                                        {/* <p>{d.op}</p>
                                        <p>{d.qty}</p>
                                        <p>{d.customer}</p> */}
                                    </div>
                                ))}
                            </div>
                            <CloseModalButton
                                aria-label='Close modal'
                                onClick={() => setShowModal(prev => !prev)}
                            />
                        </div>
                    </div>
                </div>
            ) : null}
        </Container>
    );
};