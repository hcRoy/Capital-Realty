import Amenities from "./Amenities";
import GetInTouch from "./GetInTouch";
import Luxury from "./Luxury";
import Specification from "./Specification";
import Thumbnail from "./Thumbnail";

const Project = () => {
  return (
    <>
      <div>
        <Thumbnail />
      </div>
      <div className="who-are-we-container">
        <Luxury />
      </div>
      <div className="who-are-we-container">
        <Amenities />
      </div>
      <div className="who-are-we-container" style={{ paddingTop: "26px" }}>
        <Specification />
      </div>
      <div className="who-are-we-container">
        <GetInTouch />
      </div>
    </>
  );
};

export default Project;
