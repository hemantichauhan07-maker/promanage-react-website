import React from "react";

const Register = () => {
  return (
    <div className="container py-5">

      <div className="row align-items-start mb-5">

        <div className="col-md-6">

          <h1 className="fw-bold mb-3">
            Manage Projects With Ease-
            <span className="text-success">
              ProManage
            </span>
          </h1>

          <p className="text-muted fs-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Distinctio ullam suscipit quia, corrupti dolorem vitae quas
            non itaque sint dolorum?
          </p>

          <p className="text-muted fs-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Distinctio ullam suscipit quia, corrupti dolorem vitae quas
            non itaque sint dolorum?
          </p>

          <p className="text-muted fs-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Distinctio ullam suscipit quia, corrupti dolorem vitae quas
            non itaque sint dolorum?
          </p>

          <p className="text-muted fs-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Distinctio ullam suscipit quia, corrupti dolorem vitae quas
            non itaque sint dolorum?
          </p>

          <button className="btn btn-outline-success me-3">
            Learn More
          </button>

          <button className="btn btn-success">
            Start Now
          </button>

        </div>

        <div className="col-md-6">

          <div className="card shadow-sm p-4">

            <h3 className="fw-bold mb-4 text-center">
              Register Now
            </h3>

            <form>

              <label className="form-label fw-bold">
                Full Name
              </label>

              <input
                type="text"
                className="form-control mb-4"
              />

              <label className="form-label fw-bold">
                Email
              </label>

              <input
                type="email"
                className="form-control mb-4"
              />

              <label className="form-label fw-bold">
                Phone
              </label>

              <input
                type="text"
                className="form-control mb-4"
              />

              <label className="form-label fw-bold">
                Select plan
              </label>

              <select className="form-select mb-4">
                <option>Free Plan</option>
                <option>Basic Plan</option>
                <option>Premium Plan</option>
              </select>

              <button className="btn btn-success w-100">
                Register Now
              </button>

            </form>

          </div>

        </div>

      </div>

      <div className="text-center mb-4">

        <h3 className="fw-bold mb-3">
          Unlock Your Project Power
        </h3>

        <p className="text-muted fs-6 mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Ipsam, doloremque!
        </p>

      </div>

      <div className="row g-4">

        <div className="col-lg-3 col-md-6">
          <ProjectCard
            image="https://plus.unsplash.com/premium_photo-1661767467261-4a4bed92a507?w=500&auto=format&fit=crop&q=60"
            title="smart Planing"
          />
        </div>

        <div className="col-lg-3 col-md-6">
          <ProjectCard
            image="https://plus.unsplash.com/premium_photo-1677529496297-fd0174d65941?w=500&auto=format&fit=crop&q=60"
            title="Creative Boreads"
          />
        </div>

        <div className="col-lg-3 col-md-6">
          <ProjectCard
            image="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=500&q=60"
            title="Collaboration"
          />
        </div>

        <div className="col-lg-3 col-md-6">
          <ProjectCard
            image="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=500&q=80"
            title="AI Support"
          />
        </div>

      </div>

    </div>
  );
};

const ProjectCard = ({ image, title }) => {
  return (
    <div className="card h-100 shadow-sm p-2 register-card">

      <img
        src={image}
        alt={title}
        className="card-img-top"
      />

      <div className="card-body">

        <h6 className="fw-bold mb-1">
          {title}
        </h6>

        <p className="text-muted small mb-0">
          Lorem ipsum dolor sit amet.
        </p>

      </div>

    </div>
  );
};

export default Register;