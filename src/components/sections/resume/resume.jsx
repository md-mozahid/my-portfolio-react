const Resume = () => {
  return (
    <div className="container">
      <div className="content">
        <div className="title text-center">
          <span>7+ years of experience</span>
          <h2>My Resume</h2>
        </div>
        <div className="resume-filter">
          <button className="btn btn-resume">Education</button>
          <button className="btn btn-resume">Professional Skill</button>
          <button className="btn btn-resume">Experience</button>
          <button className="btn btn-resume">Interview</button>
        </div>
        <div className="qualifications">
          <div className="educations">
            <div className="title">
              <span>2007 - 2010</span>
              <h2>Education Qualifications</h2>
            </div>
          </div>
          <div className="jobs-exp">
            <div className="title">
              <span>2007 - 2010</span>
              <h2>Job Experience</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
