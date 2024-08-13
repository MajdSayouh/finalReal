import { Affix, Col, ConfigProvider, InputNumber, Row, Slider } from "antd";
import { Form, Select, Button } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../components/cards/cardStyle.css";
import { faMailReply, faSearch } from "@fortawesome/free-solid-svg-icons";

import "./rent.css";
import { useFilter } from "../../context/FilterContext";

function SideBar() {
  const { filter, setFilter } = useFilter();
  const [form] = Form.useForm();
  const clearForm = () => {
    console.log(form);
    form.setFieldsValue({
      property_status: "",
      city: "",
      property_type: "",
      covering: "",
      price: "",
      ownership_type: "",
      plot_area: "",
      price_lt: "",
      price_gt: "",
    });
    setFilter((prevState) => ({
      ...prevState,
      property_status: "",
      city: "",
      property_type: "",
      covering: "",
      title: "",
      price: "",
      ownership_type: "",
      plot_area: "",
      price_lt: "",
      price_gt: "",
    }));
  };

  function handleSubmit(values) {
    console.log(values);
    setFilter((prevState) => ({
      ...prevState,
      property_status: values.property_status,
      city: values.city,
      property_type: values.property_type,
      covering: values.covering,
    }));
  }
  return (
    <div>
      <Affix style={{ width: "370px", height: "300px" }}>
        <Form
          layout="vertical"
          className=" p-3"
          style={{ boxShadow: "rgba(0, 0, 0, 0.2) -2.6px 3.4px 3.2px" }}
          onFinish={handleSubmit}
          form={form}
        >
          <Col
            xl={24}
            style={{
              height: "65vh",
              overflowX: "hidden",
              boxShadow:
                " rgba(0, 0, 0, 0.1) 0px 2px 4px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px",
            }}
          >
            <Form.Item label="المنطقة" name="city">
              <Select
                size="small"
                options={[
                  {
                    value: "حمص",
                    label: "حمص",
                  },
                  {
                    value: "دمشق",
                    label: "دمشق ",
                  },
                  {
                    value: "طرطوس",
                    label: "طرطوس",
                  },
                  {
                    value: "حلب",
                    label: "حلب",
                  },

                  {
                    value: "اللاذقية",
                    label: "اللاذقية",
                  },
                  {
                    value: "حماة",
                    label: "حماة",
                  },
                  {
                    value: "ادلب",
                    label: "ادلب",
                  },
                  {
                    value: "درعا",
                    label: "درعا",
                  },
                ]}
              ></Select>
            </Form.Item>

            <Form.Item label="ملكية العقار " name="property_status">
              <Select
                size="small"
                options={[
                  {
                    value: "طابو أخضر",
                    label: "طابوأخضر",
                  },
                  {
                    value: "فروغ",
                    label: "فروغ ",
                  },
                  {
                    value: "طابو زراعي",
                    label: "طابو زراعي",
                  },
                  {
                    value: "طابوأسهم",
                    label: "طابو أسهم",
                  },

                  {
                    value: "طابو إسكان",
                    label: "طابو إسكان",
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
                    value: "عقد بيع قطعي",
                    label: "عقد بيع قطعي",
                  },
                ]}
              ></Select>
            </Form.Item>

            <Form.Item label="السعر" name="">
              <ConfigProvider
                theme={{
                  components: {
                    Slider: {
                      handleActiveColor: "#198754",
                      handleColor: "#198754",
                      trackColor: "#198754",
                      dotActiveBorderColor: "#198754",
                      trackBg: "#198754",
                      trackHoverBg: "#198754",
                    },
                  },
                }}
              >
                <Slider
                  style={{
                    marginLeft: 15,
                    marginRight: 15,
                  }}
                  range
                  defaultValue={[100, 50000]}
                  min={0}
                  max={50000}
                  step={500}
                />
              </ConfigProvider>
            </Form.Item>

            <Form.Item label="نوع العقار" name="property_type">
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
            <Form.Item name="plot_area" label="مساحة العقار">
              <InputNumber
                min={40}
                size="small"
                type="number"
                addonAfter="متر"
                className="w-100"
              />
            </Form.Item>

            <Form.Item label="الإكساء:" name="covering">
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
          <div className="affix-buttons my-2 mx-3  w-75 align-items-center ">
            <Button
              size="sm"
              style={{ backgroundColor: "#198754", color: "white" }}
              htmlType="submit"
              block
              // className="my-1"
            >
              <FontAwesomeIcon icon={faSearch} className="mx-2" /> بحث
            </Button>
          </div>
          <div className=" mx-3  w-75 ">
            <Button
              size="sm"
              style={{ backgroundColor: "#198754", color: "white" }}
              // htmlType="submit"
              block
              onClick={clearForm}
            >
              <FontAwesomeIcon icon={faMailReply} className="mx-2" /> إعادة
              تعيين التصفيات
            </Button>
          </div>
        </Form>
      </Affix>
    </div>
  );
}

export default SideBar;
