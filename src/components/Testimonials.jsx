import { Card, Carousel, Col, Divider, Rate, Row } from "antd";
import React from "react";
import qoutes from "../assets/images/qoutes.png";
import ellipsis from "../assets/images/Ellipse 15.png";
import image1 from "../assets/images/testimonial1.png";
import image2 from "../assets/images/testimonial2.png";
import image3 from "../assets/icons/guestUser.svg";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

const Testimonials = () => {
  const testimonialData = [
    {
      image: image1,
      name: "Ankit Lalchandani",
      rating: 4,
      description:
        "Capital Realty is just not the team it's family for us, this is the most satisfactory working developer nowadays. I am really satisfed by having a home made by capital realty group. Thanks to you guys for such a wonderfull work u are giving to your customers. Hope you all grow huge & keep making homes.not the flats like others. Keep rocking team capital reality",
    },
    {
      image: image2,
      name: "Kalpesh Jasani",
      rating: 4,
      description:
        "Beautiful and luxurious flats on prime location in Surat. Beautiful ambiance and wonderful amenities. A dream residential project for Families by Capital Realty a prominent and leading group in Real Estate Developers with finest Projects in town.",
    },
    {
      image: image3,
      name: "Satish Wagh",
      rating: 4,
      description:
        "I m in real estate business last 12 years. i have seen many properties for my buying purpose when i see your project & campus can say my need for the property is now complete. the construction work of your project is really good and its definitely in my budget. i really recommended to others who is looking for a good property in very nice budget",
    },
  ];
  return (
    <div>
      <Row gutter={30}>
        <Col xs={24} sm={24} md={12} lg={12}>
          {/* <div data-aos="fade-right" data-aos-duration="500"> */}
          <div>
            <div className="d-flex flex-column gap-3">
              <span className="main-header">TESTIMONIALS</span>
              <span className="secondary-header">
                Look What Our Customers Say!
              </span>
              <span style={{ color: "#808080" }}>
                Read firsthand testimonials from satisfied clients about their
                experiences with us. Discover why our customers trust us for
                their real estate needs.
              </span>
            </div>
          </div>
        </Col>
        <Col xs={24} sm={24} md={12} lg={12}>
          {/* <div data-aos="fade-up" data-aos-duration="500"> */}
          <div>
            <Carousel
              autoplay={false}
              arrows
              dots={false}
              nextArrow={<FaAngleRight />}
              prevArrow={<FaAngleLeft />}
            >
              {testimonialData?.map((data) => (
                <div key={data?.name}>
                  <Card className="testimonial-card">
                    <Card.Meta
                      description={
                        <div className="d-flex flex-column gap-2">
                          <img
                            src={qoutes}
                            alt="quotes"
                            width={45}
                            height={30}
                          />
                          <span>{data?.description}</span>
                          <Divider style={{ margin: "10px 0" }} />
                          <div className="d-flex align-items-center justify-content-between">
                            <div className="d-flex align-items-center gap-2">
                              <img
                                src={data?.image}
                                height={50}
                                width={50}
                                alt="image1"
                              />
                              <span>{data?.name}</span>
                            </div>
                            <Rate value={data?.rating} disabled />
                          </div>
                        </div>
                      }
                    />
                  </Card>
                </div>
              ))}
            </Carousel>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Testimonials;
