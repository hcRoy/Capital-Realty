import Customer1 from "../assets/images/Ellipse3.png";
import Customer2 from "../assets/images/Ellipse4.png";
import Customer3 from "../assets/images/Ellipse6.png";
import Customer4 from "../assets/images/Ellipse7.png";
import Customer5 from "../assets/images/Group19.png";
import { Avatar } from "antd";

const ImageContent = () => {
  const customerImages = [
    { image: Customer1 },
    { image: Customer2 },
    { image: Customer3 },
    { image: Customer4 },
    { image: Customer5 },
  ];
  return (
    <div className="d-flex flex-column position-absolute overlay">
      <span className="favorite-home">Find Your Favorite Home</span>
      <div className="d-flex gap-2">
        <div className="d-flex gap-2 image-content-container align-items-center">
          {/* <div className="d-flex">
            {customerImages?.map((data, index) => (
              <img
                src={data?.image}
                alt={`Customer${index}`}
                key={index}
                className="customer-img"
              />
            ))}
          </div> */}
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
          <div className="image-content-text">1000+ Happy Customers</div>
        </div>
        <div className="d-flex gap-2 image-content-container align-items-center year-avatar">
          <Avatar size="large" gap={2}>
            30+
          </Avatar>
          <div className="image-content-text">
            years Experience in Building industry
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageContent;
