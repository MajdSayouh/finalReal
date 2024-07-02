import { Image } from "react-bootstrap";
import cardImage from "../../assets/IMG-20231031-WA0001.jpg";
import NavBar from "../../components/navbar/NavBar";
import styles from "../pages.module.css";
import Footer from "../../components/Footer/Footer";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getOneProperty } from "../../services/apiProperty";
import Loading from "../loading/Loading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faContactBook,
  faHeart,
  faPhone,
  faShare,
} from "@fortawesome/free-solid-svg-icons";
import { Col, Row } from "antd";
import "./details.css";

function Details() {
  const { slug } = useParams();
  console.log(slug);

  const propertyDetail = useQuery({
    queryKey: ["One Property", slug],
    queryFn: () => getOneProperty({ slug }),
  });
  const { isLoading, isPending, isError } = propertyDetail;
  if (isLoading || isPending) return <Loading />;
  console.log(propertyDetail.data?.data);
  const showPropertyDetail = propertyDetail.data?.data;

  return (
    <div className="w-100">
      <NavBar />
      <div className={styles.detailHero}>
        <img src={showPropertyDetail.cover_photo} className={styles.Image} />
        <div
          className={`${styles.textDetail} d-flex text-danger  justify-content-between  `}
        >
          <div className="d-flex align-items-center justify-content-between  gap-4  ">
            <Image src={cardImage} roundedCircle width={"50px"} />
            <h2>{showPropertyDetail.title}</h2>
          </div>
          <button
            className="btn"
            style={{ backgroundColor: "#9daf9c", color: "white" }}
          >
            {showPropertyDetail.phone_number} <FontAwesomeIcon icon={faPhone} />
          </button>
        </div>
      </div>
      <div className="align-items-center d-flex justify-content-center pt-2 m-2 ">
        التفاصيل
      </div>
      <hr className="m-auto border-2 w-25 p-2 " style={{ color: "#9daf9c" }} />
      <div className=" bg-light ">
        <div className="container">
          <div className="d-flex m-auto justify-content-center gap-4 pt-3">
            <button
              className="btn"
              style={{ backgroundColor: "#9daf9c", color: "white" }}
            >
              تواصل{"    "}
              <FontAwesomeIcon icon={faContactBook} className="pr-4" />
            </button>
            <button
              className="btn"
              style={{ backgroundColor: "#9daf9c", color: "white" }}
            >
              إضافة إلى المفضلة <FontAwesomeIcon icon={faHeart} />
            </button>
            <button
              className="btn"
              style={{ backgroundColor: "#9daf9c", color: "white" }}
            >
              مشاركة <FontAwesomeIcon icon={faShare} />
            </button>
          </div>
          <Row gutter={[15, 15]} className="pt-4">
            <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}>
              {" "}
              <div className="sections">
                <h6 className="pt-2">
                  <FontAwesomeIcon icon={faBars} /> الوصف العام
                </h6>
                <hr style={{ backgroundColor: "#9daf9c" }} />
                <div>
                  <p>{showPropertyDetail.description}</p>
                  <p>عدد الغرف: {showPropertyDetail.total_rooms}</p>
                </div>
              </div>
            </Col>
            <Col
              className="bg-danger"
              // className="m-2"
              xs={24}
              sm={24}
              md={24}
              lg={12}
              xl={10}
              xxl={10}
            >
              {" "}
              <div>fyhfghsnflhdjgadhkjggggggjjjjvkjhgkyugkuygkyufgl </div>
            </Col>
            <div className="col-xs-12 col-s-12  col-md-6 col-lg-6 col-xl-6  d-inline-grid gap-2">
              <div className={styles.b}>asdsd</div>
              <div className={styles.b}>chdisd</div>
              <div className={styles.b}>chdisd</div>
              <div className={styles.b}>chdisd</div>
            </div>
          </Row>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Details;
