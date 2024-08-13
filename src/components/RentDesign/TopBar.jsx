import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import "./rent.css";
import { useFilter } from "../../context/FilterContext";

function TopBar() {
  const { filter, setFilter } = useFilter();
  console.log(filter, setFilter);

  return (
    <div className="p-2 border ">
      <div className={`d-flex align-items-center justify-content-center gap-5`}>
        <div className="top-text">ما الذي تبحث عنه؟</div>

        <div>
          <NavLink
            className="text-decoration-none text-dark nav"
            onClick={() =>
              setFilter((prevState) => ({
                ...prevState,
                property_status: "",
                city: "",
                property_type: "",
                covering: "",
                title: "",
                price: "",
                ownership_type: "",
                plot_area: "",
                price_lt: "",
                price_gt: "",
              }))
            }
          >
            <FontAwesomeIcon icon={faHouse} color=" #198754" className="m-1" />{" "}
            كل العقارات
          </NavLink>
        </div>

        <div>
          <NavLink
            className="text-decoration-none text-dark nav"
            onClick={() =>
              setFilter((prevState) => ({
                ...prevState,
                property_status: "للبيع",
              }))
            }
          >
            <FontAwesomeIcon icon={faHouse} color=" #198754" className="m-1" />{" "}
            للبيع
          </NavLink>
        </div>

        <div>
          <NavLink
            className="text-decoration-none text-dark nav"
            onClick={() =>
              setFilter((prevState) => ({
                ...prevState,
                property_status: "للأجار",
              }))
            }
          >
            <FontAwesomeIcon icon={faHouse} color=" #198754" className="m-1" />{" "}
            للايجار
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default TopBar;
