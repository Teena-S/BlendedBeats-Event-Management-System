import React from "react";

const About = () => {
  return (
    <div>
      <section className="about_section layout_padding">
        <div className="container">
          <div className="heading_container heading_center" style={{ marginTop: '-70px' }}>
            <h2>
              About BlendedBeats
            </h2>
            <br></br>
            <p>
              Welcome to BlendedBeats – where organizing music events becomes effortless. Handle artist registrations, schedules, and performances through one sleek, intuitive platform. Simplicity meets rhythm.
            </p>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="img-box">
                <img src="./images/image1.jpg" alt="BlendedBeats" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="detail-box">
                <h3>We Are BlendedBeats — where music meets management.</h3>
                <p>
                  Say goodbye to chaos and hello to clarity with our all-in-one platform for managing music events. From artist lineups to show schedules, we make coordination effortless and every event unforgettable.
                </p>
                <p>
                  BlendedBeats is your trusted partner in music event innovation. With a commitment to excellence, we transform the way performances are planned, managed, and experienced.
Join the rhythm. Shape the future. We are BlendedBeats.
                </p>
                <a href="/service"> Get Started </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
