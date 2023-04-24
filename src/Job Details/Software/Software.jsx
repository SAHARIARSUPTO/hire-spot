import React from "react";
import Footer from "../../Footer/Footer";
import Featured from "../../Featured/Featured";

const Software = () => {

  return (
    <div>
      <h1 className="header-font">Software Engineer</h1>
      <div className="ui-parent">
        
        <div>
          <p>
            <span className="font-bold">Job Description:</span> SpaceX is seeking a highly motivated
            software engineer to join our dynamic team. The successful candidate
            will be responsible for developing and implementing software
            solutions to meet the company's needs. This includes designing,
            coding, and testing software applications, as well as
            troubleshooting and debugging issues as they arise.
          </p>
          <p>
            <span className="font-bold">Job Responsibility:</span> The software engineer will be
            responsible for collaborating with other team members, including
            project managers, designers, and other developers, to ensure that
            software projects are completed on time and within budget. They will
            also be responsible for documenting software designs, as well as
            participating in code reviews and other quality assurance
            activities.
          </p>
          <p>
            <span className="font-bold">Educational Requirements:</span> A Bachelor's or Master's
            degree in Computer Science, Software Engineering, or a related field
            is required for this position.
          </p>
          <p>
            <span className="font-bold">Work experiences:</span> The ideal candidate should have at
            least 2-5 years of experience in software development, with a strong
            background in programming languages such as Python, Java, and/or
            C++. They should also have experience working with Agile development
            methodologies and have strong problem-solving skills.
          </p>
        </div>
        <div className="detail-card">
        <p className="job-details-text">Job Details</p>
            <p>Salary: $120,000 - $150,000 (Per Month) </p>
            <p>San Francisco, CA</p>
            <p>Company Name: SpaceX</p>
            <br></br>
            <a className="apply-now-button" href="">Apply Now</a>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );

  
};

export default Software;
