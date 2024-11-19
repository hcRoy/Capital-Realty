import { Col, Row } from "antd";
import React from "react";
import wall from "../../assets/images/wall.svg";
import plumbing from "../../assets/images/plumbing.svg";
import electrical from "../../assets/images/electrical.svg";
import door from "../../assets/images/door.svg";
import floor from "../../assets/images/floor.svg";

const Specification = () => {
  const description = [
    {
      title: "Structure",
      description:
        "Earthquake resistant BCC framed structure as per structural consultant’s design.",
      icon: wall,
    },
    {
      title: "Pluming & Sanitary Work",
      description:
        "Concealed PVC / CPVC Plumbing with branded Fittings and Fixtures.",
      icon: plumbing,
    },
    {
      title: "Electrical",
      description:
        "Each flat features branded ISI concealed Copper wiring with ELCB, along with elegant modular switches & sockets. ",
      icon: electrical,
    },
    {
      title: "Flooring & Cladding",
      description:
        "Living, kitchen & dining areas boast 32” X 32” vitrified tiles, while bedrooms feature 24” X 24” vitrified tiles. The kitchen offers a granite platform with S.S. sink and designer full-height dado tiles. Bathrooms feature premium designer tiles with a matte finish.",
      icon: floor,
    },
    {
      title: "Doors & Windows",
      description:
        "Doors: Attractive Flushed Internal Door with wooden figure Laminate Framing with Safety Lock. Windows: Anodized Heavy Aluminium Section windows with Granite Framing.",
      icon: door,
    },
    {
      title: "Wall Finish",
      description:
        "Internal walls: Mala Plaster with White Putty Finish. External walls: Double Coat Plaster with weather resistant, exterior textured paint.",
      icon: wall,
    },
  ];
  return (
    <div className="project-specification-container">
      <div className="d-flex flex-column gap-3">
        <span className="main-header">CHECKOUT OUR NEW</span>
        <span className="secondary-header">Specifications</span>
        <Row gutter={30}>
          {/* <div data-aos="fade-right" data-aos-duration="500"> */}
          {/* <ul className="list-group"> */}
          {description.map((item, index) => (
            <Col xs={24} sm={12} md={12} lg={8} key={index}>
              <div className="d-flex flex-column gap-1 secondary-container align-items-center justify-content-center">
                <div className="logo-container">
                  <img src={item.icon} alt={item.title} />
                </div>
                <span className="specification-title">{item.title}</span>
                <p className="specification-description">{item.description}</p>
              </div>
            </Col>
          ))}
          {/* </ul> */}
        </Row>
      </div>
    </div>
  );
};

export default Specification;
