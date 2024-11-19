import { Col, Row } from "antd";
import FrontElevation from "../assets/images/front_elevation.jpg";
import ModernVilla from "../assets/icons/ModernVilla";
import SecurePayment from "../assets/icons/SecurePayment";
import PremierDeveloperCard from "./PremierDeveloperCard";

const AboutUs = () => {
  return (
    <Row gutter={45} className="about-us">
      <Col xs={24} md={24} lg={8}>
        <div className="about-us-image-container position-relative">
          {/* <img src={FrontElevation} alt="Front Elevation" /> */}
          <PremierDeveloperCard />
        </div>
      </Col>
      <Col xs={24} md={24} lg={16}>
        {/* <div data-aos="fade-up" data-aos-duration="500"> */}
        <div>
          <div className="d-flex flex-column gap-3">
            <span className="main-header">ABOUT US</span>
            <span className="secondary-header">
              We're on a Mission to Change View of RealEstate Field.
            </span>
            <div className="d-flex flex-column">
              <p className="about-us-description">
                With over 30 years of experience, we craft exceptional
                residential projects. Led by visionaries, we aim to innovate and
                excel in property development across Surat and beyond.
              </p>
              <p className="about-us-description">
                At Capital Realty, we believe that every stone laid is a step
                towards building a strong foundation. Our team of visionary
                leaders ensures that each project reflects our commitment to
                impeccable perfection and innovation.
              </p>
              {/* <div className="d-flex gap-2 modern-villa-container">
                <div className="d-flex flex-column gap-2">
                  <ModernVilla />
                  <span className="card-header">Modern Villa</span>
                  <span className="about-us-description">
                    When unknown printer took galley of type and scrambled.
                  </span>
                </div>
                <div className="d-flex flex-column gap-2">
                  <SecurePayment />
                  <span className="card-header">Secure Payment</span>
                  <span className="about-us-description">
                    When unknown printer took galley of type and scrambled.
                  </span>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default AboutUs;
