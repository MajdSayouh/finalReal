import { useContext, useRef, useState } from "react";
import FormHeader from "./FormHeader";
import { Button, Col, Form, Row, Spin, message } from "antd";
import NavBar from "../../components/navbar/NavBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTelegram } from "@fortawesome/free-brands-svg-icons";

import { useNavigate } from "react-router-dom";
import Cookie from "cookie-universal";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import uploadImage from "../../assets/download (1).jpeg";
import axios from "axios";
import { ADD_PROPERTY_IMAGE, BASE } from "../../Auth/API";
import { PropertyIdContext } from "../../context/PropertyIdContext";
import Loading from "../../components/loading/Loading";
function AddImageProperty() {
  const { propertyId, loading } = useContext(PropertyIdContext);
  console.log(propertyId);
  const navigate = useNavigate();
  const token = new Cookie().get("Token");
  const openImages = useRef(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleImageChange = (e) => {
    setImages(Array.from(e.target.files));
  };

  const [images, setImages] = useState([]);
  console.log(images);
  if (loading) {
    return <Loading />;
  }
  function handleSubmit() {
    setIsLoading(true);
    const formData = new FormData();
    for (const image of images) {
      console.log(image);
      formData.append("image", image);
    }
    formData.append("property_id", propertyId.toString());
    console.log(formData);
    try {
      const res = axios
        .post(`${BASE}/${ADD_PROPERTY_IMAGE}`, formData, {
          headers: {
            Authorization: `Token ${token}`,
            "Content-Type": "multipart/form-data",
          },
        })
        .then((data) => {
          setIsLoading(false);
          console.log(data);
          if (data.status === 201) navigate("/");
        });
    } catch (err) {
      setIsLoading(false);
      message.error("حدث خطأ");
      console.log(err);
    }
  }

  function handleRemove(){
    
  }

  console.log(images);

  const showImages = images.map((image, key) => {
    return (
      <div
        key={key}
        className="d-flex justify-content-between w-100 bg-light align-items-center  p-2 border"
      >
        <div className="d-flex justify-content-between align-items-center">
          <img src={URL.createObjectURL(image)} width={"100px"} />
          <div>
            <p className="mb-1 fw-bold">{image.name}</p>
            <p className="mb-1 fst-italic text-success fw-bold">
              {image.size / 1024 < 900
                ? (image.size / 1024).toFixed(2) + " KB"
                : (image.size / (1024 * 1024)).toFixed(2) + " MB"}
            </p>
          </div>
        </div>
        <div className=" ">
          <FontAwesomeIcon
            icon={faTrash}
            fontSize={20}
            color="red"
            className="mx-4"
            onClick={handleRemove}
          />
        </div>
      </div>
    );
  });

  return (
    <div>
      <NavBar />
      {isLoading ? (
        <Loading>
          <div className="property-image-page">
            <Form
              layout="vertical"
              onFinish={handleSubmit}
              className="w-50"
              //   onFinishFailed={onFinishFailed}
            >
              <div className="propertyImageForm">
                <FormHeader text={" صور العقار:"} icon="📷" />
                <Row gutter={30}>
                  <Col xs={24} sm={24} lg={24} xl={24} xxl={24}>
                    <input
                      ref={openImages}
                      hidden
                      type="file"
                      multiple
                      onChange={(e) => setImages([...e.target.files])}
                      // onChange={handleImageChange}
                    />
                  </Col>
                </Row>
                <div
                  onClick={() => openImages.current.click()}
                  className="  d-flex justify-content-center rounded w-100 align-items-center flex-column gap-2 py-3"
                  style={{ border: "2px dashed #9daf9c", cursor: "pointer" }}
                >
                  <img src={uploadImage} alt="Upload Image" width="100px" />
                  <p className="fw-bold mb-2" style={{ color: " #9daf9c" }}>
                    Click to Upload Images
                  </p>
                </div>
              </div>
              <div className="py-2 "> {showImages}</div>{" "}
              <div className="propertyImageForm">
                <Button type="primary" htmlType="submit" className="w-100 my-2">
                  <FontAwesomeIcon icon={faTelegram} />
                  <span className="mx-2"> إرسال</span>
                </Button>
              </div>
            </Form>
          </div>
        </Loading>
      ) : (
        <div className="property-image-page">
          <Form
            layout="vertical"
            onFinish={handleSubmit}
            className="w-50"
            //   onFinishFailed={onFinishFailed}
          >
            <div className="propertyImageForm">
              <FormHeader text={" صور العقار:"} icon="📷" />
              <Row gutter={30}>
                <Col xs={24} sm={24} lg={24} xl={24} xxl={24}>
                  <input
                    ref={openImages}
                    hidden
                    type="file"
                    multiple
                    onChange={(e) => setImages([...e.target.files])}
                    // onChange={handleImageChange}
                  />
                </Col>
              </Row>
              <div
                onClick={() => openImages.current.click()}
                className="  d-flex justify-content-center rounded w-100 align-items-center flex-column gap-2 py-3"
                style={{ border: "2px dashed #9daf9c", cursor: "pointer" }}
              >
                <img src={uploadImage} alt="Upload Image" width="100px" />
                <p className="fw-bold mb-2" style={{ color: " #9daf9c" }}>
                  Click to Upload Images
                </p>
              </div>
            </div>
            <div className="py-2 "> {showImages}</div>{" "}
            <div className="propertyImageForm">
              <Button type="primary" htmlType="submit" className="w-100 my-2">
                <FontAwesomeIcon icon={faTelegram} />
                <span className="mx-2"> إرسال</span>
              </Button>
            </div>
          </Form>
        </div>
      )}
    </div>
  );
}

export default AddImageProperty;
