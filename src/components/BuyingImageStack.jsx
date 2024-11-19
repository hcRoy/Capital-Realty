import { Avatar, Col, Row } from "antd";
import React from "react";
import image1 from "../assets/images/h1.jpg.png";
import image2 from "../assets/images/h2.jpg.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Customer1 from "../assets/images/Ellipse3.png";
import Customer2 from "../assets/images/Ellipse4.png";
import Customer3 from "../assets/images/Ellipse6.png";
import Customer4 from "../assets/images/Ellipse7.png";
import Customer5 from "../assets/images/Group19.png";

const BuyingImageStack = () => {
  const customerImages = [
    { image: Customer1 },
    { image: Customer2 },
    { image: Customer3 },
    { image: Customer4 },
    { image: Customer5 },
  ];
  return (
    <Row gutter={15} className="align-items-center">
      <Col
        xs={12}
        sm={12}
        md={12}
        className="second-stack-container d-flex flex-column gap-2 buying-image-container"
      >
        {/* <img src={Sample1} alt="sample1" /> */}
        <LazyLoadImage src={image1} alt="sample1" />
      </Col>
      <Col
        xs={12}
        sm={12}
        md={12}
        className="first-stack-container buying-image-second-container"
      >
        <div className="second-sample">
          {/* <img src={Sample2} alt="sample2" /> */}
          <LazyLoadImage src={image2} alt="sample2" />
        </div>
      </Col>
      <div className="agent-container">
        <div className="d-flex gap-2 image-content-container align-items-center flex-column">
          <div className="image-content-text">10+ Exclusive Agents</div>
          <Avatar.Group
            maxCount={5}
            size="large"
            maxStyle={{
              color: "#f56a00",
              backgroundColor: "#fde3cf",
            }}
          >
            {customerImages?.map((data, index) => (
              <Avatar
                src={data?.image}
                alt={`Customer${index}`}
                key={index}
                gap={0}
                // className="customer-img"
              />
            ))}
          </Avatar.Group>
        </div>
      </div>
    </Row>
  );
};

export default BuyingImageStack;
