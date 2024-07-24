import { Carousel, Image } from "react-bootstrap";
import cardImage from "../../assets/IMG-20231031-WA0001.jpg";
import NavBar from "../../components/navbar/NavBar";
import styles from "../pages.module.css";
import Footer from "../../components/Footer/Footer";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import {
  addToFavourite,
  deletFromFavourite,
  getOneProperty,
} from "../../services/apiProperty";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faContactBook,
  faHeart,
  faHouse,
  faLocation,
  faPhone,
  faShare,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { Col, message, Row, Spin } from "antd";
import "./details.css";
import { faTypo3 } from "@fortawesome/free-brands-svg-icons";
import Loading from "../../components/loading/Loading";

function Details() {
  const { slug } = useParams();
  console.log(slug);

  // ADD TO FAVOURITE MUTATION
  const mutation = useMutation({
    mutationFn: (property_id) => {
      return addToFavourite(property_id);
    },
  });

  // DELETE TO FAVOURITE MUTATION
  const deleteMutation = useMutation({
    mutationFn: (property_id) => {
      return deletFromFavourite(property_id);
    },
  });

  // GET ONE PROPERTY QUERY
  const propertyDetail = useQuery({
    queryKey: ["One Property", slug],
    queryFn: () => getOneProperty({ slug }),
  });

  console.log(mutation);
  const {
    isPending: addPending,
    isSuccess: addSuccess,
    isError: addError,
  } = mutation;

  // if (addPending) return <Loading />;

  if (addError)
    message.error("حصل خطأ أثناء اضافة العقار, يرجى إعادة المحاولة");

  const { isLoading, isPending } = propertyDetail;

  if (isLoading || isPending) return <Loading />;
  console.log(propertyDetail.data?.data);
  const showPropertyDetail = propertyDetail.data?.data;

  return (
    <div className="w-100">
      <NavBar />
      <div className={styles.detailHero}>
        <img
          src={showPropertyDetail.images[0].image}
          className={styles.Image}
        />
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

            {showPropertyDetail.is_favorite ? (
              <button
                className="btn"
                style={{ backgroundColor: "#9daf9c", color: "white" }}
                onClick={() => {
                  deleteMutation.mutate({ id: showPropertyDetail.id });
                }}
              >
                <div>
                  <span> إزالة إلى المفضلة</span>
                  <FontAwesomeIcon icon={faHeart} style={{ color: "red" }} />
                </div>
              </button>
            ) : !showPropertyDetail.is_favorite ? (
              <button
                className="btn"
                style={{ backgroundColor: "#9daf9c", color: "white" }}
                onClick={() => {
                  mutation.mutate({ id: showPropertyDetail.id });
                }}
              >
                <div>
                  <span> إضافة إلى المفضلة</span>
                  <FontAwesomeIcon icon={faHeart} style={{ color: "gray" }} />
                </div>
              </button>
            ) : (
              <button
                className="btn"
                style={{ backgroundColor: "#9daf9c", color: "white" }}
                onClick={() => {
                  mutation.mutate({ id: showPropertyDetail.id });
                }}
              >
                <div>
                  <span> إضافة إلى المفضلة</span>
                  <FontAwesomeIcon icon={faHeart} style={{ color: "gray" }} />
                </div>
              </button>
            )}

            <button
              className="btn"
              style={{ backgroundColor: "#9daf9c", color: "white" }}
            >
              مشاركة <FontAwesomeIcon icon={faShare} />
            </button>
          </div>
          <Row gutter={[15, 15]} className="pt-4">
            <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}>
              <div className="sections">
                <h6 className="pt-2">
                  <FontAwesomeIcon icon={faBars} color="orange" /> الوصف العام
                </h6>
                <hr style={{ backgroundColor: "#9daf9c" }} />
                <div>
                  <p>{showPropertyDetail.description}</p>
                  <p> {showPropertyDetail.total_rooms} غرفة </p>
                  <p>عدد المطابخ: {showPropertyDetail.kitchens}</p>
                  <p>غرف النوم : {showPropertyDetail.bedrooms}</p>
                  <p>الحمامات : {showPropertyDetail.bathrooms}</p>

                  <p> المساحة : {showPropertyDetail.plot_area} متر مربع</p>
                  <p> السعر : {showPropertyDetail.price} ليرة سورية</p>
                </div>
              </div>{" "}
              <div className="sections mt-3">
                <h6 className="pt-2">
                  <FontAwesomeIcon icon={faTypo3} /> نوع وملكية العقار
                </h6>
                <hr style={{ backgroundColor: "#9daf9c" }} />
                <div>
                  <p>ملكية العقار: {showPropertyDetail.ownership_type}</p>
                  <p>نوع العقار: {showPropertyDetail.property_type}</p>
                  <p></p>
                </div>
              </div>
            </Col>

            <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}>
              {" "}
              <div className="sections">
                <h6 className="pt-2">
                  <FontAwesomeIcon icon={faBars} /> معرض الصور
                </h6>
                <hr style={{ backgroundColor: "#9daf9c" }} />

                <div className="">
                  <Row>
                    <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                      {showPropertyDetail.images.length > 0 ? (
                        <div className="img-container">
                          <img
                            src={showPropertyDetail.images[0].image}
                            alt={showPropertyDetail.images[0].property}
                          />
                        </div>
                      ) : (
                        <div>ما من صور لهذا العقار</div>
                      )}
                    </Col>
                  </Row>

                  <Carousel>
                    {showPropertyDetail.images.slice(1).map((image, idx) => (
                      <Carousel.Item key={idx} className="w-100">
                        <img
                          className="d-block w-50 p-2 m-auto img-fluid"
                          src={image.image}
                          alt={image.property}
                        />
                      </Carousel.Item>
                    ))}
                  </Carousel>
                </div>
              </div>
            </Col>
            <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}>
              {" "}
              <div className="sections">
                <h6 className="pt-2">
                  <FontAwesomeIcon icon={faLocation} color="purple" /> الموقع
                </h6>
                <hr style={{ backgroundColor: "#9daf9c" }} />
                <div>
                  <p> المدينة: {showPropertyDetail.location.city}</p>
                  <p>المنطقة: {showPropertyDetail.location.region}</p>
                  <p>الشارع: {showPropertyDetail.location.street}</p>
                  <p>الاتجاه: {showPropertyDetail.direction}</p>
                </div>
              </div>{" "}
            </Col>
            <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}>
              {" "}
              <div className="sections">
                <h6 className="pt-2">
                  <FontAwesomeIcon icon={faStar} color="gold" /> الميزات:
                </h6>
                <hr style={{ backgroundColor: "#9daf9c" }} />
                <div>
                  {<p>مصعد :{showPropertyDetail.elevator ? "✔" : "❌"}</p>}
                  {
                    <p>
                      الواح شمسية :
                      {showPropertyDetail.solar_panels ? "✔" : "❌"}
                    </p>
                  }
                  {<p>مسبح :{showPropertyDetail.pool ? "✔" : "❌"}</p>}
                </div>
              </div>{" "}
            </Col>
          </Row>
          <Row gutter={[15, 15]} className="pt-4">
            <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}>
              {" "}
              <div className="sections">
                <h6 className="pt-2">
                  <FontAwesomeIcon icon={faHouse} /> الإكساء
                </h6>
                <hr style={{ backgroundColor: "#9daf9c" }} />
                <div>
                  <p>الاكساء :{showPropertyDetail.covering}</p>
                  <p>حالة الفرش: {showPropertyDetail.furnishing}</p>
                  <p></p>
                </div>
              </div>{" "}
            </Col>
          </Row>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Details;
