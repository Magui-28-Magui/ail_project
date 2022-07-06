import React, { useState } from "react";
import Select from "react-select";
import { users } from "../pages/mock/data";
import makeAnimated from "react-select/animated";

const animatedComponents = makeAnimated();

function ModalEdit({ title, data }) {
    const [selectedOption, setSelectedOption] = useState(null);
    return (
        <div
            className="modal fade"
            id="modalEdit"
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
        >
            <div className="modal-dialog modal-lg">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title fw-bold" id="exampleModalLabel">
                            {title}
                        </h5>
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        />
                    </div>
                    <div className="modal-body">
                        <div className="row">
                            <div className="col-6">
                                <div className="mb-3">
                                    <label
                                        htmlFor="exampleFormControlInput1"
                                        className="form-label"
                                    >
                                        Type of action
                                    </label>
                                    <select className="form-select">
                                        <option>Staff Meeting</option>
                                        <option>Martech te escucha</option>
                                        <option>Recorridos de Seguridad</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="mb-3">
                                    <label
                                        htmlFor="exampleFormControlInput1"
                                        className="form-label"
                                    >
                                        Impacted Metric
                                    </label>
                                    <select className="form-select">
                                        <option defaultValue="1">Select Metric</option>
                                        <option defaultValue="2">Inventory Cost</option>
                                        <option defaultValue="3">Internal Rejections</option>
                                        <option defaultValue="4">Employee Engagement</option>
                                        <option defaultValue="5">HC Reduction</option>
                                        <option defaultValue="6">Efficiency Labor</option>
                                        <option defaultValue="7">Efficiency</option>
                                        <option defaultValue="8">Downtime</option>
                                        <option defaultValue="9">CPM NCR %</option>
                                        <option defaultValue="10">Adoptions Cycle Time</option>
                                        <option defaultValue="11">Utilization</option>
                                        <option defaultValue="12">Turnover</option>
                                        <option defaultValue="13">Scrap</option>
                                        <option defaultValue="14">Sales Growth</option>
                                        <option defaultValue="15">RM Cost vs Sales %</option>
                                        <option defaultValue="16">Output</option>
                                        <option defaultValue="17">OTD</option>
                                        <option defaultValue="18">MMW MRO Expense vs Sales %</option>
                                        <option defaultValue="19">Labor Cost</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <div className="mb-3">
                                    <label
                                        htmlFor="exampleFormControlTextarea1"
                                        className="form-label"
                                    >
                                        Issue
                                    </label>
                                    <textarea
                                        className="form-control"
                                        id="exampleFormControlTextarea1"
                                        rows="3"
                                        value={''}
                                        readOnly
                                    >
                                        {data[0].issue}
                                    </textarea>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="mb-3">
                                    <label
                                        htmlFor="exampleFormControlTextarea1"
                                        className="form-label"
                                    >
                                        Action
                                    </label>
                                    <textarea
                                        className="form-control"
                                        id="exampleFormControlTextarea1"
                                        rows="3"
                                        value={''}
                                        readOnly
                                    >
                                        {data[0].status_action}
                                    </textarea>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6">
                                <div className="mb-3">
                                    <label
                                        htmlFor="exampleFormControlInput1"
                                        className="form-label"
                                    >
                                        Responsible
                                    </label>
                                    <Select
                                        closeMenuOnSelect={false}
                                        components={animatedComponents}
                                        defaultValue={users[1]}
                                        onChange={setSelectedOption}
                                        isMulti
                                        options={users}
                                        classNamePrefix="Responsible"
                                    />
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="mb-3">
                                    <label
                                        htmlFor="exampleFormControlInput1"
                                        className="form-label"
                                    >
                                        Due Date
                                    </label>
                                    <input className="form-control" type="date" defaultValue={data[0].due_date} name="" />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6">
                                <div className="mb-3">
                                    <label
                                        htmlFor="exampleFormControlInput1"
                                        className="form-label"
                                    >
                                        Leader of project
                                    </label>
                                    <Select
                                        closeMenuOnSelect={false}
                                        components={animatedComponents}
                                        defaultValue={selectedOption}
                                        onChange={setSelectedOption}
                                        isMulti
                                        options={users}
                                        classNamePrefix="Responsible"
                                    />
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="form-check form-switch my-4">
                                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
                                        Close Forum
                                    </label>
                                    <input
                                        className="form-check-input mx-4"
                                        type="checkbox"
                                        id="flexSwitchCheckDefault"
                                        style={{ transform: "scale(1.8)" }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button
                            type="button"
                            className="btn btn-secondary"
                            data-bs-dismiss="modal"
                        >
                            Close
                        </button>
                        <button type="button" className="btn btn-primary">
                            Save changes
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ModalEdit