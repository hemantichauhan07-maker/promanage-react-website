import React from "react";

const Services = () => {
  return (
    <div>

      <section
        className="service-hero py-5 text-center text-white position-relative"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1508385082359-f38ae991e8f2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWd8MHx8fHx8')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >

        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{
            backgroundColor: "rgba(0,0,0,0.65)",
          }}
        ></div>

        <h1
          className="fw-bold display-6 mt-5 position-relative"
          style={{ zIndex: 2 }}
        >
          OUR SERVICES
        </h1>

      </section>

      <div className="container">

        <div className="row justify-content-center g-4">

          <ServiceCard
            icon="bi-bicycle"
            title="WorkOuts"
          />

          <ServiceCard
            icon="bi-people"
            title="Community"
          />

          <ServiceCard
            icon="bi-award"
            title="Membership"
          />

          <ServiceCard
            icon="bi-calendar"
            title="Events"
          />

        </div>

      </div>

    </div>
  );
};

const ServiceCard = ({ icon, title }) => {
  return (
    <div className="col-lg-3 col-md-6">

      <div className="card border-0 shadow-lg p-4 text-center rounded-4 service-card">

        <i className={`bi ${icon} fs-1 text-success`}></i>

        <h5 className="fw-bold mt-4">
          {title}
        </h5>

        <p
          className="text-muted"
          style={{ fontSize: "14px" }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Aperiam, ea?
        </p>

        <a
          href="#"
          className="fw-bold text-success"
        >
          MORE
        </a>

      </div>

    </div>
  );
};

export default Services;