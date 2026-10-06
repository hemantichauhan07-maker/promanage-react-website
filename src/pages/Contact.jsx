import React from "react";

const Contact = () => {
  return (
    <div
      className="contact-wrapper d-flex align-items-center justify-content-center text-white text-center"
    >

      <div className="overlay"></div>

      <div className="content">

        <h1 className="fw-bold mb-2">
          Contact Us
        </h1>

        <div
          className="bg-white rounded-pill shadow mx-auto d-flex align-items-center p-2 gap-2 form-box"
        >

          <input
            type="text"
            className="form-control rounded-pill border-0"
            placeholder="Enter Your Name"
          />

          <input
            type="email"
            className="form-control rounded-pill border-2"
            placeholder="Enter Your Email Address"
          />

          <button className="btn btn-success rounded-pill px-4 py-2 fw-bold">
            SUBMIT
          </button>

        </div>

        <div className="row g-4 mt-5">

          <div className="col-md-4 d-flex justify-content-center">

            <div
              className="p-4 text-white rounded-4 bg-success text-start"
              style={{ width: "260px" }}
            >

              <h5 className="fw-bold mb-3">
                📞 CALL US
              </h5>

              <p className="mb-1">
                1 (234) 567-891
              </p>

              <p>
                1 (234) 987-654
              </p>

            </div>

          </div>

          <div className="col-md-4 d-flex justify-content-center">

            <div
              className="p-4 text-white rounded-4 bg-success text-start"
              style={{ width: "260px" }}
            >

              <h5 className="fw-bold mb-3">
                📍 LOCATION
              </h5>

              <p className="mb-1">
                121 Rock Street, 21 Avenues.
              </p>

              <p>
                New York, NY 2103-90000
              </p>

            </div>

          </div>

          <div className="col-md-4 d-flex justify-content-center">

            <div
              className="p-4 text-white rounded-4 bg-success text-start"
              style={{ width: "260px" }}
            >

              <h5 className="fw-bold mb-3">
                ⏰ HOURS
              </h5>

              <p className="mb-1">
                MON -Fri: 11am - 8pm
              </p>

              <p>
                Sat - Sun: 6am -8pm
              </p>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Contact;