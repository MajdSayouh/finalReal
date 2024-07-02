import styles from "../../Pages/pages.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { faHome } from "@fortawesome/free-solid-svg-icons";

function TopBar() {
  return (
    <div className="p-3 border border-3">
      <div
        className={`${styles.hero} d-flex align-items-center justify-content-center gap-5`}
      >
        <div className={styles.T}>ما الذي تبحث عنه؟</div>

        <div>
          <Link className=" d-flex align-items-baseline gap-2">
            <FontAwesomeIcon icon={faHome} />
            <div>للبيع</div>
          </Link>
        </div>

        <div>
          <Link className="d-flex align-items-baseline gap-2 ">
            <FontAwesomeIcon icon={faHome} />
            <div>للايجار</div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default TopBar;
