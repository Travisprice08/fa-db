import React, { useState, useRef, useEffect, useCallback } from 'react';
import { useSpring, animated } from 'react-spring';
import styled from 'styled-components';
import { MdClose } from 'react-icons/md';
import "./machineCard.scss";
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

export const MachineCard = ({ selectedItemId, buildingData, showModal, setShowModal }) => {
    const modalRef = useRef();

    const animation = useSpring({
        config: {
            duration: 250
        },
        opacity: showModal ? 1 : 0,
        transform: showModal ? `translateY(0%)` : `translateY(-100%)`
    });

    const closeModalClicked = e => {
        setShowModal(false);
    }

    const keyPress = useCallback(
        e => {
            if (e.key === 'Escape' && showModal) {
                setShowModal(false);
                console.log('I pressed');
            }
        },
        [setShowModal, showModal]
    );

    /* this is a o(n) lookup, could potentially get expensive with large amounts of data
    ideally a o(1) lookup via a key would be better. Best if the building data came in as an object
    with the IDs as keys, instead of an array
    */
    const itemInfo = buildingData.find(item => item.id === selectedItemId);
    const {title, jobNum, partNum} = itemInfo;

    return (
        <Container>
            {showModal ? (
                < div classname='background' onClick={closeModalClicked} ref={modalRef}>
                    < div classname='animated' style={animation}>
                        < div classname='modalWrapper' showModal={showModal}>
                            < div classname='modalContent'>
                                <div className="item">
                                    <h1>{title}</h1>
                                    <p>Job Number: {jobNum}</p>
                                    <p>Part Number: {partNum}</p>
                                    {/* <p>{op}</p>
                                    <p>{qty}</p>
                                    <p>{customer}</p> */}
                                </div>
                            </div>
                            <CloseModalButton
                                aria-label='Close modal'
                                onClick={closeModalClicked}
                            />
                        </div>
                    </div>
                </div>
            ) : null}
        </Container>
    );
};