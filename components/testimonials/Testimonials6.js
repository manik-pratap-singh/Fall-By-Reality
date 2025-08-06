"use client";
import { sliderProps } from "@/utility/sliderProps";
import Slider from "react-slick";

export const Testimonials6 = () => {
  return (
    <section
      id="testimonials"
      className="testimonials-three-area py-130 rpy-100"
    >
      <div className="container">
        <div className="row gap-80 align-items-center">
          <div className="col-xl-7 col-lg-6">
            <div className="testimonials-three-image rmb-55 wow fadeInLeft delay-0-2s">
              <img
                src="assets/images/testimonials/testimonials-three.png"
                alt="Testimonials"
              />
            </div>
          </div>
          <div className="col-xl-5 col-lg-6">
            <div className="testimonials-three-wrap wow fadeInRight delay-0-2s">
              <div className="section-title mb-45">
                <span className="sub-title mb-10">Our Testimonials</span>
                <h2>What Our Clients Say About Solutions</h2>
              </div>
              <Slider
                {...sliderProps.testimonialFiveSlider}
                className="testimonial-five-slider"
              >
                <div className="testimonial-item-four">
                  <div className="content">
                    <div className="testi-header">
                      <h4>Excellent Works</h4>
                      <div className="ratting">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star-half-alt" />
                      </div>
                    </div>
                    <div className="testi-text">
                      Reliable, responsive, and innovative—working with them has been a game changer for our business
                    </div>
                    <div className="testi-footer">
                      <div className="icon">
                        <i className="fal fa-quote-right" />
                      </div>
                      <div className="title">
                        <h4>Riya somani</h4>
                        <span className="designation">CEO &amp; Founder</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="testimonial-item-four">
                  <div className="content">
                    <div className="testi-header">
                      <h4>Excellent Works</h4>
                      <div className="ratting">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star-half-alt" />
                      </div>
                    </div>
                    <div className="testi-text">
                     Truly impressive service! The team delivered beyond expectations with flawless execution
                    </div>
                    <div className="testi-footer">
                      <div className="icon">
                        <i className="fal fa-quote-right" />
                      </div>
                      <div className="title">
                        <h4>Kartik Goenka</h4>
                        <span className="designation">Senior Manager</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
