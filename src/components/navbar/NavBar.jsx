import { Link, useNavigate } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import logo from "../../../src/assets/IMG-20231031-WA0001.jpg";

import Cookie from "cookie-universal";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useQuery } from "@tanstack/react-query";
import { getUserData } from "../../services/apiProperty";

const NavBar = () => {
  //States
  // const [userName, setUserName] = useState("");

  //Get Token
  const token = new Cookie().get("Token");

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
  // console.log(data.data.profile.full_name);
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
            <img src={logo} style={logoStyle} />
            HouseTic
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
                <Link className="nav-link active" aria-current="page" to={"/"}>
                  الرئيسية
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/rent"}>
                  للبيع
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/sale"}>
                  للآجار
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-disabled="true">
                  اخبار
                </a>
              </li>
            </ul>
            <div className="d-flex align-items-center justify-content-between gap-3">
              <form className="d-flex">
                {userName === undefined ? (
                  <Link to={"/login"}>
                    <button
                      className="btn"
                      style={{ backgroundColor: "#9daf9c", color: "white" }}
                    >
                      تسجيل الدخول
                    </button>
                  </Link>
                ) : (
                  userName && (
                    <Dropdown>
                      <Dropdown.Toggle
                        style={{
                          border: "1px solid #9daf9c",
                          backgroundColor: "#9daf9c",
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
                          <button className="btn">تسجيل الخروج</button>
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  )
                )}
              </form>
              <Link to={"/dashboard"}>
                <button
                  className="btn"
                  style={{ backgroundColor: "#9daf9c", color: "white" }}
                >
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
