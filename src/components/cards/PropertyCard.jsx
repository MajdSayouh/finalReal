/* eslint-disable react/prop-types */
import { Button, Col, message } from "antd";
import { Row } from "antd";
import "./cardStyle.css";
import Loading from "../loading/Loading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBath,
  faBed,
  faKitchenSet,
  faLocation,
} from "@fortawesome/free-solid-svg-icons";
// import { NavLink } from "react-bootstrap";
import "./cardStyle.css";
import { NavLink } from "react-router-dom";

function PropertyCard({ rentData }) {
  const { data, isLoading, isError, error, isSuccess, isPending } = rentData;

  console.log(data);
  if (isLoading || isPending) {
    return <Loading />;
  }
  if (isError) {
    message.error(
      "لا يوجد شبكة, حاول الاتصال بالانترنت ثم قم بإعادة تحميل الصفحة"
    );
    throw new Error("asdasdasd");
  }
  const showSale = data.data.results?.map((rent, idx) => {
    if (idx <= 2) {
      return (
        <Col xs={24} sm={24} lg={24} xl={8} xxl={8} key={idx}>
          <div className="cardRent" key={idx}>
            <img src={rent.images[0]?.image} className="RentImage" />
            <div className="cardOverlay d-flex flex-column text-white  justify-content-between">
              <div className="cardOverlayText">
                <div className="p-3 d-flex align-items-end justify-content-end gap-4 fs-4">
                  <Button variant="success">
                    <FontAwesomeIcon icon={faBath} />
                  </Button>
                </div>
              </div>
              <div>
                <div className=" fw-bold fs-5 text-white cardOverlayText text-end py-3 px-4 ">
                  {rent.title}
                </div>
                <p className="  text-white cardOverlayText text-end  px-4 ">
                  <FontAwesomeIcon icon={faLocation} /> {rent.location.city},
                  {rent.location.region}
                </p>
              </div>
            </div>
            <div className="pt-2 px-3 d-flex align-items-center justify-content-between">
              <div className="d-flex flex-column justify-content-center align-items-center">
                <FontAwesomeIcon icon={faBath} size="lg" color="gray" />
                <p>{rent.bathrooms}</p>
              </div>
              <div className="d-flex flex-column justify-content-center align-items-center">
                <FontAwesomeIcon icon={faKitchenSet} size="lg" />
                <p>{rent.kitchens}</p>
              </div>
              <div className="d-flex flex-column justify-content-center align-items-center">
                <FontAwesomeIcon icon={faBed} size="lg" />
                <p>{rent.bedrooms}</p>
              </div>
            </div>
            <hr className="hrLine" />
            <div className="d-flex align-items-center justify-content-between px-4">
              <h6>السعر: {rent.price}ل.س</h6>
              <NavLink
                to={`details/${rent.slug}`}
                size="sm"
                className="btn"
                style={{ backgroundColor: "#9daf9c", color: "white" }}
                onClick={() => console.log("Success")}
              >
                تفاصيل
              </NavLink>
            </div>
          </div>
        </Col>
      );
    }
  });

  return (
    <div className="container text-center pt-5">
      <Row gutter={[20, 20]}>{isSuccess && showSale}</Row>
    </div>
  );
}

export default PropertyCard;

/*

   return (
        <Col xs={24} sm={24} lg={24} xl={8} xxl={8} key={idx}>
          <div className="cardRent" key={idx}>
            <img src={rent.images[0]?.image} className="RentImage" />
            <div className="cardOverlay d-flex flex-column text-white  justify-content-between">
              <div className="cardOverlayText">
                <div className="p-3 d-flex align-items-end justify-content-end gap-4 fs-4">
                  <Button variant="success">
                    <FontAwesomeIcon icon={faBath} />
                  </Button>
                </div>
              </div>
              <div>
                <div className=" fw-bold fs-5 text-white cardOverlayText text-end py-3 px-4 ">
                  {rent.title}
                </div>
                <p className="  text-white cardOverlayText text-end  px-4 ">
                  <FontAwesomeIcon icon={faLocation} /> {rent.location.city},
                  {rent.location.region}
                </p>
              </div>
            </div>
            <div className="pt-2 px-3 d-flex align-items-center justify-content-between">
              <div className="d-flex flex-column justify-content-center align-items-center">
                <FontAwesomeIcon icon={faBath} size="lg" color="gray" />
                <p>{rent.bathrooms}</p>
              </div>
              <div className="d-flex flex-column justify-content-center align-items-center">
                <FontAwesomeIcon icon={faKitchenSet} size="lg" />
                <p>{rent.kitchens}</p>
              </div>
              <div className="d-flex flex-column justify-content-center align-items-center">
                <FontAwesomeIcon icon={faBed} size="lg" />
                <p>{rent.bedrooms}</p>
              </div>
            </div>
            <hr className="hrLine" />
            <div className="d-flex align-items-center justify-content-between px-4">
              <h6>السعر: {rent.price}ل.س</h6>
              <NavLink
                to={`details/${rent.slug}`}
                size="sm"
                className="btn"
                style={{ backgroundColor: "#9daf9c", color: "white" }}
                onClick={() => console.log("Success")}
              >
                تفاصيل
              </NavLink>
            </div>
          </div>
        </Col>
      );

*/
