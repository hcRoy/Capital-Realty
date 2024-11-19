import { Button, Col, Row } from "antd";
import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { FaCircleCheck } from "react-icons/fa6";
import { FiDownload } from "react-icons/fi";
import Latest3 from "../../assets/images/latest3.jpg";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Luxury = () => {
  const description = [
    "Residential 3BHK High Rise Building",
    "Two Building with 4 Units On each floor with a total of 100 Flats in Campus",
    "Basement, Ground + 14 floors & Terrace Floor",
  ];
  return (
    <div className="right-buying-container luxury-image-container">
      <Row gutter={30}>
        <Col xs={24} sm={24} md={12} lg={12}>
          {/* <div data-aos="fade-right" data-aos-duration="500"> */}
          <div>
            <div className="d-flex flex-column gap-3">
              <span className="main-header">LUXURY</span>
              <span className="secondary-header">Now Affordable</span>
              <div className="tertiary-header">
                At Capital Realty, we believe that every stone laid is a step
                towards building a strong foundation. Our team of visionary
                leaders ensures that each project reflects our commitment to
                impeccable perfection and innovation.
              </div>
              <div>
                <ul className="list-group">
                  {description.map((item, index) => (
                    <li
                      key={index}
                      className="list-group-item d-flex align-items-center gap-1"
                    >
                      <FaCircleCheck size={20} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="d-flex gap-2">
                <Button type="primary" className="contact-us-button">
                  <span className="d-flex align-items-center gap-1">
                    <FaPhoneAlt size={16} />
                    Contact Us
                  </span>
                </Button>
                <Button type="default" className="brochure-button">
                  <span className="d-flex align-items-center gap-1">
                    <FiDownload size={16} />
                    Brochure
                  </span>
                </Button>
              </div>
            </div>
          </div>
        </Col>
        <Col
          xs={24}
          sm={24}
          md={12}
          lg={12}
          className="d-flex justify-content-end"
        >
          {/* <div data-aos="fade-up" data-aos-duration="500"> */}
          <div className="luxury-image">
            <LazyLoadImage alt={"The Capital"} src={Latest3} />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Luxury;
