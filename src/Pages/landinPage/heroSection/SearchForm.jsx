import { Button, ConfigProvider, Form, Input, Select, Slider } from "antd";
import "./searchForm-Style.css";
import axios from "axios";
import { BASE, GET_ALL_PROPS } from "../../../Auth/API";
const SearchForm = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
    const price_lt = values.price[0];
    const price_gt = values.price[1];

    console.log(price_lt);
    console.log(price_gt);

    try {
      const res = axios
        .get(`${BASE}/${GET_ALL_PROPS}/`, {
          params: {
            price_gt,
            price_lt,
            city: values.city,
            property_status: values.property_status,
          },
        })
        .then((data) => console.log(data));
    } catch (err) {
      console.log(err);
    }
  };
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
            onFinish={onFinish}
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
              name={"property_status"}
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
            <Form.Item
              label="السعر"
              name="price"
              rules={[
                {
                  required: true,
                  // message: "Please input your username!",
                },
              ]}
            >
              <ConfigProvider
                theme={{
                  components: {
                    Slider: {
                      handleActiveColor: "#9daf9c",
                      handleColor: "#9daf9c",
                      trackColor: "#9daf9c",
                      dotActiveBorderColor: "#9daf9c",
                      trackBg: "#9daf9c",
                      trackHoverBg: "#9daf9c",
                    },
                  },
                }}
              >
                <Slider
                  range
                  defaultValue={[50, 50000]}
                  min={500}
                  max={50000}
                  step={500}
                  // color="#9daf9c"
                />
              </ConfigProvider>
            </Form.Item>
            <Form.Item>
              <Button
                size="sm"
                className="btn"
                style={{ backgroundColor: "#9daf9c", color: "white" }}
                // type="primary"
                htmlType="submit"
                block
              >
                بحث
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default SearchForm;
// <form className="form ">
// <div className="form-control">
//   <label htmlFor="staticEmail2" className="text-dark fs-6">
//     Rent/Sale?
//   </label>
//   <input
//     type="text"
//     // className="form-control"
//     id="staticEmail2"
//     required
//   />
// </div>
// <div className="form-control">
//   <label htmlFor="inputPassword2 " className="text-dark fs-6">
//     Price
//   </label>
//   <input
//     type="text"
//     // className="form-control"
//     id="inputPassword2"
//     placeholder="Password"
//     required
//   />
// </div>
// <div className="form-control">
//   <label htmlFor="inputPassword2">Password</label>
//   <input
//     type="password"
//     // className="form-control"
//     id="inputPassword2"
//     placeholder="Password"
//     required
//   />
// </div>
// <div className="form-control">
//   <button className="btn btn-primary w-100">Search</button>
// </div>
// </form>
