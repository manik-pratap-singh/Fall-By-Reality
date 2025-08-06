"use client";
import { sliderProps } from "@/utility/sliderProps";
import Link from "next/link";
import Slider from "react-slick";

const WhatWeProvide = () => {
  return (
    <section className="what-we-provide rel z-1">
      <div className="container">
        <div className="section-title text-center mb-55 wow fadeInUp delay-0-2s">
          <span className="sub-title mb-10">What We Provides</span>
          <h2>Digital Core Services</h2>
        </div>
        <Slider
          {...sliderProps.serviceFourSlider}
          className="service-four-slider"
        >
          <div className="service-item-four wow fadeInUp delay-0-2s">
            <div className="image">
              <img
                src="\assets\images\dcs1.jpeg"
                alt="Service"
              />
              <a
                className="plus"
                href="\assets\images\dcs1.jpeg"
              >
                <i className="fal fa-plus" />
              </a>
            </div>
            <div className="content">
              <div className="top-part">
                <span className="number">01</span>
                <div className="icon">
                  <i className="flaticon-data" />
                </div>
                <h4>
                  <Link href="service-details">
                    Custom Software Development
                  </Link>
                </h4>
              </div>
              <div className="bottom-part">
                <p>We build scalable, tailor-made software that fits your unique business needs—boosting efficiency and performance</p>
                <Link href="service-details" className="read-more">
                  Read More <i className="far fa-arrow-right" />
                </Link>
              </div>
            </div>
          </div>
          <div className="service-item-four active wow fadeInUp delay-0-4s">
            <div className="image">
              <img
                src="/assets/images/dcs3.jpeg"
                alt="Service"
              />
              <a
                className="plus"
                href="/assets/images/dcs3.jpeg"
              >
                <i className="fal fa-plus" />
              </a>
            </div>
            <div className="content">
              <div className="top-part">
                <span className="number">02</span>
                <div className="icon">
                  <i className="flaticon-layers" />
                </div>
                <h4>
                  <Link href="service-details">
                    Web Design &amp; Development
                  </Link>
                </h4>
              </div>
              <div className="bottom-part">
                <p>Our team designs responsive, user-focused websites that are fast, attractive, and optimized for growth</p>
                <Link href="service-details" className="read-more">
                  Read More <i className="far fa-arrow-right" />
                </Link>
              </div>
            </div>
          </div>
          <div className="service-item-four wow fadeInUp delay-0-6s">
            <div className="image">
              <img
                src="\assets\images\dcs2.jpeg"
                alt="Service"
              />
              <a
                className="plus"
                href="\assets\images\dcs2.jpeg"
              >
                <i className="fal fa-plus" />
              </a>
            </div>
            <div className="content">
              <div className="top-part">
                <span className="number">03</span>
                <div className="icon">
                  <i className="flaticon-cyber-security-1" />
                </div>
                <h4>
                  <Link href="service-details">
                    Cyber Security and IT Management
                  </Link>
                </h4>
              </div>
              <div className="bottom-part">
                <p>Protect your digital assets with advanced cybersecurity tools and proactive IT management designed for peace of mind</p>
                <Link href="service-details" className="read-more">
                  Read More <i className="far fa-arrow-right" />
                </Link>
              </div>
            </div>
          </div>
          <div className="service-item-four wow fadeInUp delay-0-2s">
            <div className="image">
              <img
                src="\assets\images\dcs1.jpeg"
                alt="Service"
              />
              <a
                className="plus"
                href="\assets\images\dcs1.jpeg"
              >
                <i className="fal fa-plus" />
              </a>
            </div>
            <div className="content">
              <div className="top-part">
                <span className="number">01</span>
                <div className="icon">
                  <i className="flaticon-data" />
                </div>
                <h4>
                  <Link href="service-details">
                    Custom Software Development
                  </Link>
                </h4>
              </div>
              <div className="bottom-part">
                <p>From concept to launch, we craft websites that reflect your brand and engage users across all devices</p>
                <Link href="service-details" className="read-more">
                  Read More <i className="far fa-arrow-right" />
                </Link>
              </div>
            </div>
          </div>
          <div className="service-item-four active">
            <div className="image">
              <img
                src="/assets/images/dcs3.jpeg"
                alt="Service"
              />
              <a
                className="plus"
                href="/assets/images/dcs3.jpeg"
              >
                <i className="fal fa-plus" />
              </a>
            </div>
            <div className="content">
              <div className="top-part">
                <span className="number">02</span>
                <div className="icon">
                  <i className="flaticon-layers" />
                </div>
                <h4>
                  <Link href="service-details">
                    Web Design &amp; Development
                  
                  </Link>
                </h4>
              </div>
              <div className="bottom-part">
                <p>Our team designs responsive, user-focused websites that are fast, attractive, and optimized for growth</p>
                <Link href="service-details" className="read-more">
                  Read More <i className="far fa-arrow-right" />
                </Link>
              </div>
            </div>
          </div>
          <div className="service-item-four">
            <div className="image">
              <img
                src="\assets\images\dcs2.jpeg"
                alt="Service"
              />
              <a
                className="plus"
                href="\assets\images\dcs2.jpeg"
              >
                <i className="fal fa-plus" />
              </a>
            </div>
            <div className="content">
              <div className="top-part">
                <span className="number">03</span>
                <div className="icon">
                  <i className="flaticon-cyber-security-1" />
                </div>
                <h4>
                  <Link href="service-details">
                    Cyber Security and IT Management
                  </Link>
                </h4>
              </div>
              <div className="bottom-part">
                <p>Protect your digital assets with advanced cybersecurity tools and proactive IT management designed for peace of mind</p>
                <Link href="service-details" className="read-more">
                  Read More <i className="far fa-arrow-right" />
                </Link>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
};
export default WhatWeProvide;
