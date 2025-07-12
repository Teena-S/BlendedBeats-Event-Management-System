import React, { useEffect } from "react";

const Customers = () => {
  useEffect(() => {
    $(".client_owl-carousel").owlCarousel({
      loop: true,
      margin: 20,
      dots: false,
      nav: true,
      navText: [
        '<i class="fa fa-angle-left" aria-hidden="true"></i>',
        '<i class="fa fa-angle-right" aria-hidden="true"></i>',
      ],
      autoplay: true,
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 2,
        },
        1000: {
          items: 2,
        },
      },
    });

    // Clean up the Owl Carousel instance when the component unmounts
    return () => {
      $(".client_owl-carousel").owlCarousel("destroy");
    };
  }, []);
  return (
    <div>
      <section className="client_section layout_padding">
        <div className="container">
          <div className="heading_container heading_center psudo_white_primary mb_45">
            <h2>
              What says our <span>Customers</span>
            </h2>
          </div>
          <div className="carousel-wrap">
            <div className="owl-carousel client_owl-carousel">
              <div className="item">
                <div className="box">
                  <div className="img-box">
                    <img src="images/client1.jpg" alt="" className="box-img" />
                  </div>
                  <div className="detail-box">
                    <div className="client_id">
                      <div className="client_info">
                        <h6>LusDen</h6>
                        <p>magna aliqua. Ut</p>
                      </div>
                      <i className="fa fa-quote-left" aria-hidden="true"></i>
                    </div>
                    <p>
                      BlendedBeats revolutionized our event workflow. 
                      From seamless artist registration to flawless schedule management, it's the ultimate toolkit for music organizers. 
                      An essential platform for today’s vibrant music scene!
                    </p>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="box">
                  <div className="img-box">
                    <img src="images/client2.jpg" alt="" className="box-img" />
                  </div>
                  <div className="detail-box">
                    <div className="client_id">
                      <div className="client_info">
                        <h6>Zen Court</h6>
                        <p>magna aliqua. Ut</p>
                      </div>
                      <i className="fa fa-quote-left" aria-hidden="true"></i>
                    </div>
                    <p>
                      BlendedBeats made planning our music events effortless. 
                      From setup to performance, everything just works — and the support team is always there when you need them!
                    </p>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="box">
                  <div className="img-box">
                    <img src="images/client1.jpg" alt="" className="box-img" />
                  </div>
                  <div className="detail-box">
                    <div className="client_id">
                      <div className="client_info">
                        <h6>LusDen</h6>
                        <p>magna aliqua. Ut</p>
                      </div>
                      <i className="fa fa-quote-left" aria-hidden="true"></i>
                    </div>
                    <p>
                      With BlendedBeats keeping our data secure, we can focus on what matters — the music. 
                      It’s like having a tech-savvy partner backstage!
                    </p>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="box">
                  <div className="img-box">
                    <img src="images/client2.jpg" alt="" className="box-img" />
                  </div>
                  <div className="detail-box">
                    <div className="client_id">
                      <div className="client_info">
                        <h6>Zen Court</h6>
                        <p>magna aliqua. Ut</p>
                      </div>
                      <i className="fa fa-quote-left" aria-hidden="true"></i>
                    </div>
                    <p>
                      The BlendedBeats team is awesome — quick to respond and always ready to help. 
                      Their support makes organizing music events way easier.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Customers;
