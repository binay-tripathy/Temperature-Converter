import React from 'react'
import temppng from './temp.png'

const Converter = () => {
    return (
        <section className="vh-100">
            <div className="container py-5 h-100">

                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-md-8 col-lg-6 col-xl-5">

                        <div className="card">
                            <h5 className="card-header text-center">Temperature Converter</h5>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col">
                                        <div className="input-group mb-3">
                                            <input type="number" className="form-control" aria-label="Text input with dropdown button" />
                                            <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Select Temp.</button>
                                            <ul className="dropdown-menu dropdown-menu-end">
                                                <li className="dropdown-item">Celcius</li>
                                                <li className="dropdown-item">Fahrenheit</li>
                                                <li className="dropdown-item">Kelvin</li>
                                            </ul>

                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col tempimg">
                                        <img src={temppng} alt="temp" />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="col">

                                        <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Select Temp.</button>
                                        <ul className="dropdown-menu dropdown-menu-end">
                                            <li className="dropdown-item">Celcius</li>
                                            <li className="dropdown-item">Fahrenheit</li>
                                            <li className="dropdown-item">Kelvin</li>
                                        </ul>
                                    </div>
                                    <div className="col">

                                        <a href="/" className="btn btn-primary">Convert</a>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <div className="input-group mb-2">
                                            <label htmlFor="disabled-input">Result: </label>
                                            <input type="number" id='disabled-input' className="form-control mx-2 mb-2" aria-label="Disabled input with dropdown button" disabled readonly />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Converter