import React from 'react';
import './Menubar.css'

const Menubar = ({count}) => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-2 p-2 fs-5">
                        <p>Logo</p>
                    </div>
                    <div className="col-md-10 menubar d-flex justify-content-end">
                        <li className='items me-4 p-2'>Contact</li>
                        <li className='items me-4 p-2'>Home</li>
                        <li className='items me-4 p-2'>Cart <sup>{count}</sup></li>
                        <li className='items me-4 p-2'>About</li>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Menubar;