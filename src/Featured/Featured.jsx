import React, { useEffect, useState } from 'react';
import Home from '../Home/Home';
// import myImage from ''
import './Featured.css';

const Featured = () => {
    const [featuredjob, setfeaturedjob] = useState([]);

    useEffect(() => {
        fetch('featuredjob.json')
            .then(res => res.json())
            .then(data => setfeaturedjob(data));
    }, []);

    return (
        <div className='parent'>
            {featuredjob.map((job, index) => (
                <div className='semi-parent' key={index}>
                    <img className='company-image' src={job.image}></img>
                    <p className='position-text'>{job.job_position}</p>
                    <p className='company-text'>{job.company_name}</p>
                    <p>{job.job_type} - {job.job_location}</p>
                    <p>{job.salary}</p>
                </div>
            ))}
        </div>
    );
};

export default Featured;