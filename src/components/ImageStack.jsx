import { Col, Row } from "antd";
import Sample1 from "../assets/images/sample1.jpg";
import Sample2 from "../assets/images/sample2.jpg";
import Sample3 from "../assets/images/sample3.jpg";
import { LazyLoadImage } from "react-lazy-load-image-component";

const ImageStack = () => {
  return (
    <Row gutter={15} className="align-items-center">
      <Col xs={12} sm={12} md={12} className="first-stack-container">
        {/* <img src={Sample1} alt="sample1" /> */}
        <LazyLoadImage src={Sample1} alt="sample1" />
      </Col>
      <Col
        xs={12}
        sm={12}
        md={12}
        className="second-stack-container d-flex flex-column gap-2"
      >
        <div className="second-sample">
          {/* <img src={Sample2} alt="sample2" /> */}
          <LazyLoadImage src={Sample2} alt="sample2" />
        </div>
        <div className="third-sample">
          {/* <img src={Sample3} alt="sample3" /> */}
          <LazyLoadImage src={Sample3} alt="sample3" />
        </div>
      </Col>
    </Row>
  );
};

export default ImageStack;
