import React from "react";

const Services = () => {
  return (
    <div className="container mt-4">
      <section className="service_section">
        <div className="service_container">
          <div className="container">
            <div className="heading_container heading_center">
              <h2>
                Our Services
              </h2>
              <p>
                Dive into a seamless event management experience with our
                comprehensive services. Sign up to BlendedBeats today!
              </p>
            </div>
            <div className="row">
              <div className="col-md-4">
                <div className="box">
                  <div className="img-box">
                    <img src="images/s1.png" alt="" />
                  </div>
                  <div className="detail-box">
                    <h5>Artist Registration</h5>
                    <p>
                      Seamless registration for artists, enabling smooth scheduling and event coordination. Simplify performer management with ease.
                    </p>
                    <a href="/login"> Get Started </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="box">
                  <div className="img-box">
                    <img src="images/s2.png" alt="" />
                  </div>
                  <div className="detail-box">
                    <h5>Security</h5>
                    <p>
                      We prioritize the privacy and security of artist profiles and event information. BlendedBeats is built with industry-standard encryption and safeguards to protect your data at every step.
                    </p>
                    <a href="/login"> Get Started </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="box">
                  <div className="img-box">
                    <img src="images/s3.png" alt="" />
                  </div>
                  <div className="detail-box">
                    <h5>User-Friendly Dashboard</h5>
                    <p>
                      Stay in control with a clean, easy-to-use dashboard built for both artists and event managers. Managing music events has never been this smooth.
                    </p>
                    <a href="/login"> Get Started </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="btn-box">
              <a href="/why"> View All </a>
            </div>
            <br></br>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
