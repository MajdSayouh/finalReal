import { Link, useNavigate } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import logo from "../../../src/assets/IMG-20231031-WA0001.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useQuery } from "@tanstack/react-query";
import { getUserData } from "../../services/apiProperty";

const NavBar = () => {
  const logoStyle = {
    width: "50px",
    marginRight: "6px",
  };
  const navigate = useNavigate();

  const getUserDataQery = useQuery({
    queryKey: ["getUserData"],
    queryFn: getUserData,
  });

  console.log(getUserDataQery);
  const { data } = getUserDataQery;
  const userName = data?.data?.profile.full_name;
  return (
    <div
      style={{
        boxShadow:
          " rgba(0, 0, 0, 0.1) 0px 2px 4px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px",
        //   "rgba(0, 0, 0, 0.12) 0px 2px 4px, rgba(0, 0, 0, 0.12) 0px 2px 4px",
      }}
    >
      <nav className="navbar navbar-expand-lg bg-light-subtle">
        <div className="container">
          <Link to={"/"} className="navbar-brand" href="#">
            <img src={logo} style={logoStyle} className="rounded-5 mx-2" />
            <span className="fw-bold fst-italic medium">HouseTic</span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mx-4 mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link fw-bold" aria-current="page" to={"/"}>
                  الرئيسية
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fw-bold" to={"/rent"}>
                  كل العقارات
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fw-bold" to={"/about-us"}>
                  من نحن
                </Link>
              </li>
            </ul>
            <div className="d-flex align-items-center justify-content-between gap-3">
              <form className="d-flex">
                {userName === undefined ? (
                  <Link to={"/login"}>
                    <button
                      className="btn btn-success"
                      style={{ color: "white" }}
                    >
                      تسجيل الدخول
                    </button>
                  </Link>
                ) : (
                  userName && (
                    <Dropdown>
                      <Dropdown.Toggle
                        className="btn btn-success"
                        style={{
                          // border: "1px solid #9daf9c",
                          // backgroundColor: "#9daf9c",
                          color: "white",
                        }}
                        id="dropdown-basic"
                      >
                        {userName}
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item>
                          <button
                            className="btn"
                            onClick={() => navigate("/profile")}
                          >
                            الملف الشخصي
                          </button>
                        </Dropdown.Item>
                        <Dropdown.Item>
                          <button
                            className="btn"
                            onClick={() => navigate("/my-properties")}
                          >
                            عقاراتي
                          </button>
                        </Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item>
                          <button className="btn btn-success">
                            تسجيل الخروج
                          </button>
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  )
                )}
              </form>
              <Link to={"/dashboard"}>
                <button className="btn btn-success" style={{ color: "white" }}>
                  إضافة عقار <FontAwesomeIcon icon={faBars} />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
