/* eslint-disable react/prop-types */
import { Col } from "antd";
import {
  faBath,
  faBed,
  faKitchenSet,
  faLocation,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
function Card({ data }) {
  console.log(data);
  // console.log(propData.location);
  return (
    <Col xs={24} sm={24} lg={24} xl={8} xxl={8}>
      <div className="cardRent">
        <img src={data.images[0].image} className="RentImage" />
        <div className="cardOverlay d-flex flex-column text-white  justify-content-between">
          <div className="cardOverlayText">
            <div className="p-3 d-flex align-items-end justify-content-end gap-4 fs-4">
              <Button
                style={{
                  backgroundColor: "#9daf9c",
                  color: "white",
                  border: "#9daf9c",
                }}
              >
                <FontAwesomeIcon icon={faBath} />
              </Button>
            </div>
          </div>
          <div>
            <div className=" fw-bold fs-5 text-white cardOverlayText text-end py-3 px-4 ">
              {data.title}
            </div>
            <p className="  text-white cardOverlayText text-end  px-4 ">
              <FontAwesomeIcon icon={faLocation} />
              {data.location.city}
            </p>
          </div>
        </div>
        <div className="py-2 px-3 d-flex align-items-center justify-content-between">
          <div className="d-flex flex-column justify-content-center align-items-center">
            <FontAwesomeIcon icon={faBath} size="lg" color="gray" />
            <p>{data.bathrooms}</p>
          </div>
          <div className="d-flex flex-column justify-content-center align-items-center">
            <FontAwesomeIcon icon={faKitchenSet} size="lg" />
            <p>{data.kitchens}</p>
          </div>
          <div className="d-flex flex-column justify-content-center align-items-center">
            <FontAwesomeIcon icon={faBed} size="lg" />
            <p>{data.bedrooms}</p>
          </div>
        </div>
        <hr className="hrLine" />
        <div className="d-flex align-items-center justify-content-between px-4">
          <h6>السعر: {data.price}ل.س</h6>
          <NavLink
            to={`/details/${data.slug}`}
            size="sm"
            className="btn"
            style={{ backgroundColor: "#9daf9c", color: "white" }}
          >
            تفاصيل
          </NavLink>
        </div>
      </div>
    </Col>
  );
}

export default Card;
// return (
//   <Col xs={24} sm={24} lg={24} xl={8} xxl={8}>
//     <div className="cardRent">
//       <img src={data.images[0]?.image} className="RentImage" />
//       <div className="cardOverlay d-flex flex-column text-white  justify-content-between">
//         <div className="cardOverlayText">
//           <div className="p-3 d-flex align-items-end justify-content-end gap-4 fs-4">
//             <Button
//               style={{
//                 backgroundColor: "#9daf9c",
//                 color: "white",
//                 border: "#9daf9c",
//               }}
//             >
//               <FontAwesomeIcon icon={faBath} />
//             </Button>
//           </div>
//         </div>
//         <div>
//           <div className=" fw-bold fs-5 text-white cardOverlayText text-end py-3 px-4 ">
//             {propData.title}
//           </div>
//           <p className="  text-white cardOverlayText text-end  px-4 ">
//             <FontAwesomeIcon icon={faLocation} /> {added.location.city},
//             {added.location.region}
//           </p>
//         </div>
//       </div>
//       <div className="py-2 px-3 d-flex align-items-center justify-content-between">
//         <div className="d-flex flex-column justify-content-center align-items-center">
//           <FontAwesomeIcon icon={faBath} size="lg" color="gray" />
//           <p>{added.bathrooms}</p>
//         </div>
//         <div className="d-flex flex-column justify-content-center align-items-center">
//           <FontAwesomeIcon icon={faKitchenSet} size="lg" />
//           <p>{added.kitchens}</p>
//         </div>
//         <div className="d-flex flex-column justify-content-center align-items-center">
//           <FontAwesomeIcon icon={faBed} size="lg" />
//           <p>{added.bedrooms}</p>
//         </div>
//       </div>
//       <hr className="hrLine" />
//       <div className="d-flex align-items-center justify-content-between px-4">
//         <h6>السعر: {added.price}ل.س</h6>
//         <NavLink
//           to={`/details/${added.slug}`}
//           size="sm"
//           className="btn"
//           style={{ backgroundColor: "#9daf9c", color: "white" }}
//           onClick={() => console.log("Success")}
//         >
//           تفاصيل
//         </NavLink>
//       </div>
//     </div>
//   </Col>
// );
