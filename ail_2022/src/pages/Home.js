import React, { useState } from "react";
import Filters from "./Filters";
import { MdCreate } from "react-icons/md";
import ModalActionForm from "../components/ModalActionForm";
import { data } from "./mock/data";
import ModalForumForm from "../components/ModalForumForm";
import { Tabs, Tab, Content } from "../assets/css/Tab";
import Actions from "./Actions";
import History from "./History";
import MyForums from "./MyForums";
import { ImTable, ImHistory } from "react-icons/im";
import { AiFillDatabase } from "react-icons/ai";

export default function Home() {
    const [active, setActive] = useState(0);

    const handleClick = e => {
        const index = parseInt(e.target.id, 0);
        if (index !== active) {
            setActive(index);
        }
    };

    return (
        <div> 
            <Filters />
            <div className="row">
                <div className="d-flex justify-content-end my-2">
                    <button
                        className="btn btn-primary mx-3"
                        data-bs-toggle="modal"
                        data-bs-target="#modalForumForm"
                    >
                        <MdCreate className="mx-2" width={10} />
                        Add Forum
                    </button>
                    <button
                        className="btn btn-success"
                        data-bs-toggle="modal"
                        data-bs-target="#modalActionForm"
                    >
                        <MdCreate className="mx-2" width={10} />
                        Add Action
                    </button>
                    <ModalActionForm title={"Add Action"} />
                    <ModalForumForm title={"Add Forum"} />
                </div>
            </div>
            <Tabs>
                <ul className="nav nav-tabs">
                    <li className="nav-item">
                        <Tab className={active === 0 ? "nav-link active text-success" : "nav-link text-secondary"} onClick={handleClick} active={active === 0} id={0} style={{ cursor: "pointer" }}><ImTable className="mx-2" />Actions</Tab>
                    </li>
                    <li className="nav-item">
                        <Tab className={active === 1 ? "nav-link active text-success" : "nav-link text-secondary"} onClick={handleClick} active={active === 1} id={1} style={{ cursor: "pointer" }}><AiFillDatabase className="mx-2" />My Forums</Tab>
                    </li>
                    <li className="nav-item">
                        <Tab className={active === 2 ? "nav-link active text-success" : "nav-link text-secondary"} onClick={handleClick} active={active === 2} id={2} style={{ cursor: "pointer" }}><ImHistory className="mx-2" />History</Tab>
                    </li>
                </ul>
            </Tabs>
            <Content active={active === 0}>
                <Actions data={data} />
            </Content>
            <Content active={active === 1}>
                <MyForums data={data} handleClick={handleClick} />
            </Content>
            <Content active={active === 2}>
                <History data={data} />
            </Content>
        </div>
    );
}
