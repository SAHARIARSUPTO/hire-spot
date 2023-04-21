import React from 'react';
import './Job.css';

const Job = ({job}) => {
    const {categoryLogoImageLink,categoryName,jobsAvailableNumber} = job;
    return (
        <div className='card'>
            <img src={categoryLogoImageLink}></img>
           <p>Job Title: {categoryName}</p>
            <p>Vacancy: {jobsAvailableNumber}</p>
        </div>
    );
};

export default Job;