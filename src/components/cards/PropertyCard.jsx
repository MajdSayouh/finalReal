import { useState, useEffect } from "react";
import { Button, Carousel, message } from "antd";
import { Col, Row } from "antd";
import Cookie from "cookie-universal";
import "./cardStyle.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBath,
  faBed,
  faKitchenSet,
  faLocation,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { BASE, GET_ALL_PROPS } from "../../Auth/API";
import { useQuery } from "@tanstack/react-query";
import {
  getRentProperties,
  getSaleProperties,
} from "../../services/apiProperty";
import Loading from "../../Pages/loading/Loading";
import PropertyCardShow from "./PropertyCardShow";
import { NavLink } from "react-router-dom";

function PropertyCard({ property_status }) {
  const [rents, setRents] = useState([]);

  const token = new Cookie().get("Token");

  // const queryClient = useQueryClient();

  const rentQuery = useQuery({
    queryKey: ["Rent Properties"],
    queryFn: getRentProperties,
  });
  console.log(rentQuery);

  const saleQuery = useQuery({
    queryKey: ["Sale Properties"],
    queryFn: getSaleProperties,
  });
  console.log(saleQuery);

  ////
  console.log(rents);
  const { data, isLoading, isError, error, isSuccess, isPending } = saleQuery;
  console.log(data);
  if (isLoading || isPending) {
    return <Loading />;
  }
  if (isError) {
    message.error("Error while Fetching Data");
    throw new Error("asdasdasd");
  }
  const showSale = data.data.results.map((rent, idx) => {
    if (idx <= 2) {
      return (
        <Col xs={24} sm={24} lg={24} xl={8} xxl={8} key={idx}>
          <div className="cardRent" key={idx}>
            <img src={rent.cover_photo} className="RentImage" />
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
              <div>
                <FontAwesomeIcon icon={faBath} size="lg" color="gray" />
                <p>{rent.bathrooms}</p>
              </div>
              <div>
                <FontAwesomeIcon icon={faKitchenSet} size="lg" />
                <p>{rent.kitchens}</p>
              </div>
              <div>
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
      <Row gutter={20}>{isSuccess && showSale}</Row>
    </div>
  );
}

export default PropertyCard;
