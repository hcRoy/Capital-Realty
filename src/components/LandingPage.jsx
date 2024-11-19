import HomeImage from "../assets/images/home.jpg";
import HomeImage2 from "../assets/images/home2.jpg";
import HomeImage3 from "../assets/images/home3.jpg";
import ImageContent from "./ImageContent";
import { Carousel } from "antd";
import WhoAreWe from "./WhoAreWe";
import LatestProjects from "./LatestProjects";
import { LazyLoadImage } from "react-lazy-load-image-component";
import AboutUs from "./AboutUs";
import RecentProjects from "./RecentProjects";
import ProjectsOverview from "./ProjectsOverview";
import RightBuyingSection from "./RightBuyingSection";
import Testimonials from "./Testimonials";

const LandingPage = () => {
  return (
    <>
      <div className="landing-page-container position-relative" id="home">
        <Carousel autoplay>
          {/* <div> */}
          <div className="carousel-item">
            {/* <img src={HomeImage} alt="Home" className="landing-page-img" /> */}
            <LazyLoadImage
              src={HomeImage}
              alt="Home"
              className="landing-page-img"
            />
          </div>
          <div className="carousel-item">
            {/* <img src={HomeImage2} alt="Home 2" className="landing-page-img" /> */}
            <LazyLoadImage
              src={HomeImage2}
              alt="Home 2"
              className="landing-page-img"
            />
          </div>
          <div className="carousel-item">
            {/* <img src={HomeImage3} alt="Home 3" className="landing-page-img" /> */}
            <LazyLoadImage
              src={HomeImage3}
              alt="Home 3"
              className="landing-page-img"
            />
          </div>
          {/* </div> */}
        </Carousel>
        {/* <ImageContent /> */}
      </div>
      <div className="who-are-we-container">
        <WhoAreWe />
      </div>
      <div className="who-are-we-container" id="our-projects">
        <LatestProjects />
      </div>
      <div className="who-are-we-container" id="about-us">
        <AboutUs />
      </div>
      <div className="who-are-we-container">
        <RecentProjects />
      </div>
      <div>
        <ProjectsOverview />
      </div>
      {/* <div className="who-are-we-container">
        <RightBuyingSection />
      </div> */}
      <div className="who-are-we-container" id="contact-us">
        <Testimonials />
      </div>
    </>
  );
};

export default LandingPage;
