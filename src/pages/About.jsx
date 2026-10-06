import React from "react";

const About = () => {
  return (
    <div className="container my-5">

      <div className="row align-items-center">

        <div className="col-md-6 d-flex justify-content-center mb-4 mb-md-0">

          <div className="blob-shape">

            <img
              src="https://plus.unsplash.com/premium_photo-1661767467261-4a4bed92a507?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YnVzaW5lc3MlMjB0ZWFtfGVufDB8fDB8fHww"
              alt="Team"
              className="img-fluid"
            />

          </div>

        </div>

        <div className="col-md-6">

          <h2>
            About Us
          </h2>

          <h5 className="fw-bold">
            who We Are
          </h5>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Magni ex optio officia quos nemo distinctio!
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Magni ex optio officia quos nemo distinctio!
          </p>

          <button className="btn btn-outline-success">
            READ MORE &rarr;
          </button>

        </div>

      </div>

      <section className="py-5">

        <h3 className="text-center fw-bold">
          Manage Project With
          <span className="text-success">
            ProManage
          </span>
        </h3>

        <p className="text-center text-secondary mb-5">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Incidunt, quae.
        </p>

        <div className="row g-4">

          <div className="col-md-6">
            <ProjectCard
              title="ProManage Essentials"
              dark={true}
            />
          </div>

          <div className="col-md-6">
            <ProjectCard
              title="Advanced Project Planning"
              dark={false}
            />
          </div>

          <div className="col-md-6">
            <ProjectCard
              title="Team collaboration Mastery"
              dark={false}
            />
          </div>

          <div className="col-md-6">
            <ProjectCard
              title="Risk Management & Reporting"
              dark={true}
            />
          </div>

        </div>

      </section>

    </div>
  );
};

const ProjectCard = ({ title, dark }) => {
  return (
    <div
      className={`p-4 rounded-4 shadow h-100 ${
        dark
          ? "bg-dark text-white"
          : "bg-white text-dark"
      }`}
    >

      <div className="d-flex justify-content-between">

        <h4 className="fw-bold">
          {title}
        </h4>

        <span className="badge bg-success m-1 mt-2">
          Weekend
        </span>

      </div>

      <p className="mt-5 mb-1">
        10th December,Saturday
      </p>

      <p className="mb-1">
        10:00 AM to 12:00 PM
      </p>

      <p className="mb-4">
        Online
      </p>

      <button className="btn btn-success px-4 rounded-pill">
        Enroll Now &rarr;
      </button>

    </div>
  );
};

export default About;