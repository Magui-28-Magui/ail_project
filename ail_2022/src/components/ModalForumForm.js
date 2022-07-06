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
      id="modalForumForm"
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
              <div className="col-12">
                <div className="mb-3">
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label"
                  >
                    Forum Name
                  </label>
                  <input className="form-control" name="title" />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label"
                  >
                    Members
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
            <div className="form-check form-switch d-flex my-4 justify-content-end">
                  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
                    Private
                  </label>
                  <input
                    className="form-check-input mx-4"
                    type="checkbox"
                    id="flexSwitchCheckDefault"
                    style={{ transform: "scale(1.8)" }}
                  />
                  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
                    Private Meetings are only visible to users with Admin Level,
                    users who have actions for these meetings
                  </label>
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
