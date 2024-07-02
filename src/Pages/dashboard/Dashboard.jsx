import styles from "./dashboard.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faHome } from "@fortawesome/free-solid-svg-icons";
import NavBar from "../../components/navbar/NavBar";
import { useNavigate } from "react-router-dom";
import { Fragment } from "react";

function Dashboard() {
  const navigate = useNavigate(1);
  return (
    <Fragment>
      <NavBar />
      <div className={styles.dashboard}>
        <div className="container bg-light">
          <div className={styles.addRent}>
            <button
              className={styles.cardStyle}
              onClick={() => navigate("/dashboard/add-a-property")}
            >
              <FontAwesomeIcon icon={faHome} />
              <div>اضف عقارا</div>
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Dashboard;
