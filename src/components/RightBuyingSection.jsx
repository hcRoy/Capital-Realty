import { Button, Col, Row } from "antd";
import React from "react";
import { FaCircleCheck } from "react-icons/fa6";
import { LuMoveUpRight } from "react-icons/lu";
import BuyingImageStack from "./BuyingImageStack";

const RightBuyingSection = () => {
  const description = [
    "Find excellent deals",
    "Friendly host & Fast support",
    "List your own property",
  ];
  return (
    <div className="right-buying-container">
      <Row gutter={30} className="position-relative">
        <Col xs={24} sm={24} md={10} lg={10}>
          {/* <div data-aos="fade-right" data-aos-duration="500"> */}
          <div>
            <div className="d-flex flex-column gap-3">
              <span className="main-header"></span>
              <span className="secondary-header">
                Let’s Find The Right Buying Option For You
              </span>
              <div className="tertiary-header">
                As the complexity of buildings to increase, the field of
                architecture.
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
              <Button type="default" className="contact-us-btn">
                Contact Us <LuMoveUpRight size={18} />
              </Button>
            </div>
          </div>
        </Col>
        <Col xs={24} sm={24} md={14} lg={14}>
          {/* <div data-aos="fade-up" data-aos-duration="500"> */}
          <div>
            <BuyingImageStack />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default RightBuyingSection;
