import { Carousel, Image } from "react-bootstrap";
import cardImage from "../../assets/IMG-20231031-WA0001.jpg";
import NavBar from "../../components/navbar/NavBar";
import styles from "../pages.module.css";
import Footer from "../../components/Footer/Footer";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import {
  addToFavourite,
  deleteProperty,
  deletFromFavourite,
  // deletFromFavourite,
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
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { Col, message, Row } from "antd";
import "./details.css";
import { faTypo3 } from "@fortawesome/free-brands-svg-icons";
import Loading from "../../components/loading/Loading";
import { Fragment, useState } from "react";

function Details() {
  const { slug } = useParams();
  const [heart, setHeart] = useState(false);
  console.log(slug);
  const queryClient = useQueryClient();
  // ADD TO FAVOURITE MUTATION
  const mutation = useMutation({
    mutationFn: (property_id) => {
      return addToFavourite(property_id);
    },
    onSuccess: () => {
      setHeart(true);
    },
  });

  // DELETE TO FAVOURITE MUTATION
  const { mutate: deleteFavorite } = useMutation({
    mutationFn: (property_id) => {
      return deletFromFavourite(property_id);
    },
    onSuccess: () => {
      // queryClient.invalidateQueries(["favourite"]);
      message.success("تم ازالة العقار من المفضلة");
      setHeart(false);
    },
    onError: () => {
      (err) => message.error(err.message);
    },
  });

  const { mutate, isLoading: deleteLoading } = useMutation({
    mutationFn: (slug) => {
      return deleteProperty(slug);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["ALL Properties"]);
      message.success("تم حذف العقار بنجاح");
    },
    onError: () => {
      (err) => message.error(err.message);
    },
  });

  // GET ONE PROPERTY QUERY
  const propertyDetail = useQuery({
    queryKey: ["One Property", slug],
    queryFn: () => getOneProperty({ slug }),
  });

  console.log(mutation);
  const { isError: addError } = mutation;

  if (addError)
    message.error("حصل خطأ أثناء اضافة العقار, يرجى إعادة المحاولة");

  const { isLoading, isPending } = propertyDetail;

  if (isLoading || isPending) {
    return (
      <Fragment>
        <NavBar />
        <Loading />
      </Fragment>
    );
  }
  console.log(propertyDetail.data?.data);
  const showPropertyDetail = propertyDetail.data?.data;
  // if (!showPropertyDetail.images[0]) return <div>kuhyukftf</div>;
  return (
    <div className="w-100">
      <NavBar />
      <div className={styles.detailHero}>
        {showPropertyDetail.images[0] ? (
          <img
            src={showPropertyDetail.images[0].image}
            className="image-cover"
          />
        ) : (
          <img src={"../../assets/download.jpeg"} className={styles.Image} />
        )}
        <div
          className={`${styles.textDetail} d-flex text-white  justify-content-between  `}
        >
          <div className="d-flex align-items-center justify-content-between  gap-4  ">
            <Image src={cardImage} roundedCircle width={"50px"} />
            <h2>{showPropertyDetail.title}</h2>
          </div>
          <button className="btn btn-success" style={{ color: "white" }}>
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
            <button className="btn btn-success" style={{ color: "white" }}>
              تواصل{"    "}
              <FontAwesomeIcon icon={faContactBook} className="pr-4" />
            </button>

            {showPropertyDetail.is_favorite ? (
              <button
                className="btn btn-success"
                style={{ color: "white" }}
                onClick={() => {
                  deleteFavorite(showPropertyDetail.id);
                }}
              >
                <div>
                  <span> إزالة إلى المفضلة</span>
                  <FontAwesomeIcon icon={faHeart} style={{ color: "red" }} />
                </div>
              </button>
            ) : !showPropertyDetail.is_favorite ? (
              <button
                className="btn btn-success"
                style={{ color: "white" }}
                onClick={() => {
                  mutation.mutate({ id: showPropertyDetail.id });
                }}
              >
                <div>
                  <span> إضافة إلى المفضلة</span>
                  <FontAwesomeIcon
                    icon={faHeart}
                    style={{ color: `${heart ? "red" : "gray"}` }}
                  />
                </div>
              </button>
            ) : (
              <button
                className="btn btn-success"
                style={{ color: "white" }}
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

            <button className="btn btn-success" style={{ color: "white" }}>
              مشاركة <FontAwesomeIcon icon={faShare} />
            </button>

            {showPropertyDetail.is_owner && (
              <button
                onClick={() =>
                  mutate({
                    slug: showPropertyDetail.slug,
                  })
                }
                className="btn btn-danger"
                style={{ color: "white" }}
                disabled={deleteLoading}
              >
                حذف العقار <FontAwesomeIcon icon={faTrash} />
              </button>
            )}
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
                        <Carousel>
                          {showPropertyDetail.images.map((image, idx) => (
                            <Carousel.Item
                              key={idx}
                              className="w-100 img-container "
                            >
                              <img
                                className="d-block h-100 p-2 m-auto  img-fluid"
                                src={image.image}
                                alt={image.property}
                              />
                            </Carousel.Item>
                          ))}
                        </Carousel>
                      ) : (
                        <div>ما من صور لهذا العقار</div>
                      )}
                    </Col>
                  </Row>
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
