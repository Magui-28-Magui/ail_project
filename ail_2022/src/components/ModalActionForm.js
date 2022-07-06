import React, { useState } from "react";
import Select from "react-select";
import { users } from "../pages/mock/data";
import makeAnimated from "react-select/animated";

const animatedComponents = makeAnimated();

export default function ModalActionForm({ title }) {
    const [selectedOption, setSelectedOption] = useState(null);
    return (
        <div
            className="modal fade"
            id="modalActionForm"
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
                                        <option value="1">Select Metric</option>
                                        <option value="2">Inventory Cost</option>
                                        <option value="3">Internal Rejections</option>
                                        <option value="4">Employee Engagement</option>
                                        <option value="5">HC Reduction</option>
                                        <option value="6">Efficiency Labor</option>
                                        <option value="7">Efficiency</option>
                                        <option value="8">Downtime</option>
                                        <option value="9">CPM NCR %</option>
                                        <option value="10">Adoptions Cycle Time</option>
                                        <option value="11">Utilization</option>
                                        <option value="12">Turnover</option>
                                        <option value="13">Scrap</option>
                                        <option value="14">Sales Growth</option>
                                        <option value="15">RM Cost vs Sales %</option>
                                        <option value="16">Output</option>
                                        <option value="17">OTD</option>
                                        <option value="18">MMW MRO Expense vs Sales %</option>
                                        <option value="19">Labor Cost</option>
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
                                        onChange={()=>{}}
                                    ></textarea>
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
                                        onChange={()=>{}}
                                    ></textarea>
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
                                        defaultValue={selectedOption}
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
                                    <input value={''} onChange={()=>{}} className="form-control" type="date" name="" />
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
