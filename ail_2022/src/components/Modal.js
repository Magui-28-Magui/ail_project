import React, { useState } from "react";
import {AiFillEdit} from 'react-icons/ai';

export default function Modal({ title, container }) {
    const [isDisabled, setIsDisabled] = useState(true);

    const toggle = ()=>{
        setIsDisabled(!isDisabled);
    }

    return (
        <div
            className="modal fade"
            id="modal"
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
        >
            <div className="modal-dialog modal-lg modal-dialog-scrollable">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">
                            {title}
                        </h5>
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        ></button>
                    </div>
                    <div className="modal-body">
                        <div className="row">
                            <div className="col-6"></div>
                            <div className="col-6 d-flex justify-content-end mb-3"><button className="btn btn-success" onClick={toggle}><AiFillEdit className="mx-2" />Edit</button></div>
                        </div>
                        <div className="form-floating">
                            <textarea className="form-control" placeholder="Leave a comment here" disabled={isDisabled} style={{ height: '350px' }} id="floatingTextarea">
                                {container}
                            </textarea>
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
