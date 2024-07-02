import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NavBar from "../../components/navbar/NavBar";

import styles from "../pages.module.css";
import Footer from "../../components/Footer/Footer";
import cardImage from "../../assets/download.jpeg";
import { faBath } from "@fortawesome/free-solid-svg-icons";
import { Button } from "react-bootstrap";
import Btn from "../../components/Button/Btn";

function Rent() {
  return (
    <div>
      <div className="">
        <div className="row ">
          <div className="col-sm-12 col-lg-9  col-md-9  ">
            <div className=" text-center">jdsj</div>
            <div className="container d-grid gap-3">
              <div className="  d-flex gap-3  ">
                <div className={`${styles.cardRent}`}>
                  <img src={cardImage} className={styles.RentImage} />
                  <div
                    className={`${styles.cardOverlay} d-flex flex-column text-white  justify-content-between`}
                  >
                    <div className={styles.cardOverlayText}>
                      <div className="p-3 d-flex align-items-end justify-content-end gap-4 fs-4">
                        <Button variant="success">
                          <FontAwesomeIcon icon={faBath} />
                        </Button>
                      </div>
                    </div>
                    <div>kn</div>
                  </div>
                  <div className="pt-2 px-3 d-flex align-items-center justify-content-between">
                    <div>
                      <FontAwesomeIcon icon={faBath} />
                      <p>2222</p>
                    </div>
                    <div>
                      🛁
                      <p>2222</p>
                    </div>
                    <div>
                      🛏
                      <p>2222</p>
                    </div>
                  </div>
                  <hr className={styles.hrLine} />
                  <div className="d-flex align-items-center justify-content-around">
                    <Button
                      variant="success"
                      size="sm"
                      className={styles.btnCard}
                      onClick={() => console.log("Success")}
                    >
                      🚽
                    </Button>

                    <Btn type="success" size="sm">
                      +
                    </Btn>
                  </div>
                </div>
                <div className={`${styles.cardRent}`}>
                  <img src={cardImage} className={styles.RentImage} />
                  <div
                    className={`${styles.cardOverlay} d-flex flex-column text-white  justify-content-between`}
                  >
                    <div className={styles.cardOverlayText}>
                      <div className="p-3 d-flex align-items-end justify-content-end gap-4 fs-4">
                        <Button variant="success">
                          <FontAwesomeIcon icon={faBath} />
                        </Button>
                      </div>
                    </div>
                    <div>kn</div>
                  </div>
                  <div className="pt-2 px-3 d-flex align-items-center justify-content-between">
                    <div>
                      <FontAwesomeIcon icon={faBath} />
                      <p>2222</p>
                    </div>
                    <div>
                      🛁
                      <p>2222</p>
                    </div>
                    <div>
                      🛏
                      <p>2222</p>
                    </div>
                  </div>
                  <hr className={styles.hrLine} />
                  <div className="d-flex align-items-center justify-content-around">
                    <Button
                      variant="success"
                      size="sm"
                      className={styles.btnCard}
                      onClick={() => console.log("Success")}
                    >
                      🚽
                    </Button>

                    <Btn type="success" size="sm">
                      +
                    </Btn>
                  </div>
                </div>
                <div className={`${styles.cardRent}`}>
                  <img src={cardImage} className={styles.RentImage} />
                  <div
                    className={`${styles.cardOverlay} d-flex flex-column text-white  justify-content-between`}
                  >
                    <div className={styles.cardOverlayText}>
                      <div className="p-3 d-flex align-items-end justify-content-end gap-4 fs-4">
                        <Button variant="success">
                          <FontAwesomeIcon icon={faBath} />
                        </Button>
                      </div>
                    </div>
                    <div>kn</div>
                  </div>
                  <div className="pt-2 px-3 d-flex align-items-center justify-content-between">
                    <div>
                      <FontAwesomeIcon icon={faBath} />
                      <p>2222</p>
                    </div>
                    <div>
                      🛁
                      <p>2222</p>
                    </div>
                    <div>
                      🛏
                      <p>2222</p>
                    </div>
                  </div>
                  <hr className={styles.hrLine} />
                  <div className="d-flex align-items-center justify-content-around">
                    <Button
                      variant="success"
                      size="sm"
                      className={styles.btnCard}
                      onClick={() => console.log("Success")}
                    >
                      🚽
                    </Button>

                    <Btn type="success" size="sm">
                      +
                    </Btn>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rent;
