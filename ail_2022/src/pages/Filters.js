import React from 'react';

export default function Filters() {
    return (
        <div className='row mt-5 my-5'>
            <div className='col-4'>
                <div className="input-group flex-nowrap">
                    <span className="input-group-text" id="addon-wrapping">Forum</span>
                    <select className='form-select'>
                        <option value="">Select a Forum</option>
                        <option value="">Staff Meeting</option>
                        <option value="">Martech te escucha</option>
                        <option value="">Recorridos de seguridad</option>
                    </select>
                </div>
            </div>
            <div className='col-4'>
                <div className="input-group flex-nowrap">
                    <span className="input-group-text" id="addon-wrapping">Date</span>
                    <input className='form-control' type="date" name="" />
                </div>
            </div>
            <div className='col-4'>
                <div className="input-group flex-nowrap">
                    <span className="input-group-text" id="addon-wrapping">Responsible</span>
                    <select className='form-select'>
                        <option value="">Select Responsible</option>
                        <option value="">Mirna Araceli Salazar</option>
                        <option value="">Francisco Morimoto</option>
                        <option value="">Jose Luis Gomez</option>
                        <option value="">Javier Vargas</option>
                        <option value="">Juan Carlos Esquer</option>
                        <option value="">Julio Ruiz</option>
                        <option value="">Emanuel Jauregui</option>
                        <option value="">Margarita Campos</option>
                    </select>
                </div>
            </div>
        </div>
    );
}
