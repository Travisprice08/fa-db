import MachineList from '../machineList/MachineList';
import { MachineCard } from '../machineCard/MachineCard';
import "./machine.scss";
import { useEffect, useState } from "react";
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
    const openModal = () => {
        setShowModal(prev => !prev);
    };


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

    }, [selected])
    return (
        <Container>
            <div className="machine" id="machine">
                <h1><span>S</span>chedule</h1>
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
                <div className="container">
                    {data.map((d) => (
                        <Button onClick={openModal}>
                            <div className="item">
                                <h3>{d.title}</h3>
                                <MachineCard
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

