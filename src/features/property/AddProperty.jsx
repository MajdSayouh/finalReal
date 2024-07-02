import "./property.css";
import NavBar from "../../components/navbar/NavBar";

import {
  Form,
  Input,
  Button,
  Select,
  Row,
  Col,
  InputNumber,
  Checkbox,
  message,
  Spin,
} from "antd";
// import "./profile.css";
import { useState } from "react";
import axios from "axios";
import Cookie from "cookie-universal";
import TextArea from "antd/es/input/TextArea";
import FormHeader from "./FormHeader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTelegram } from "@fortawesome/free-brands-svg-icons";
import { ADD_PROPERTY, BASE } from "../../Auth/API";
import { useNavigate } from "react-router-dom";

function AddProperty() {
  const [updatedData, setUpdatedData] = useState({
    title: "",
    description: "",
    location: {
      city: "",
      region: "",
      street: "",
    },
    email: "",
    password: "",
    property: "",
    gender: "",
    phonenumber: false,
    message: "",
  });
  const [propertyID, setPropertyID] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const token = new Cookie().get("Token");
  const handleChange = (e) => {
    setUpdatedData({
      [e.target.name]: e.target.value,
    });
  };
  function handleSubmit(value) {
    setIsLoading(true);
    console.log(value);
    try {
      const propertyData = {
        title: value.title,
        description: value.description,
        location: {
          city: value.location.city,
          region: value.location.region,
          street: value.location.street,
        },
        price: value.price,
        plot_area: value.plot_area,
        total_floors: value.total_floors,
        bedrooms: value.bedrooms,
        bathrooms: value.bathrooms,
        kitchens: value.kitchens,
        living_rooms: value.living_rooms,
        property_status: value.property_status,
        property_type: value.property_type,
        ownership_type: value.ownership_type,
        furnishing: value.furnishing,
        phone_number: value.phone_number,
        pool: value.pool,
        solar_panels: value.solar_panels,
        elevator: value.elevator,
        covering: value.covering,
        direction: value.direction,
      };
      const res = axios
        .post(`${BASE}/${ADD_PROPERTY}`, propertyData, {
          headers: { Authorization: `Token ${token}` },
        })
        .then((data) => {
          setIsLoading(false);
          console.log(data.data);
          // setPropertyID(data.data);
          message.success("تم إضافة العقار,قم بتحميل الصور لاستكمال العملية");
          navigate("/dashboard/add-image-property");
        });
    } catch (err) {
      setIsLoading(false);
      message.error("حدث خطأ أثناء الاتصال");
      console.log(err);
    }
  }
  console.log(propertyID);
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div>
      <NavBar />
      {isLoading ? (
        <Spin>
          <div className="property-page">
            <Form
              layout="horizontal"
              onFinish={handleSubmit}
              onFinishFailed={onFinishFailed}
            >
              <div className="propertyForm ">
                <FormHeader text={"معلومات عامة:"} icon="✏" />
                <Row gutter={12}>
                  <Col xs={24} sm={24} lg={12} xl={12} xxl={12}>
                    <Form.Item
                      label="اسم العقار"
                      name={"title"}
                      rules={[
                        {
                          required: true,
                        },
                      ]}
                    >
                      <Input size="small" onChange={handleChange} />
                    </Form.Item>
                  </Col>
                  <Col xs={24} sm={24} lg={12} xl={12} xxl={12}>
                    <Form.Item
                      label="وصف مختصر"
                      name={"description"}
                      rules={[
                        {
                          required: true,
                        },
                      ]}
                    >
                      <TextArea rows={2} onChange={(e) => handleChange(e)} />
                    </Form.Item>
                  </Col>
                </Row>
              </div>
              <div className="propertyForm">
                <FormHeader text={"الموقع"} icon="📍" />
                <Row gutter={30}>
                  <Col xs={24} sm={24} lg={8} xl={8} xxl={8}>
                    <Form.Item
                      label="المدينة"
                      name={["location", "city"]}
                      rules={[
                        {
                          required: true,
                        },
                      ]}
                    >
                      <Input size="small" />
                    </Form.Item>
                  </Col>
                  <Col xs={24} sm={24} lg={8} xl={8} xxl={8}>
                    <Form.Item
                      label="المنطقة "
                      name={["location", "region"]}
                      rules={[
                        {
                          required: true,
                        },
                      ]}
                    >
                      <Input size="small" />
                    </Form.Item>
                  </Col>
                  <Col xs={24} sm={24} lg={8} xl={8} xxl={8}>
                    <Form.Item
                      label="الشارع "
                      name={["location", "street"]}
                      rules={[
                        {
                          required: true,
                        },
                      ]}
                    >
                      <Input size="small" />
                    </Form.Item>
                  </Col>
                </Row>
              </div>
              <div className="propertyForm">
                <FormHeader text={"معلومات التواصل:"} icon="📞" />
                <Row gutter={30}>
                  <Col xs={24} sm={24} lg={12} xl={12} xxl={12}>
                    <Form.Item
                      label="رقم الموبايل: "
                      name={"phone_number"}
                      rules={[
                        {
                          required: true,
                        },
                      ]}
                    >
                      <Input size="small" />
                    </Form.Item>
                  </Col>
                </Row>
              </div>

              <div className="propertyForm">
                <FormHeader text={"تفاصيل العقار:"} icon="🏠" />
                <Row gutter={30}>
                  <Col xs={24} sm={12} lg={12} xl={12} xxl={12}>
                    <Form.Item
                      label="مساحة العقار:"
                      name={"plot_area"}
                      rules={[
                        {
                          required: true,
                        },
                      ]}
                    >
                      <InputNumber
                        min={1}
                        size="small"
                        type="number"
                        addonAfter="متر"
                      />
                    </Form.Item>
                  </Col>
                  <Col xs={24} sm={12} lg={12} xl={12} xxl={12}>
                    <Form.Item
                      label="عدد الطوابق:"
                      name={"total_floors"}
                      rules={[
                        {
                          required: true,
                        },
                      ]}
                    >
                      <InputNumber
                        min={1}
                        max={30}
                        size="small"
                        type="number"
                      />
                    </Form.Item>
                  </Col>
                </Row>

                <Row gutter={30}>
                  <Col xs={24} sm={12} lg={6} xl={6} xxl={6}>
                    <Form.Item
                      label="غرف المعيشة:"
                      name={"living_rooms"}
                      rules={[
                        {
                          required: true,
                        },
                      ]}
                    >
                      <InputNumber min={0} size="small" type="number" />
                    </Form.Item>
                  </Col>

                  <Col xs={24} sm={12} lg={6} xl={6} xxl={6}>
                    {" "}
                    <Form.Item
                      label="غرف النوم:"
                      name={"bedrooms"}
                      rules={[
                        {
                          required: true,
                        },
                      ]}
                    >
                      <InputNumber min={0} size="small" type="number" />
                    </Form.Item>
                  </Col>
                  <Col xs={24} sm={12} lg={6} xl={6} xxl={6}>
                    {" "}
                    <Form.Item
                      label="المطابخ:"
                      name={"kitchens"}
                      rules={[
                        {
                          required: true,
                        },
                      ]}
                    >
                      <InputNumber min={0} size="small" type="number" />
                    </Form.Item>
                  </Col>
                  <Col xs={24} sm={12} lg={6} xl={6} xxl={6}>
                    <Form.Item
                      label="الحمامات:"
                      name={"bathrooms"}
                      rules={[
                        {
                          required: true,
                        },
                      ]}
                    >
                      <InputNumber min={0} size="small" type="number" />
                    </Form.Item>
                  </Col>
                </Row>
              </div>
              <div className="propertyForm ">
                <FormHeader text={" نوع وملكية العقار:"} icon="📋" />
                <Row gutter={30}>
                  <Col xs={24} sm={12} lg={8} xl={8} xxl={8}>
                    <Form.Item
                      label="حالة العقار :"
                      name={"property_status"}
                      rules={[
                        {
                          required: true,
                        },
                      ]}
                    >
                      <Select
                        options={[
                          {
                            value: "For Sale",
                            label: "للبيع",
                          },
                          {
                            value: "For Rent",
                            label: "للإيجار",
                          },
                        ]}
                      ></Select>
                    </Form.Item>
                  </Col>
                  <Col xs={24} sm={12} lg={8} xl={8} xxl={8}>
                    <Form.Item
                      label="نوع العقار :"
                      name={"property_type"}
                      rules={[
                        {
                          required: true,
                        },
                      ]}
                    >
                      <Select
                        size="small"
                        options={[
                          {
                            value: "House",
                            label: "منزل",
                          },
                          {
                            value: "Apartment",
                            label: "شقة ",
                          },
                          {
                            value: "Villa",
                            label: "فيلا",
                          },
                          {
                            value: "Office",
                            label: "مكتب",
                          },

                          {
                            value: "Chalet",
                            label: "شاليه",
                          },
                          {
                            value: "Commercial",
                            label: "مكتب عقاري",
                          },
                          {
                            value: "Farm",
                            label: "مزرعة",
                          },
                          {
                            value: "Other",
                            label: "آخر",
                          },
                        ]}
                      ></Select>
                    </Form.Item>
                  </Col>
                  <Col xs={24} sm={12} lg={8} xl={8} xxl={8}>
                    <Form.Item
                      label="ملكية العقار :"
                      name={"ownership_type"}
                      rules={[
                        {
                          required: true,
                        },
                      ]}
                    >
                      <Select
                        size="small"
                        options={[
                          {
                            value: "طابو أخضر",
                            label: "طابو أخضر",
                          },

                          {
                            value: "عقد بيع قطعي",
                            label: "عقد بيع قطعي",
                          },
                          {
                            value: "حكم محكمة",
                            label: "حكم محكمة",
                          },
                          {
                            value: "وكالة كاتب بالعدل",
                            label: "وكالة كاتب بالعدل",
                          },
                          {
                            value: "طابو أسهم",
                            label: "طابو أسهم",
                          },
                          {
                            value: "طابو زراعي",
                            label: "طابو زراعي",
                          },
                          {
                            value: "طابو إسكان",
                            label: "طابو إسكان",
                          },
                          {
                            value: "فروغ",
                            label: "فروغ ",
                          },
                        ]}
                      ></Select>
                    </Form.Item>
                  </Col>
                </Row>
              </div>
              <div className="propertyForm">
                <FormHeader text={"الاكساء :"} icon="🎯" />
                <Row gutter={30}>
                  <Col xs={8} sm={8} lg={8} xl={8} xxl={8}>
                    <Form.Item
                      label="الإكساء:"
                      name={"covering"}
                      rules={[
                        {
                          required: true,
                        },
                      ]}
                    >
                      <Select
                        size="small"
                        options={[
                          {
                            value: "عادي",
                            label: "عادي",
                          },
                          {
                            value: "سوبر",
                            label: "سوبر",
                          },
                          {
                            value: "جيد",
                            label: "جيد",
                          },
                          {
                            value: "جيد جدا",
                            label: "جيد جدا",
                          },
                          {
                            value: "ممتاز",
                            label: "ممتاز",
                          },
                        ]}
                      ></Select>
                    </Form.Item>
                  </Col>
                  <Col xs={8} sm={8} lg={8} xl={8} xxl={8}>
                    <Form.Item
                      label="الفرش:"
                      name={"furnishing"}
                      rules={[
                        {
                          required: true,
                        },
                      ]}
                    >
                      <Select
                        size="small"
                        options={[
                          {
                            value: "مفروش",
                            label: "مفروش",
                          },
                          {
                            value: "نص مفروش",
                            label: "نص مفروش",
                          },
                          {
                            value: "غير مفروش",
                            label: "غير مفروش",
                          },
                        ]}
                      ></Select>
                    </Form.Item>
                  </Col>
                  <Col xs={8} sm={8} lg={8} xl={8} xxl={8}>
                    <Form.Item
                      label="الاتجاه:"
                      name={"direction"}
                      rules={[
                        {
                          required: true,
                        },
                      ]}
                    >
                      <Select
                        size="small"
                        options={[
                          {
                            value: "شرق",
                            label: "شرق",
                          },
                          {
                            value: "غرب",
                            label: "غرب",
                          },
                          {
                            value: "شمال",
                            label: "شمال",
                          },
                          {
                            value: "جنوب",
                            label: "جنوب",
                          },
                          {
                            value: "الشمال الشرقي",
                            label: "الشمال الشرقي",
                          },
                          {
                            value: "الشمال الغربي",
                            label: "الشمال الغربي",
                          },

                          {
                            value: "الجنوب الشرقي",
                            label: "الجنوب الشرقي",
                          },
                          {
                            value: "الجنوب الغربي",
                            label: "الجنوب الغربي",
                          },
                        ]}
                      ></Select>
                    </Form.Item>
                  </Col>
                </Row>
              </div>

              <div className="propertyForm">
                <FormHeader text={"ميزات إضافية:"} icon="⭐" />
                <Row gutter={30}>
                  <Col xs={8} sm={8} lg={8} xl={8} xxl={8}>
                    <Form.Item
                      name={"solar_panels"}
                      label="الواح شمسية"
                      valuePropName="checked"
                    >
                      <Checkbox />
                    </Form.Item>
                  </Col>
                  <Col xs={8} sm={8} lg={8} xl={8} xxl={8}>
                    <Form.Item
                      name={"elevator"}
                      label="مصعد"
                      valuePropName="checked"
                    >
                      <Checkbox />
                    </Form.Item>
                  </Col>
                  <Col xs={8} sm={8} lg={8} xl={8} xxl={8}>
                    <Form.Item
                      name={"pool"}
                      label="مسبح"
                      valuePropName="checked"
                    >
                      <Checkbox />
                    </Form.Item>
                  </Col>
                </Row>
              </div>

              <div className="propertyForm">
                <FormHeader text={"السعر"} icon="💲" />
                <Row gutter={30}>
                  <Col xs={24} sm={24} lg={24} xl={12} xxl={12}>
                    <Form.Item
                      label="السعر:"
                      name={"price"}
                      rules={[
                        {
                          required: true,
                        },
                      ]}
                    >
                      <InputNumber
                        min={0}
                        className="w-100"
                        size="small"
                        type="number"
                      />
                    </Form.Item>
                  </Col>
                </Row>
              </div>

              <Form.Item>
                <Button type="primary" htmlType="submit" className="w-100">
                  <FontAwesomeIcon icon={faTelegram} />
                  <span className="mx-2"> التالي</span>
                </Button>
              </Form.Item>
            </Form>
          </div>
        </Spin>
      ) : (
        <div className="property-page">
          <Form
            layout="horizontal"
            onFinish={handleSubmit}
            onFinishFailed={onFinishFailed}
          >
            <div className="propertyForm ">
              <FormHeader text={"معلومات عامة:"} icon="✏" />
              <Row gutter={12}>
                <Col xs={24} sm={24} lg={12} xl={12} xxl={12}>
                  <Form.Item
                    label="اسم العقار"
                    name={"title"}
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                  >
                    <Input size="small" onChange={handleChange} />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} lg={12} xl={12} xxl={12}>
                  <Form.Item
                    label="وصف مختصر"
                    name={"description"}
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                  >
                    <TextArea rows={2} onChange={(e) => handleChange(e)} />
                  </Form.Item>
                </Col>
              </Row>
            </div>
            <div className="propertyForm">
              <FormHeader text={"الموقع"} icon="📍" />
              <Row gutter={30}>
                <Col xs={24} sm={24} lg={8} xl={8} xxl={8}>
                  <Form.Item
                    label="المدينة"
                    name={["location", "city"]}
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                  >
                    <Input size="small" />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} lg={8} xl={8} xxl={8}>
                  <Form.Item
                    label="المنطقة "
                    name={["location", "region"]}
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                  >
                    <Input size="small" />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} lg={8} xl={8} xxl={8}>
                  <Form.Item
                    label="الشارع "
                    name={["location", "street"]}
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                  >
                    <Input size="small" />
                  </Form.Item>
                </Col>
              </Row>
            </div>
            <div className="propertyForm">
              <FormHeader text={"معلومات التواصل:"} icon="📞" />
              <Row gutter={30}>
                <Col xs={24} sm={24} lg={12} xl={12} xxl={12}>
                  <Form.Item
                    label="رقم الموبايل: "
                    name={"phone_number"}
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                  >
                    <Input size="small" />
                  </Form.Item>
                </Col>
              </Row>
            </div>

            <div className="propertyForm">
              <FormHeader text={"تفاصيل العقار:"} icon="🏠" />
              <Row gutter={30}>
                <Col xs={24} sm={12} lg={12} xl={12} xxl={12}>
                  <Form.Item
                    label="مساحة العقار:"
                    name={"plot_area"}
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                  >
                    <InputNumber
                      min={1}
                      size="small"
                      type="number"
                      addonAfter="متر"
                    />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={12} lg={12} xl={12} xxl={12}>
                  <Form.Item
                    label="عدد الطوابق:"
                    name={"total_floors"}
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                  >
                    <InputNumber min={1} max={30} size="small" type="number" />
                  </Form.Item>
                </Col>
              </Row>

              <Row gutter={30}>
                <Col xs={24} sm={12} lg={6} xl={6} xxl={6}>
                  <Form.Item
                    label="غرف المعيشة:"
                    name={"living_rooms"}
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                  >
                    <InputNumber min={0} size="small" type="number" />
                  </Form.Item>
                </Col>

                <Col xs={24} sm={12} lg={6} xl={6} xxl={6}>
                  {" "}
                  <Form.Item
                    label="غرف النوم:"
                    name={"bedrooms"}
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                  >
                    <InputNumber min={0} size="small" type="number" />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={12} lg={6} xl={6} xxl={6}>
                  {" "}
                  <Form.Item
                    label="المطابخ:"
                    name={"kitchens"}
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                  >
                    <InputNumber min={0} size="small" type="number" />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={12} lg={6} xl={6} xxl={6}>
                  <Form.Item
                    label="الحمامات:"
                    name={"bathrooms"}
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                  >
                    <InputNumber min={0} size="small" type="number" />
                  </Form.Item>
                </Col>
              </Row>
            </div>
            <div className="propertyForm ">
              <FormHeader text={" نوع وملكية العقار:"} icon="📋" />
              <Row gutter={30}>
                <Col xs={24} sm={12} lg={8} xl={8} xxl={8}>
                  <Form.Item
                    label="حالة العقار :"
                    name={"property_status"}
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                  >
                    <Select
                      options={[
                        {
                          value: "For Sale",
                          label: "للبيع",
                        },
                        {
                          value: "For Rent",
                          label: "للإيجار",
                        },
                      ]}
                    ></Select>
                  </Form.Item>
                </Col>
                <Col xs={24} sm={12} lg={8} xl={8} xxl={8}>
                  <Form.Item
                    label="نوع العقار :"
                    name={"property_type"}
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                  >
                    <Select
                      size="small"
                      options={[
                        {
                          value: "House",
                          label: "منزل",
                        },
                        {
                          value: "Apartment",
                          label: "شقة ",
                        },
                        {
                          value: "Villa",
                          label: "فيلا",
                        },
                        {
                          value: "Office",
                          label: "مكتب",
                        },

                        {
                          value: "Chalet",
                          label: "شاليه",
                        },
                        {
                          value: "Commercial",
                          label: "مكتب عقاري",
                        },
                        {
                          value: "Farm",
                          label: "مزرعة",
                        },
                        {
                          value: "Other",
                          label: "آخر",
                        },
                      ]}
                    ></Select>
                  </Form.Item>
                </Col>
                <Col xs={24} sm={12} lg={8} xl={8} xxl={8}>
                  <Form.Item
                    label="ملكية العقار :"
                    name={"ownership_type"}
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                  >
                    <Select
                      size="small"
                      options={[
                        {
                          value: "طابو أخضر",
                          label: "طابو أخضر",
                        },

                        {
                          value: "عقد بيع قطعي",
                          label: "عقد بيع قطعي",
                        },
                        {
                          value: "حكم محكمة",
                          label: "حكم محكمة",
                        },
                        {
                          value: "وكالة كاتب بالعدل",
                          label: "وكالة كاتب بالعدل",
                        },
                        {
                          value: "طابو أسهم",
                          label: "طابو أسهم",
                        },
                        {
                          value: "طابو زراعي",
                          label: "طابو زراعي",
                        },
                        {
                          value: "طابو إسكان",
                          label: "طابو إسكان",
                        },
                        {
                          value: "فروغ",
                          label: "فروغ ",
                        },
                      ]}
                    ></Select>
                  </Form.Item>
                </Col>
              </Row>
            </div>
            <div className="propertyForm">
              <FormHeader text={"الاكساء :"} icon="🎯" />
              <Row gutter={30}>
                <Col xs={8} sm={8} lg={8} xl={8} xxl={8}>
                  <Form.Item
                    label="الإكساء:"
                    name={"covering"}
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                  >
                    <Select
                      size="small"
                      options={[
                        {
                          value: "عادي",
                          label: "عادي",
                        },
                        {
                          value: "سوبر",
                          label: "سوبر",
                        },
                        {
                          value: "جيد",
                          label: "جيد",
                        },
                        {
                          value: "جيد جدا",
                          label: "جيد جدا",
                        },
                        {
                          value: "ممتاز",
                          label: "ممتاز",
                        },
                      ]}
                    ></Select>
                  </Form.Item>
                </Col>
                <Col xs={8} sm={8} lg={8} xl={8} xxl={8}>
                  <Form.Item
                    label="الفرش:"
                    name={"furnishing"}
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                  >
                    <Select
                      size="small"
                      options={[
                        {
                          value: "مفروش",
                          label: "مفروش",
                        },
                        {
                          value: "نص مفروش",
                          label: "نص مفروش",
                        },
                        {
                          value: "غير مفروش",
                          label: "غير مفروش",
                        },
                      ]}
                    ></Select>
                  </Form.Item>
                </Col>
                <Col xs={8} sm={8} lg={8} xl={8} xxl={8}>
                  <Form.Item
                    label="الاتجاه:"
                    name={"direction"}
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                  >
                    <Select
                      size="small"
                      options={[
                        {
                          value: "شرق",
                          label: "شرق",
                        },
                        {
                          value: "غرب",
                          label: "غرب",
                        },
                        {
                          value: "شمال",
                          label: "شمال",
                        },
                        {
                          value: "جنوب",
                          label: "جنوب",
                        },
                        {
                          value: "الشمال الشرقي",
                          label: "الشمال الشرقي",
                        },
                        {
                          value: "الشمال الغربي",
                          label: "الشمال الغربي",
                        },

                        {
                          value: "الجنوب الشرقي",
                          label: "الجنوب الشرقي",
                        },
                        {
                          value: "الجنوب الغربي",
                          label: "الجنوب الغربي",
                        },
                      ]}
                    ></Select>
                  </Form.Item>
                </Col>
              </Row>
            </div>

            <div className="propertyForm">
              <FormHeader text={"ميزات إضافية:"} icon="⭐" />
              <Row gutter={30}>
                <Col xs={8} sm={8} lg={8} xl={8} xxl={8}>
                  <Form.Item
                    name={"solar_panels"}
                    label="الواح شمسية"
                    valuePropName="checked"
                  >
                    <Checkbox />
                  </Form.Item>
                </Col>
                <Col xs={8} sm={8} lg={8} xl={8} xxl={8}>
                  <Form.Item
                    name={"elevator"}
                    label="مصعد"
                    valuePropName="checked"
                  >
                    <Checkbox />
                  </Form.Item>
                </Col>
                <Col xs={8} sm={8} lg={8} xl={8} xxl={8}>
                  <Form.Item name={"pool"} label="مسبح" valuePropName="checked">
                    <Checkbox />
                  </Form.Item>
                </Col>
              </Row>
            </div>

            <div className="propertyForm">
              <FormHeader text={"السعر"} icon="💲" />
              <Row gutter={30}>
                <Col xs={24} sm={24} lg={24} xl={12} xxl={12}>
                  <Form.Item
                    label="السعر:"
                    name={"price"}
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                  >
                    <InputNumber
                      min={0}
                      className="w-100"
                      size="small"
                      type="number"
                    />
                  </Form.Item>
                </Col>
              </Row>
            </div>

            <Form.Item>
              <Button type="primary" htmlType="submit" className="w-100">
                <FontAwesomeIcon icon={faTelegram} />
                <span className="mx-2"> التالي</span>
              </Button>
            </Form.Item>
          </Form>
        </div>
      )}
    </div>
  );
}

export default AddProperty;
