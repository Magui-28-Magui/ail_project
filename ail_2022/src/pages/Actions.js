import React from 'react'
import LongText from "../components/LongText";
import Modal from "../components/Modal";

function Actions({ data }) {
    return (
        <div className="table-responsive my-3">
            <table className="table my-2 table-bordered">
                <thead className="table-secondary text-center">
                    <tr>
                        <th scope="col">Options</th>
                        <th scope="col">Forum</th>
                        <th scope="col">Date</th>
                        <th scope="col">Impacted Metric</th>
                        <th scope="col">Issue</th>
                        <th scope="col">Action</th>
                        <th scope="col">Responsable</th>
                        <th scope="col">Due Date</th>
                        <th scope="col">Action progress</th>
                    </tr>
                </thead>
                <tbody className="text-center align-middle">
                    {data
                        ? data.map(function (element) {
                            return (
                                <tr key={element.id}>
                                    <td style={{ width: "10rem" }}>{element.forum_name}</td>
                                    <td style={{ width: "10rem" }}>{element.date}</td>
                                    <td style={{ width: "10rem" }}>Scrap</td>
                                    <td style={{ width: "50rem" }}>{element.issue}</td>
                                    <td style={{ width: "40rem" }}>{element.action}</td>
                                    <td style={{ width: "10rem" }}>{element.responsable}</td>
                                    <td style={{ width: "10rem" }}>{element.due_date}</td>
                                    <td style={{ width: "80rem" }}>
                                        <LongText content={element.status} limit={250} />
                                        <Modal title={"Action Progress"} container={element.status} />
                                    </td>
                                    <td style={{ width: "10rem" }} className={element.status_action === "Finished" ? "table-success" : "table-danger"}>
                                        {element.closed_date}
                                        <br />
                                        <h4 className="text-center">
                                            <span
                                                className={`badge rounded-pill ${element.status_action === "Finished"
                                                    ? "bg-success"
                                                    : "bg-danger"
                                                    }`}
                                            >
                                                {element.status_action}
                                            </span>
                                        </h4>
                                    </td>
                                   
                                </tr>
                            );
                        })
                        : null}
                </tbody>
            </table>
        </div>
    )
}

export default Actions;