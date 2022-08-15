import React from 'react';
import './Country.css'

const Country = (props) => {
    const {area, population, region, name, flags, cca3, startOfWeek, languages} = props.country;
    console.log(props.country);
    return (
        <div className='country bg-warning'>
            <div className='mb-3'>
                <h4><span className='textBold'>Country Name:</span> {name.common}</h4>
            </div>
            <div className='mb-3'>
                <img src={flags.png}/>
            </div>
            <div>
                <ul class="list-group">
                    <li class="list-group-item d-flex justify-content-between align-items-center">
                        Population:
                        <span class="badge bg-primary rounded-pill">{population}</span>
                    </li>
                    <li class="list-group-item d-flex justify-content-between align-items-center">
                        Region:
                        <span class="badge bg-primary rounded-pill">{region}</span>
                    </li>
                    <li class="list-group-item d-flex justify-content-between align-items-center">
                        Start of week:
                        <span class="badge bg-primary rounded-pill">{startOfWeek}</span>
                    </li>
                    <li class="list-group-item d-flex justify-content-between align-items-center">
                        Language:
                        <span class="badge bg-primary rounded-pill">{}</span>
                    </li>
                    <li class="list-group-item d-flex justify-content-between align-items-center">
                        CCA3 Key:
                        <span class="badge bg-primary rounded-pill">{cca3}</span>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Country;