import { Badge, Button, Card, Col, Row } from "antd";
import React from "react";
import Latest1 from "../assets/images/latest2.jpg";
import Latest2 from "../assets/images/latest1.jpg";
import Latest3 from "../assets/images/latest3.jpg";
import { FaBath, FaBed, FaLocationDot } from "react-icons/fa6";
import { MdOutlineArrowOutward } from "react-icons/md";
// import { LazyLoadImage } from "react-lazy-load-image-component";

const LatestProjects = () => {
  const latestProjectDetails = [
    {
      name: "Capital Nexus",
      address: "Palanpur Canal Road, School, near Seven Steps, Surat",
      image: Latest3,
      bedrooms: "01",
      bathrooms: "01",
      status: "Ongoing",
    },
    {
      name: "The Capital",
      address: "Opp. Rajhan Stadium Plaza, Palanpore, Surat",
      image: Latest1,
      bedrooms: "02",
      bathrooms: "02",
      status: "Completed",
    },
    {
      name: "Capital Calisto",
      address: "Opp. New L.P. Savani School, Palanpur, Surat",
      image: Latest2,
      bedrooms: "03",
      bathrooms: "03",
      status: "Completed",
    },
    {
      name: "Capital Dreamz",
      address:
        "Opp. Orchid Ventura, near new L.P. savani school, Palanpore, Surat",
      image: Latest3,
      bedrooms: "02",
      bathrooms: "02",
      status: "Completed",
    },
  ];
  return (
    <div>
      {/* <div data-aos="fade-up" data-aos-duration="500"> */}
      <div>
        <div className="d-flex flex-column gap-3">
          <span className="main-header">DISCOVER OUR NEW</span>
          <span className="secondary-header">Latest Property Listings</span>
          <Row gutter={30}>
            {latestProjectDetails?.map((data, index) => (
              <Col xs={24} sm={12} md={6} lg={6} key={data?.name}>
                <Card
                  hoverable
                  cover={
                    // <img
                    //   alt={data?.name}
                    //   src={data?.image}
                    //   className="position-relative"
                    // />
                    <img
                      alt={data?.name}
                      src={data?.image}
                      className="position-relative"
                    />
                  }
                  className="latest-project-card"
                >
                  <Card.Meta
                    title={data?.name}
                    description={
                      <div>
                        <span className="d-flex align-items-start latest-project-address justify-content-center gap-1">
                          <FaLocationDot />
                          <span>{data?.address}</span>
                        </span>
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="d-flex align-items-center gap-1">
                            <FaBed />
                            <span>{data?.bedrooms} Bedrooms</span>
                          </div>
                          <div className="d-flex align-items-center gap-1">
                            <FaBath />
                            <span>{data?.bedrooms} Bathrooms</span>
                          </div>
                        </div>
                        <Button className="latest-project-explore-btn">
                          <span className="d-flex align-items-center">
                            Explore <MdOutlineArrowOutward />
                          </span>
                        </Button>
                      </div>
                    }
                  />
                  <div
                    className={`latest-project-status ${
                      data?.status === "Completed" && "latest-project-completed"
                    }`}
                  >
                    {data?.status}
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </div>
  );
};

export default LatestProjects;
