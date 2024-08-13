import { Button, ConfigProvider, Form, Input, Select, Slider } from "antd";
import "./searchForm-Style.css";
import { useMutation } from "@tanstack/react-query";
import { getProperties } from "../../../services/apiProperty";
import { useFilter } from "../../../context/FilterContext";
import { useNavigate } from "react-router-dom";
const SearchForm = () => {
  const { filter, setFilter } = useFilter();
  const navigate = useNavigate();

  const { mutate, isLoading } = useMutation({
    mutationFn: (values) => getProperties(values),
  });
  function handleSubmit(values) {
    console.log(values);
    setFilter((prevState) => ({
      ...prevState,
      property_status: values.property_status,
      city: values.city,
    }));
    mutate(values);
    setTimeout(() => {
      // Navigate to RentPage after setting the filter and waiting for 1-2 seconds
      navigate("/rent"); // Adjust '/rentpage' to the actual path of your RentPage
    }, 1000);
  }

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="container">
      <div className="landing">
        <h3 className="text-light" style={{ marginTop: "100px" }}>
          ما الذي تبحث عنه؟
        </h3>
        <div className="form">
          <Form
            className=" p-3 gap-4 "
            size="small"
            layout="vertical"
            onFinish={handleSubmit}
            onFinishFailed={onFinishFailed}
          >
            <Form.Item
              label="العنوان"
              name="city"
              rules={[
                {
                  required: true,
                  message: "من فضلك ادخل المدينة",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="حالة العقار :"
              name="property_status"
              rules={[
                {
                  required: true,
                  message: "من فضلك حدد حالة العقار",
                },
              ]}
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
            <Form.Item label="السعر">
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
                  style={{ marginRight: 10 }}
                  range
                  defaultValue={[100, 50000]}
                  min={0}
                  max={50000}
                  step={500}
                />
              </ConfigProvider>
            </Form.Item>
            <Form.Item>
              <button
                size="small"
                className="btn btn-success d-block w-100  "
                // style={{ backgroundColor: "#198754", color: "white" }}
                // htmlType="submit"
                // block
                // onClick={() => {
                //   mutation.mutate({ id: showPropertyDetail.id });
                // }}
              >
                بحث
              </button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default SearchForm;
