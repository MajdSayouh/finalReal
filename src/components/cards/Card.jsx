/* eslint-disable react/prop-types */
import { Col } from "antd";
import {
  faBath,
  faBed,
  faDollar,
  faKitchenSet,
  faLocation,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
function Card({ rentData }) {
  return (
    <Col xs={24} sm={24} lg={24} xl={8} xxl={8}>
      <div className="cardRent">
        <img src={rentData.images[0]?.image} className="RentImage" />
        <div className="cardOverlay d-flex flex-column text-white  justify-content-between">
          <div className="cardOverlayText">
            <div className="p-2 d-flex align-items-end justify-content-end gap-4 fs-6">
              <Button
                // style={{
                //   color: "white",
                //   border: "#9daf9c",
                // }}
                className="btn btn-success"
              >
                <span>
                  {rentData.price} <FontAwesomeIcon icon={faDollar} />
                </span>
              </Button>
            </div>
          </div>
          <div>
            <div className=" fw-bold fs-5 text-white cardOverlayText text-end py-3 px-4 ">
              {rentData.title}
            </div>
            <p className="  text-white cardOverlayText text-end  px-4 ">
              <FontAwesomeIcon icon={faLocation} />
              {rentData.location.city}
            </p>
          </div>
        </div>
        <div className="py-2 px-3 d-flex align-items-center justify-content-between">
          <div className="d-flex flex-column justify-content-center align-items-center">
            <FontAwesomeIcon icon={faBath} size="lg" color="gray" />
            <p>{rentData.bathrooms}</p>
          </div>
          <div className="d-flex flex-column justify-content-center align-items-center">
            <FontAwesomeIcon icon={faKitchenSet} size="lg" />
            <p>{rentData.kitchens}</p>
          </div>
          <div className="d-flex flex-column justify-content-center align-items-center">
            <FontAwesomeIcon icon={faBed} size="lg" />
            <p>{rentData.bedrooms}</p>
          </div>
        </div>
        <hr className="hrLine" />
        <div className="d-flex align-items-center justify-content-between px-4">
          <h6>السعر: {rentData.price}ل.س</h6>
          <NavLink
            to={`/details/${rentData.slug}`}
            size="sm"
            className="btn btn-success"
            style={{ color: "white" }}
          >
            تفاصيل
          </NavLink>
        </div>
      </div>
    </Col>
  );
}

export default Card;
