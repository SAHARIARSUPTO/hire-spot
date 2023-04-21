import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import myImage from "./Hiring-rafiki.svg";
import "./Home.css";
import Job from '../Job Catagory/Job'
import Featured from "../Featured/Featured";

const Home = () => {
  const jobCatagory = useLoaderData();

  

    
  return (
    <div>
      <div className="flex">
        <div>
          <p className="heading-primary-font">
            One Step Closer To Your <br />{" "}
            <span className="heading-primaryfont">Dream Job</span>
          </p>

          <p className="details-text">
            Explore thousands of job opportunities with all the information you
            need. Its your future. Come find it. Manage all your job application
            from start to finish.
          </p>
          <a href="" className="apply-button">
            Get Started
          </a>
        </div>
        <div>
          <img className="homepage-image" src={myImage}></img>
        </div>
      </div>
      <div>
        <p className="ctg-text">Job Category List</p>
        <p className="ctg-primaryfont">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="job-container">
      {
        jobCatagory.map(job => <Job
        key={job.id}
        job={job}
        ></Job> )
      }</div>

      <div>
        <p className="ctg-text">Featured Job</p>
        <p className="ctg-primaryfont">Explore thousands of job opportunities with all the information you need. Its your future</p>
        <div className="baba">
          <Featured></Featured>
          {/* <p>availabe: {featuredJobs.length}</p> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
