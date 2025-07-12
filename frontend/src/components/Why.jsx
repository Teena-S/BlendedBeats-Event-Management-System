import React from "react";

const WhyUs = () => {
  return (
    <div className="container mt-4">
      <section className="why_section">
        <div className="container">
          <div className="heading_container heading_center">
            <h2>
              Why Choose Us
            </h2>
          </div>
          <div className="why_container">
            <div className="box">
              <div className="img-box">
                <img src="images/w1.png" alt="" />
              </div>
              <div className="detail-box">
                <h5>All-in-One Music Event Platform</h5>
                <p>
                  BlendedBeats covers everything — artist registration, 
                  scheduling, stage management, and more — so you can focus 
                  on delivering amazing music experiences.
                </p>
              </div>
            </div>
            <div className="box">
              <div className="img-box">
                <img src="images/w2.png" alt="" />
              </div>
              <div className="detail-box">
                <h5>Data Privacy You Can Trust</h5>
                <p>
                  BlendedBeats protects your performers' and event data 
                  with industry-standard security protocols. From registration 
                  to event day, your information stays safe, secure, and private.
                </p>
              </div>
            </div>
            <div className="box">
              <div className="img-box">
                <img src="images/w3.png" alt="" />
              </div>
              <div className="detail-box">
                <h5>Seamless Event Flow</h5>
                <p>
                  From planning to performance, BlendedBeats keeps 
                  your music events running without a hitch. Our 
                  responsive support ensures everything stays on track.
                </p>
              </div>
            </div>
            <div className="box">
              <div className="img-box">
                <img src="images/w4.png" alt="" />
              </div>
              <div className="detail-box">
                <h5>Intuitive Music Management</h5>
                <p>
                  BlendedBeats makes it easy for artists and 
                  organizers to manage events with a clean, 
                  user-friendly interface built for efficiency 
                  and ease of use.
                </p>
              </div>
            </div>
          </div>
          <div className="btn-box">
            <a href="/subscription"> Get Started </a>
          </div>
          <br></br>
        </div>
      </section>
    </div>
  );
};

export default WhyUs;
