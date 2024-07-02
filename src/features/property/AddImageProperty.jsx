import React, { useRef, useState } from "react";
import FormHeader from "./FormHeader";
import { Button, Col, Form, Row } from "antd";
import NavBar from "../../components/navbar/NavBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTelegram } from "@fortawesome/free-brands-svg-icons";

import { useNavigate } from "react-router-dom";
import Cookie from "cookie-universal";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import uploadImage from "../../assets/download (1).jpeg";
import axios from "axios";
import { ADD_PROPERTY_IMAGE, BASE } from "../../Auth/API";
function AddImageProperty() {
  const navigate = useNavigate();
  const token = new Cookie().get("Token");
  const openImages = useRef(null);
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [fileList, setFileList] = useState([
    {
      uid: "-4",
      name: "image.png",
      status: "done",
      url:
        "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    },
    {
      uid: "-xxx",
      percent: 50,
      name: "image.png",
      status: "uploading",
      url:
        "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    },
    {
      uid: "-5",
      name: "image.png",
      status: "error",
    },
  ]);

  const [images, setImages] = useState([]);
  console.log(images);
  function handleSubmit(e) {
    // e.preventDefault();
    const formData = new FormData();
    for (let i = 0; i < images.length; i++) {
      formData.append("images[]", images[i]);
    }
    console.log(formData);
    try {
      const res = axios
        .post(`${BASE}/${ADD_PROPERTY_IMAGE}`, formData)
        .then((data) => console.log(data));
    } catch (err) {
      console.log(err);
    }
  }

  console.log(images);

  const showImages = images.map((image, key) => {
    return (
      <div
        key={key}
        className=" d-flex bg-light align-items-center justify-content-start gap-2 p-2 border"
      >
        <img src={URL.createObjectURL(image)} width={"80px"} />
        <div className="d-flex justify-content-between align-items-center ">
          <div>
            <p className="mb-1">{image.name}</p>
            <p className="mb-1">
              {image.size / 1024 < 900
                ? (image.size / 1024).toFixed(2) + " KB"
                : (image.size / (1024 * 1024)).toFixed(2) + " MB"}
            </p>
          </div>
          <div>
            <FontAwesomeIcon icon={faTrash} fontSize={15} />
          </div>
        </div>
      </div>
    );
  });

  return (
    <div>
      <NavBar />
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
    </div>
  );
}

export default AddImageProperty;
