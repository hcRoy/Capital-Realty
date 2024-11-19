import React from "react";
import image1 from "../assets/icons/construction.svg";
import image2 from "../assets/icons/happyFamily.svg";
import image3 from "../assets/icons/projects.svg";
import image4 from "../assets/icons/experience.svg";
import { Col, Row } from "antd";

const ProjectsOverview = () => {
  const projectDetails = [
    {
      image: image1,
      title: "Constructed Space",
      count: "18 Lakh+",
    },
    {
      image: image2,
      title: "Happy Families",
      count: "1500+",
    },
    {
      image: image3,
      title: "Projects",
      count: "14+",
    },
    {
      image: image4,
      title: "Experience",
      count: "15 Years+",
    },
  ];
  return (
    <div className="project-overview-container d-flex flex-column justify-content-center">
      <Row gutter={30}>
        {projectDetails?.map((data, index) => (
          <Col xs={12} sm={12} md={6} lg={6} key={index}>
            <div className="d-flex flex-column align-items-center justify-content-center">
              <img src={data?.image} alt={data?.title} width={80} height={80} />
              <span className="project-count">{data?.count}</span>
              <span className="project-title">{data?.title}</span>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ProjectsOverview;
