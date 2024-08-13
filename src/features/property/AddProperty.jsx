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
import { useContext, useState } from "react";
import TextArea from "antd/es/input/TextArea";
import FormHeader from "./FormHeader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTelegram } from "@fortawesome/free-brands-svg-icons";
import { useNavigate } from "react-router-dom";
import { PropertyIdContext } from "../../context/PropertyIdContext";
import Loading from "../../components/loading/Loading";
import { useMutation } from "@tanstack/react-query";
import { addProperty } from "../../services/apiProperty";

function AddProperty() {
  const navigate = useNavigate();
  const [loader, setLoader] = useState(false);

  const { updatePropertyId, setLoading } = useContext(PropertyIdContext);
  const { mutate, isIdle, isLoading, data } = useMutation({
    mutationFn: (property) => {
      return addProperty(property);
    },
    onSuccess: (data) => {
      console.log(data.data.id);
      message.success("تم إضافة العقار ");
      updatePropertyId(data.data.id);
      navigate("/dashboard/add-image-property");
    },
    onError: (err) => {
      message.error("حدث خطأ أثناء إضافة العقار");
      console.log(err);
    },
  });
  function handleFinish(values) {
    mutate(values);
  }
  if (isLoading) return <Loading />;

  return (
    <div>
      <NavBar />
      <div className="property-page">
     {isLoading ?<Loading>   <Form layout="horizontal" onFinish={handleFinish}>
     <div className="propertyForm ">
       <FormHeader text={"معلومات عامة:"} icon="✏" />
       <Row gutter={12}>
         <Col xs={24} sm={24} lg={12} xl={12} xxl={12}>
           <Form.Item
             label="اسم العقار"
             name="title"
             rules={[{ required: true }]}
           >
             <Input size="small" />
           </Form.Item>
         </Col>
         <Col xs={24} sm={24} lg={12} xl={12} xxl={12}>
           <Form.Item
             label="وصف مختصر"
             name="description"
             rules={[{ required: true }]}
           >
             <TextArea rows={2} />
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
             rules={[{ required: true }]}
           >
             <Input size="small" />
           </Form.Item>
         </Col>
         <Col xs={24} sm={24} lg={8} xl={8} xxl={8}>
           <Form.Item
             label="المنطقة"
             name={["location", "region"]}
             rules={[{ required: true }]}
           >
             <Input size="small" />
           </Form.Item>
         </Col>
         <Col xs={24} sm={24} lg={8} xl={8} xxl={8}>
           <Form.Item
             label="الشارع "
             name={["location", "street"]}
             rules={[{ required: true }]}
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
             name="phone_number"
             rules={[{ required: true }]}
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
             name="plot_area"
             rules={[{ required: true }]}
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
             name="total_floors"
             rules={[{ required: true }]}
           >
             <InputNumber min={1} max={30} size="small" type="number" />
           </Form.Item>
         </Col>
       </Row>

       <Row gutter={30}>
         <Col xs={24} sm={12} lg={6} xl={6} xxl={6}>
           <Form.Item
             label="غرف المعيشة:"
             name="living_rooms"
             rules={[{ required: true }]}
           >
             <InputNumber min={0} size="small" type="number" />
           </Form.Item>
         </Col>

         <Col xs={24} sm={12} lg={6} xl={6} xxl={6}>
           {" "}
           <Form.Item
             label="غرف النوم:"
             name="bedrooms"
             rules={[{ required: true }]}
           >
             <InputNumber min={0} size="small" type="number" />
           </Form.Item>
         </Col>
         <Col xs={24} sm={12} lg={6} xl={6} xxl={6}>
           {" "}
           <Form.Item
             label="المطابخ:"
             name="kitchens"
             rules={[{ required: true }]}
           >
             <InputNumber min={0} size="small" type="number" />
           </Form.Item>
         </Col>
         <Col xs={24} sm={12} lg={6} xl={6} xxl={6}>
           <Form.Item
             label="الحمامات:"
             name="bathrooms"
             rules={[{ required: true }]}
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
             name="property_status"
             rules={[{ required: true }]}
           >
             <Select
               options={[
                 {
                   value: "للبيع",
                   label: "للبيع",
                 },
                 {
                   value: "للأجار",
                   label: "للإيجار",
                 },
               ]}
             ></Select>
           </Form.Item>
         </Col>
         <Col xs={24} sm={12} lg={8} xl={8} xxl={8}>
           <Form.Item
             label="نوع العقار :"
             name="property_type"
             rules={[{ required: true }]}
           >
             <Select
               size="small"
               options={[
                 {
                   value: "منزل",
                   label: "منزل",
                 },
                 {
                   value: "شقة",
                   label: "شقة ",
                 },
                 {
                   value: "فيلا",
                   label: "فيلا",
                 },
                 {
                   value: "مكتب",
                   label: "مكتب",
                 },

                 {
                   value: "شاليه",
                   label: "شاليه",
                 },
                 {
                   value: "مكتب عقاري",
                   label: "مكتب عقاري",
                 },
                 {
                   value: "مزرعة",
                   label: "مزرعة",
                 },
                 {
                   value: "آخر",
                   label: "آخر",
                 },
               ]}
             ></Select>
           </Form.Item>
         </Col>
         <Col xs={24} sm={12} lg={8} xl={8} xxl={8}>
           <Form.Item
             label="ملكية العقار :"
             name="ownership_type"
             rules={[{ required: true }]}
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
             name="covering"
             rules={[{ required: true }]}
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
             name="furnishing"
             rules={[{ required: true }]}
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
             name="direction"
             rules={[{ required: true }]}
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
             name="solar_panels"
             label="الواح شمسية"
             valuePropName="checked"
           >
             <Checkbox />
           </Form.Item>
         </Col>
         <Col xs={8} sm={8} lg={8} xl={8} xxl={8}>
           <Form.Item name="elevator" label="مصعد" valuePropName="checked">
             <Checkbox />
           </Form.Item>
         </Col>
         <Col xs={8} sm={8} lg={8} xl={8} xxl={8}>
           <Form.Item name="pool" label="مسبح" valuePropName="checked">
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
             name="price"
             rules={[{ required: true }]}
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
       <Button
         type="primary"
         disabled={isLoading}
         htmlType="submit"
         className="w-100"
       >
         <FontAwesomeIcon icon={faTelegram} />
         <span className="mx-2"> التالي</span>
       </Button>
     </Form.Item>
   </Form></Loading>:   <Form layout="horizontal" onFinish={handleFinish}>
     <div className="propertyForm ">
       <FormHeader text={"معلومات عامة:"} icon="✏" />
       <Row gutter={12}>
         <Col xs={24} sm={24} lg={12} xl={12} xxl={12}>
           <Form.Item
             label="اسم العقار"
             name="title"
             rules={[{ required: true }]}
           >
             <Input size="small" />
           </Form.Item>
         </Col>
         <Col xs={24} sm={24} lg={12} xl={12} xxl={12}>
           <Form.Item
             label="وصف مختصر"
             name="description"
             rules={[{ required: true }]}
           >
             <TextArea rows={2} />
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
             rules={[{ required: true }]}
           >
             <Input size="small" />
           </Form.Item>
         </Col>
         <Col xs={24} sm={24} lg={8} xl={8} xxl={8}>
           <Form.Item
             label="المنطقة"
             name={["location", "region"]}
             rules={[{ required: true }]}
           >
             <Input size="small" />
           </Form.Item>
         </Col>
         <Col xs={24} sm={24} lg={8} xl={8} xxl={8}>
           <Form.Item
             label="الشارع "
             name={["location", "street"]}
             rules={[{ required: true }]}
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
             name="phone_number"
             rules={[{ required: true }]}
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
             name="plot_area"
             rules={[{ required: true }]}
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
             name="total_floors"
             rules={[{ required: true }]}
           >
             <InputNumber min={1} max={30} size="small" type="number" />
           </Form.Item>
         </Col>
       </Row>

       <Row gutter={30}>
         <Col xs={24} sm={12} lg={6} xl={6} xxl={6}>
           <Form.Item
             label="غرف المعيشة:"
             name="living_rooms"
             rules={[{ required: true }]}
           >
             <InputNumber min={0} size="small" type="number" />
           </Form.Item>
         </Col>

         <Col xs={24} sm={12} lg={6} xl={6} xxl={6}>
           {" "}
           <Form.Item
             label="غرف النوم:"
             name="bedrooms"
             rules={[{ required: true }]}
           >
             <InputNumber min={0} size="small" type="number" />
           </Form.Item>
         </Col>
         <Col xs={24} sm={12} lg={6} xl={6} xxl={6}>
           {" "}
           <Form.Item
             label="المطابخ:"
             name="kitchens"
             rules={[{ required: true }]}
           >
             <InputNumber min={0} size="small" type="number" />
           </Form.Item>
         </Col>
         <Col xs={24} sm={12} lg={6} xl={6} xxl={6}>
           <Form.Item
             label="الحمامات:"
             name="bathrooms"
             rules={[{ required: true }]}
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
             name="property_status"
             rules={[{ required: true }]}
           >
             <Select
               options={[
                 {
                   value: "للبيع",
                   label: "للبيع",
                 },
                 {
                   value: "للأجار",
                   label: "للإيجار",
                 },
               ]}
             ></Select>
           </Form.Item>
         </Col>
         <Col xs={24} sm={12} lg={8} xl={8} xxl={8}>
           <Form.Item
             label="نوع العقار :"
             name="property_type"
             rules={[{ required: true }]}
           >
             <Select
               size="small"
               options={[
                 {
                   value: "منزل",
                   label: "منزل",
                 },
                 {
                   value: "شقة",
                   label: "شقة ",
                 },
                 {
                   value: "فيلا",
                   label: "فيلا",
                 },
                 {
                   value: "مكتب",
                   label: "مكتب",
                 },

                 {
                   value: "شاليه",
                   label: "شاليه",
                 },
                 {
                   value: "مكتب عقاري",
                   label: "مكتب عقاري",
                 },
                 {
                   value: "مزرعة",
                   label: "مزرعة",
                 },
                 {
                   value: "آخر",
                   label: "آخر",
                 },
               ]}
             ></Select>
           </Form.Item>
         </Col>
         <Col xs={24} sm={12} lg={8} xl={8} xxl={8}>
           <Form.Item
             label="ملكية العقار :"
             name="ownership_type"
             rules={[{ required: true }]}
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
             name="covering"
             rules={[{ required: true }]}
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
             name="furnishing"
             rules={[{ required: true }]}
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
             name="direction"
             rules={[{ required: true }]}
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
             name="solar_panels"
             label="الواح شمسية"
             valuePropName="checked"
           >
             <Checkbox />
           </Form.Item>
         </Col>
         <Col xs={8} sm={8} lg={8} xl={8} xxl={8}>
           <Form.Item name="elevator" label="مصعد" valuePropName="checked">
             <Checkbox />
           </Form.Item>
         </Col>
         <Col xs={8} sm={8} lg={8} xl={8} xxl={8}>
           <Form.Item name="pool" label="مسبح" valuePropName="checked">
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
             name="price"
             rules={[{ required: true }]}
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
       <Button
         type="primary"
         disabled={isLoading}
         htmlType="submit"
         className="w-100"
       >
         <FontAwesomeIcon icon={faTelegram} />
         <span className="mx-2"> التالي</span>
       </Button>
     </Form.Item>
   </Form>}
      </div>
    </div>
  );
}

export default AddProperty;
