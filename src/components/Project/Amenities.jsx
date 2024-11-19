import { Col, Row } from "antd";
import React from "react";
import { FaCircleCheck } from "react-icons/fa6";

const Amenities = () => {
  const description = [
    "AC Gymnasium",
    "Video Door Bell",
    "Multipurpose hall",
    "Car Parking",
    "Children Play Area",
    "Generator power backup",
    "Centralized Gas geyser",
    "Rain water harvesting system",
    "Wi-fi zone in campus",
    "1 split ac in master bedroom",
    "Lush green landscape garden",
    "internally R.C.C. trimix finish road",
    "Sitting area",
    "Jogging track",
    "Fire safety as per GDCR norms",
    "Security cabin",
  ];
  return (
    <div className="right-buying-container luxury-image-container">
      <div className="d-flex flex-column gap-3">
        <span className="main-header">CHECKOUT OUR NEW</span>
        <span className="secondary-header">Amenities</span>
        <Row gutter={30}>
          {/* <div data-aos="fade-right" data-aos-duration="500"> */}
          {/* <ul className="list-group"> */}
          {description.map((item, index) => (
            <Col xs={24} sm={12} md={8} lg={6} key={index}>
              <li
                className="list-group-item d-flex align-items-center gap-1"
                style={{ marginBottom: "20px" }}
              >
                <FaCircleCheck size={20} />
                {item}
              </li>
            </Col>
          ))}
          {/* </ul> */}
        </Row>
      </div>
    </div>
  );
};

export default Amenities;
