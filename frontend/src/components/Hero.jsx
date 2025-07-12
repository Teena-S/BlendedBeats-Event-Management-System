import React from "react";

const Hero = () => {
  return (
    <div>
      <div className="hero_area">
        <div className="hero_bg_box">
          <div className="bg_img_box">
            <img src="images/hero-bg.png" alt="" />
          </div>
        </div>

        {/* <!-- slider section --> */}
        <section className="slider_section">
          <div
            id="customCarousel1"
            className="carousel slide"
            data-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="container">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="detail-box" style={{ fontFamily: 'Roboto, sans-serif' }}>
                        <h1>
                          Revolutionize Your Music Events with
                          <br />
                          BlendedBeats Management System
                        </h1>
                        <p>
                          Elevate your event experience and streamline planning with BlendedBeats — a modern Music Event Management Platform designed for artists, organizers, and fans. 
                          Say goodbye to spreadsheets and scheduling chaos, and embrace a smooth, powerful tool that helps you focus on what truly matters — the music. 
                          From planning to performance, let’s create unforgettable musical moments together!
                        </p>
                        <div className="btn-box">
                          <a href="/about" className="btn1">
                            {" "}
                            Get Started{" "}
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="img-box">
                        <img src="images/slider-img.png" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Hero;
