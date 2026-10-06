import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>

      <div className="container vh-100 d-flex align-items-center justify-content-center">

        <div
          className="row w-100 shadow rounded overflow-hidden"
          style={{ maxWidth: "900px" }}
        >

          <div className="col-md-4 bg-light d-flex flex-column justify-content-center align-items-center p-4">

            <img
              src="https://media.istockphoto.com/id/1269970153/photo/authentication-password-secure-notice-login-verification-with-laptop-vector-design.webp?a=1&b=18&s=612x612&w=0&k=20&c=feitF2gDZnndF7uFCFy0vnW1HMv5fc59eBNMouHGPQU="
              alt="Secure Login"
              className="img-fluid mb-3"
              style={{ maxWidth: "200px" }}
            />

            <h5 className="fw-bold text-center">
              Secure Login
            </h5>

            <p className="text-muted text-center small">
              Lorem ipsum dolor sit amet.
            </p>

          </div>

          <div className="col-md-4 bg-white p-4">

            <h4 className="fw-bold mb-3 text-center text-success">
              Login
            </h4>

            <div className="mb-3">

              <label
                htmlFor="username"
                className="form-label fw-bold"
              >
                Username *
              </label>

              <input
                id="username"
                type="text"
                className="form-control"
                placeholder="Enter Your username"
              />

            </div>

            <div className="mb-3">

              <label
                htmlFor="password"
                className="form-label fw-bold"
              >
                Password *
              </label>

              <input
                id="password"
                type="password"
                className="form-control"
                placeholder="Enter Your password"
              />

            </div>

            <div className="mb-3 form-check">

              <input
                type="checkbox"
                className="form-check-input"
                id="remember"
              />

              <label
                htmlFor="remember"
                className="form-check-label"
              >
                Remeber me
              </label>

            </div>

            <button className="btn text-white w-100 bg-success">
              Login
            </button>

          </div>

          <div className="col-md-4 bg-light p-4 d-flex flex-column justify-content-center">

            <div className="text-center mb-3">

              <a
                href="#"
                className="text-success text-decoration-none fw-bold"
              >
                Forgot Password?
              </a>

            </div>

            <div className="text-center mb-3">

              <Link
                to="/register"
                className="text-success text-decoration-none fw-bold"
              >
                Create New Account
              </Link>

            </div>

            <div className="text-center">
              &copy; 2025 ProManage
            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Login;