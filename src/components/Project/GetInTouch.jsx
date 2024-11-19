import { Col, Row } from "antd";
import React from "react";
import Map from "./Map";
import { PiHandWavingFill } from "react-icons/pi";
import GetInTouchForm from "./GetInTouchForm";

const GetInTouch = () => {
  return (
    <div>
      <Row gutter={30}>
        <Col xs={24} sm={24} md={12} lg={14}>
          {/* <div data-aos="fade-right" data-aos-duration="500"> */}
          <div>
            <div className="d-flex flex-column gap-3">
              <span className="main-header">Love to hear from you</span>
              <span className="secondary-header d-flex align-items-center gap-1">
                Get In Touch 👋
              </span>
              <Map />
            </div>
          </div>
        </Col>
        <Col xs={24} sm={24} md={12} lg={10}>
          <GetInTouchForm />
        </Col>
      </Row>
    </div>
  );
};

export default GetInTouch;
