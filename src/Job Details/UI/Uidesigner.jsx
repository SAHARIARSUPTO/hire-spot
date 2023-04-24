import React from "react";
import './Uidesigner.css';
import Footer from "../../Footer/Footer";

const Uidesigner = () => {
  return (
    <div>
      <h1 className="header-font">UI/UX Designer</h1>
      <div className="ui-parent">
      <div>
      <p>
        <span className="font-bold">Job Description:</span> A UI/UX (User Interface/User Experience) designer is
        responsible for designing and creating engaging and effective interfaces
        for software and web applications. This includes designing the layout,
        visual design, and interactivity of the user interface.
      </p>
      <p>
        <span className="font-bold">Job Responsibility:</span> Collaborating with cross-functional teams: UI/UX
        designers often work closely with other teams, including product
        management, engineering, and marketing, to ensure that the user
        interface is aligned with business and technical requirements. You will
        need to be able to effectively communicate your design ideas and gather
        feedback from other team members.
      </p>

      <p>
        <span className="font-bold">Educational Requirements:</span> Bachelor degree to complete any reputational
        university.
      </p>
      <p>
        <span className="font-bold">Experiences:</span> 2-3 Years in this field.</p></div>
        <div className="detail-card">
            <p className="job-details-text">Job Details</p>
            <p>Salary: $90,000 - $120,000 (Per Month) </p>
            <p>Location: Seattle, WA</p>
            <p>Company Name: TESLA</p>
            <br></br>
            <a className="apply-now-button" href="">Apply Now</a>
        </div>
    </div>
    <Footer></Footer>
    </div>
  );
};

export default Uidesigner;
