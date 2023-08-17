import React, { useState } from 'react'
import temppng from './temp.png'

const Converter = () => {
    const [temp, setTemp] = useState('');

    const tempInput = (event) => {
        setTemp(event.target.value);

    }
    const handleClick = () => {
        let selectElement1 = document.querySelector('#select1');
        let value1 = selectElement1.value;
        let selectElement2 = document.querySelector('#select2');
        let value2 = selectElement2.value;

        if (selectElement1.value === 'nothing' || selectElement2.value === 'nothing') {
            document.getElementById('error').innerHTML = "** Please Select a Valid Temperature";
        }
        else {
            if (temp !== '') {
                document.getElementById('error').innerHTML = "";
                console.log(temp)
                let result = 0;
                if (value1 === 'celsius') {
                    if (value2 === 'celsius')
                        result = temp;
                    else if (value2 === 'fahrenheit')
                        result = temp * (9 / 5) + 32;
                    else
                        result = (temp * 1) + 273.15;
                }
                else if (value1 === 'fahrenheit') {
                    if (value2 === 'celsius')
                        result = (temp - 32) * (5 / 9);
                    else if (value2 === 'fahrenheit')
                        result = temp;
                    else
                        result = (temp - 32) * (5 / 9) + 273.15;
                }
                else {
                    if (value2 === 'celsius')
                        result = (temp * 1) - 273.15;
                    else if (value2 === 'fahrenheit')
                        result = ((temp * 1) - 273.15) * (9 / 5) + 32;
                    else
                        result = temp;
                }
                document.getElementById('disabled-input').innerHTML = result;

            }
            else
                document.getElementById('error').innerHTML = "** Please Enter a Valid Temperature";
        }
    }

    return (

        <div className="card">
            <h5 className="card-header text-center">Temperature Converter</h5>
            <div className="card-body">
                <div className="row">
                    <div className="col">
                        <div className="input-group mb-3">
                            <input type="number" className="form-control rounded" value={temp} onChange={tempInput} aria-label="Text input with dropdown button" />
                            <select defaultValue={'nothing'} className='dropdown rounded mx-2' id="select1">
                                <option value="nothing" disabled >Choose a Temperature</option>
                                <option value="celsius">Celsius</option>
                                <option value="fahrenheit">Fahrenheit</option>
                                <option value="kelvin">Kelvin</option>
                            </select>
                        </div>
                    </div>

                </div>
                <div className="row position-absolute text-center error">
                    <p id="error" style={{ color: "red" }}></p>
                </div>
                <div className="row">
                    <div className="col tempimg">
                        <img src={temppng} alt="temp" />
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col">

                        {/* <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Select Temp.</button> */}
                        {/* <ul className="dropdown-menu dropdown-menu-end">
                            <li className="dropdown-item">Celcius</li>
                            <li className="dropdown-item">Fahrenheit</li>
                            <li className="dropdown-item">Kelvin</li>
                        </ul> */}
                        <select defaultValue={'nothing'} className='dropdown rounded' id="select2">
                            <option className='bg-white' value="nothing" disabled>Choose a Temperature</option>
                            <option value="celsius">Celsius</option>
                            <option value="fahrenheit">Fahrenheit</option>
                            <option value="kelvin">Kelvin</option>
                        </select>
                    </div>
                    <div className="col">
                        <button className="btn btn-primary" onClick={handleClick}>Convert</button>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="input-group mb-2">
                            <label htmlFor="disabled-input">Result: </label>
                            {/* <input type="number" id='disabled-input' className="form-control mx-2 mb-2"  aria-label="Disabled input with dropdown button" disabled readOnly /> */}
                            <div className="mx-2 mb-2">
                                <p id='disabled-input'></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Converter