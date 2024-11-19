import React from "react";
import Latest1 from "../../assets/images/latest2.jpg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { MdOutlineArrowForward, MdOutlineBed } from "react-icons/md";
import { FaBath } from "react-icons/fa6";
import { BiArea } from "react-icons/bi";
import { Button } from "antd";
import { IoIosArrowRoundForward } from "react-icons/io";

const Thumbnail = () => {
  const description = [
    {
      title: "3 Bedrooms",
      icon: <MdOutlineBed />,
    },
    {
      title: "3 Bathrooms",
      icon: <FaBath />,
    },
    {
      title: "977/1001 Sq Ft",
      icon: <BiArea />,
    },
  ];
  return (
    <div className="position-relative">
      <div className="project-thumbnail-container">
        <LazyLoadImage alt={"The Capital"} src={Latest1} />
      </div>
      <div className="project-thumbnail-logo-container">
        <div className="d-flex flex-column gap-2">
          <div className="thumbnail-logo d-flex flex-column">
            <span className="logo-text">The Capital</span>
            <span className="logo-text-secondary">3 BHK Luxurious Living</span>
          </div>
          <div className="thumbnail-description">
            {description.map((item, index) => (
              <div
                key={index}
                className="d-flex gap-1 align-items-center bhk-description"
              >
                {item.icon}
                <span>{item.title}</span>
              </div>
            ))}
            <Button type="primary" className="virtual-btn">
              <span className="d-flex align-items-center gap-1">
                Take a Virtual Tour <IoIosArrowRoundForward />
              </span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Thumbnail;
