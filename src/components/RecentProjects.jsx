import React from "react";
import image1 from "../assets/images/calisto.jpg";
import image2 from "../assets/images/capital-dreamz.jpg";
import image3 from "../assets/images/antariksh.jpg";
import image4 from "../assets/images/nexus.jpg";
import { Button, Card, Col, Divider, Row } from "antd";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { AiFillAppstore } from "react-icons/ai";
import { FaCalendar, FaLocationDot, FaRegClock } from "react-icons/fa6";
import { HiMiniBuildingOffice2 } from "react-icons/hi2";

const RecentProjects = () => {
  const dummyData = [
    {
      image: image1,
      type: "Residential",
      units: "76",
      // date: "15/01/2016",
      // builder: "Sai Infra",
      duration: "7 years ago",
      location: "Palanpore",
      name: "Sai Kruti",
    },
    {
      image: image2,
      type: "Residential/Commercial",
      units: "100",
      // date: "10/08/2014",
      // builder: "Sai Darshan Enterprise",
      duration: "10 years ago",
      location: "Palanpore",
      name: "Sai Darshan",
    },
    {
      image: image3,
      type: "Residential",
      units: "400",
      // date: "31/12/2017",
      // builder: "Janki Corporation",
      duration: "7 years ago",
      location: "Jahangirpura",
      name: "Janki Residency",
    },
    {
      image: image4,
      type: "Residential",
      units: "44",
      // date: "25/04/2012",
      // builder: "Sai Infra",
      duration: "12 years ago",
      location: "Palanpore",
      name: "Shree Ram Heights",
    },
  ];
  return (
    <div>
      <div className="d-flex flex-column gap-3 text-center">
        <span className="main-header">RECENT PROJECT HIGHLIGHTS</span>
        <span className="secondary-header">
          We Bring Dream Homes To Reality
        </span>
        <Row gutter={30}>
          {dummyData?.map((data) => (
            <Col xs={24} sm={24} md={6} lg={6} key={data?.name}>
              <Card
                hoverable
                cover={
                  // <img
                  //   alt={data?.name}
                  //   src={data?.image}
                  //   className="position-relative"
                  // />
                  <LazyLoadImage
                    alt={data?.name}
                    src={data?.image}
                    className="position-relative"
                  />
                }
                className="latest-project-card recent-project-card"
                actions={[
                  <span
                    className="d-flex w-100 align-items-center justify-content-center gap-1"
                    key={1}
                  >
                    <FaLocationDot />
                    {data?.location}
                  </span>,
                ]}
              >
                <Card.Meta
                  title={
                    <div className="d-flex flex-column">
                      {data?.name}
                      <span className="project-type">({data?.type})</span>
                    </div>
                  }
                  description={
                    // <div>
                    //   <span className="d-flex align-items-start latest-project-address justify-content-center gap-1">
                    //     <FaLocationDot />
                    //     <span>{data?.address}</span>
                    //   </span>
                    //   <div className="d-flex justify-content-between align-items-center">
                    //     <div className="d-flex align-items-center gap-1">
                    //       <FaBed />
                    //       <span>{data?.bedrooms} Bedrooms</span>
                    //     </div>
                    //     <div className="d-flex align-items-center gap-1">
                    //       <FaBath />
                    //       <span>{data?.bedrooms} Bathrooms</span>
                    //     </div>
                    //   </div>
                    //   <Button className="latest-project-explore-btn">
                    //     <span className="d-flex align-items-center">
                    //       Explore <MdOutlineArrowOutward />
                    //     </span>
                    //   </Button>
                    // </div>
                    <div>
                      <Divider className="recent-project-divider" />
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center gap-1">
                          <AiFillAppstore />
                          <span>{data?.units} unites</span>
                        </div>
                        {/* <div className="d-flex align-items-center gap-1">
                          <FaCalendar />
                          <span>{data?.date}</span>
                        </div> */}
                        <div className="d-flex align-items-center gap-1">
                          <FaRegClock />
                          <span>{data?.duration}</span>
                        </div>
                      </div>
                      {/* <Divider className="recent-project-divider" /> */}
                      {/* <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center gap-1">
                          <HiMiniBuildingOffice2 />
                          <span>{data?.builder}</span>
                        </div>
                        <div className="d-flex align-items-center gap-1">
                          <FaRegClock />
                          <span>{data?.duration}</span>
                        </div>
                      </div> */}
                      {/* <Button /> */}
                    </div>
                  }
                />
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default RecentProjects;
