import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./footer.css";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTelegram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const footerHeigh = {
  marginTop: "-15px",
  height: "200px",
};

const listStyle = {
  listStyle: "none",
  display: "flex",
  justifyContent: "space-between",
  width: "50%",
  margin: "auto",
  paddingTop: "10%",
};
const iconStyle = {
  display: "flex",
  //   gap: "50px",
  alignItems: "center",
  justifyContent: "space-around",
  width: "50%",
  margin: "auto",
  paddingTop: "5%",
  paddingBottom: "5%",

  paddingLeft: "3%",
};

function Footer() {
  return (
    <div className="bg-light">
      <div className="container px-5">
        <div>
          <div className="  text-center d-flex justify-content-center p-5 gap-5">
            <Link className="liStyle text-decoration-none text-black">
              الرئيسية
            </Link>
            <Link className="liStyle text-decoration-none text-black">
              للبيع
            </Link>
            <Link className="liStyle text-decoration-none text-black">
              للإيجار
            </Link>
          </div>
          <div className="text-center d-flex justify-content-center gap-3">
            <FontAwesomeIcon icon={faFacebook} />
            <FontAwesomeIcon icon={faTwitter} />
            <FontAwesomeIcon icon={faLinkedin} />
            <FontAwesomeIcon icon={faInstagram} />
            <FontAwesomeIcon icon={faTelegram} />
          </div>
          <hr />
        </div>
      </div>
    </div>
  );
}

export default Footer;
