import { Card, Col, Row } from "antd";
import Rocket from "../assets/images/rocket.png";
import Bulb from "../assets/images/bulb.png";
import ImageStack from "./ImageStack";

const WhoAreWe = () => {
  return (
    <div>
      <Row gutter={30}>
        <Col xs={24} sm={24} md={12} lg={12}>
          {/* <div data-aos="fade-right" data-aos-duration="500"> */}
          <div>
            <div className="d-flex flex-column gap-3">
              <span className="main-header">Who Are We</span>
              <span className="secondary-header">
                Crafting Beautiful Spaces, Leading with Integrity
              </span>
              <div className="who-are-we-card">
                <div className="d-flex gap-3 align-items-center">
                  <img src={Rocket} alt="Rocket" />
                  <div className="d-flex flex-column gap-2">
                    <span className="card-header">Our Mission</span>
                    <span className="card-description">
                      To dedicate itself to create spaces that blend in with the
                      surroundings and exude vitality and aesthetic appeal,
                      making the spaces present-perfect and future-proof.
                    </span>
                  </div>
                </div>
              </div>
              <div className="who-are-we-card">
                <div className="d-flex gap-3 align-items-center">
                  <img src={Bulb} alt="Bulb" />
                  <div className="d-flex flex-column gap-2">
                    <span className="card-header">Our Vision</span>
                    <span className="card-description">
                      We strive to continuously improve our processes and adopt
                      ethical practices. We aspire to be the leader in industry
                      by offering iconic and world class properties.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Col>
        <Col xs={24} sm={24} md={12} lg={12}>
          {/* <div data-aos="fade-up" data-aos-duration="500"> */}
          <div className="who-are-we-image-stack">
            <ImageStack />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default WhoAreWe;
