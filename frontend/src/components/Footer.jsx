import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <section className="info_section layout_padding2">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-3 info_col">
              <div className="info_contact">
                <h4>Address</h4>
                <div className="contact_link_box">
                  <a href="https://www.google.com/maps/place/Hangang-daero+42-gil,+Yongsan+District,+Seoul,+South+Korea/@37.5311638,126.9715921,15z/data=!4m6!3m5!1s0x357ca21a27fb9561:0x3d443d1dc1902b9e!8m2!3d37.5306844!4d126.9702218!16s%2Fg%2F119w6q11m?entry=ttu&g_ep=EgoyMDI1MDcwOS4wIKXMDSoASAFQAw%3D%3D">
                    <i className="fa fa-map-marker" aria-hidden="true"></i>
                    <span> 42 Hangang-daero, Yongsan District, Seoul, South Korea  </span>
                  </a>
                  <a href="">
                    <i className="fa fa-phone" aria-hidden="true"></i>
                    <span>  +82 234440105  </span>
                  </a>
                  <a href="">
                    <i className="fa fa-envelope" aria-hidden="true"></i>
                    <span> blendedbeats@gmail.com </span>
                  </a>
                </div>
              </div>
              <div className="info_social">
                <a href="">
                  <i className="fa fa-facebook" aria-hidden="true"></i>
                </a>
                <a href="">
                  <i className="fa fa-twitter" aria-hidden="true"></i>
                </a>
                <a href="">
                  <i className="fa fa-linkedin" aria-hidden="true"></i>
                </a>
                <a href="">
                  <i className="fa fa-instagram" aria-hidden="true"></i>
                </a>
              </div>
            </div>

            <div className="col-md-6 col-lg-2 mx-auto info_col">
              <div className="info_link_box">
                <h4>Links</h4>
                <div className="info_links">
                  <Link to="/">Home</Link>
                  <Link to="/about">About</Link>
                  <Link to="/service">Services</Link>
                  <Link to="/why">Why Us</Link>
                  <Link to="/subscription">Subscriptions</Link>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 info_col">
              <h4>Subscribe</h4>
              <form action="#">
                <input type="text" placeholder="Enter email" />
                <button type="submit">Subscribe</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
