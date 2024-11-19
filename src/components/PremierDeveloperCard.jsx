import { Card } from "antd";
// import Logo from "../assets/images/logo2.jpg";
import Logo2 from "../assets/images/logo.svg";

const PremierDeveloperCard = () => {
  return (
    <Card className="premier-developer-card">
      <div className="d-flex flex-column gap-1">
        <div className="logo-container">
          <img src={Logo2} alt="Logo" />
        </div>
        <span className="premier-developer-title">
          Surat’s Premier Developer
        </span>
        <span className="premier-developer-location">(Gujarat)</span>
      </div>
    </Card>
  );
};

export default PremierDeveloperCard;
