import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container-fluid mt-4">

      <header
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1600&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "500px",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.7)",
          }}
        ></div>

        <div
          className="container position-relative"
          style={{
            zIndex: 2,
            color: "white",
          }}
        >
          <div className="row py-lg-5">

            <div className="col-lg-8 col-md-10 mx-auto text-center">

              <h1>
                Manage Project with Ease -ProManage
              </h1>

              <p className="lead mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Modi doloremque nostrum cumque. Provident, id hic nisi
                placeat eum corporis voluptatibus?
              </p>

              <Link
                to="/register"
                className="btn btn-success me-2"
              >
                Get Strated
              </Link>

              <Link
                to="/about"
                className="btn btn-outline-light me-2"
              >
                Learn More
              </Link>

            </div>

          </div>
        </div>
      </header>

      <section className="py-5">

        <h2 className="mb-4 text-center">
          Why Choose Us?
        </h2>

        <div className="row">

          <div className="col-md-4 mb-3">
            <div className="card h-100">

              <div className="card-body text-center">

                <h5 className="card-title">
                  Quality
                </h5>

                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing
                  elit. Voluptatum, aspernatur?
                </p>

              </div>

            </div>
          </div>

          <div className="col-md-4 mb-3">
            <div className="card h-100">

              <div className="card-body text-center">

                <h5 className="card-title">
                  reliability
                </h5>

                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing
                  elit. Voluptatum, aspernatur?
                </p>

              </div>

            </div>
          </div>

          <div className="col-md-4 mb-3">
            <div className="card h-100">

              <div className="card-body text-center">

                <h5 className="card-title">
                  Support
                </h5>

                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing
                  elit. Voluptatum, aspernatur?
                </p>

              </div>

            </div>
          </div>

        </div>

      </section>

      <section className="text-center py-5 bg-success text-white rounded">

        <h2>
          Get Started Today!
        </h2>

        <p className="mb-4">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Velit, natus.
        </p>

        <Link
          to="/register"
          className="btn btn-light btn-lg"
        >
          Register Now
        </Link>

      </section>

    </div>
  );
};

export default Home;