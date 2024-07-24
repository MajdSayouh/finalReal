import NavBar from "../../components/navbar/NavBar";
import { NavLink, Outlet } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faHouse } from "@fortawesome/free-solid-svg-icons";
import Footer from "../../components/Footer/Footer";

function UserProperties() {
  return (
    <div>
      <NavBar />
      <div>
        <div
          className="d-flex m-auto justify-content-around p-3 "
          style={{
            boxShadow:
              " rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px",
          }}
        >
          <NavLink
            className="text-decoration-none text-dark nav"
            to={"/my-properties/my-added-properties"}
          >
            <FontAwesomeIcon icon={faHouse} color=" #9daf9c" className="m-1" />{" "}
            عقاراتي
          </NavLink>

          <NavLink
            className="text-decoration-none text-dark nav"
            to={"/my-properties/my-favorites"}
          >
            المفضلة {""}
            <FontAwesomeIcon icon={faHeart} color=" #9daf9c" className="m-1" />
          </NavLink>
        </div>
        <Outlet />
      </div>
      <hr className="container bg-light p-0 my-0" />

      <Footer />
    </div>
  );
}

export default UserProperties;
