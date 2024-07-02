/* eslint-disable react/prop-types */
import { Button, Col, message } from "antd";
import Loading from "../../Pages/loading/Loading";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBath,
  faBed,
  faKitchenSet,
  faLocation,
} from "@fortawesome/free-solid-svg-icons";

function PropertyCardShow({ showData }) {
  console.log(showData);
  //   const { data, isLoading, isError, error, isSuccess, isPending } = showData;
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
              <button
                size="sm"
                className="btn"
                style={{ backgroundColor: "#9daf9c", color: "white" }}
                onClick={() => console.log("Success")}
              >
                تفاصيل
              </button>
            </div>
          </div>
        </Col>
      );
    }
  });
  return showSale;
}

export default PropertyCardShow;
