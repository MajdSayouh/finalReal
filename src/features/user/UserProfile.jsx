import NavBar from "../../components/navbar/NavBar";
import { Form, Avatar, Input, Button, Select, Row, Col, Radio } from "antd";
import "./profile.css";

import { useEffect, useState } from "react";
import axios from "axios";
import { UPDATE_PROFILE, BASE, GET_USER } from "../../Auth/API";
import Cookie from "cookie-universal";

function UserProfile() {
  const [userData, setUserData] = useState({});
  const [form] = Form.useForm();
  const token = new Cookie().get("Token");
  const [prop, setProp] = useState({
    is_buyer: false,
    is_seller: false,
    is_agent: false,
  });

  useEffect(() => {
    const getUserData = async () => {
      try {
        const res = await axios.get(`${BASE}/${GET_USER}`, {
          headers: { Authorization: `Token ${token}` },
        });
        setUserData(res.data.profile);
        form.setFieldsValue({
          user: {
            first_name: res.data.profile.first_name,
            last_name: res.data.profile.last_name,
          },
          email: res.data.profile.email,
          password: res.data.profile.password,
          phone_number: res.data.profile.phone_number,
          gender: res.data.profile.gender,
          about_me: res.data.profile.about_me,
          city: res.data.profile.city,
          is_agent: res.data.profile.is_agent,
          is_buyer: res.data.profile.is_buyer,
          is_seller: res.data.profile.is_seller,
          profile_photo: res.data.profile.profile_photo,
        });
        console.log(res);
      } catch (err) {
        console.log(err);
      }
    };
    getUserData();
  }, [form]);

  const handleUpdate = async (values) => {
    console.log(prop);

    console.log(prop.is_buyer);
    try {
      const dataToSend = {
        user: {
          first_name: values.user.first_name,
          last_name: values.user.last_name,
        },
        email: values.email,
        password: values.password,
        city: values.city,
        is_agent: prop.is_agent,
        is_buyer: prop.is_buyer,
        is_seller: prop.is_seller,
        gender: values.gender,
        phone_number: values.phone_number,
        about_me: values.about_me,
      };

      const res = await axios.patch(`${BASE}/${UPDATE_PROFILE}`, dataToSend, {
        headers: { Authorization: `Token ${token}` },
      });
      console.log(res);
      console.log(prop);
      console.log(prop.is_buyer);
    } catch (err) {
      console.log(err);
    }
  };
  console.log(prop);

  return (
    <div>
      <NavBar />
      <div className="page-profile">
        <Form
          form={form}
          className="formStyle"
          layout="vertical"
          onFinish={handleUpdate}
        >
          <div className="profile-header">
            <p className="fs-4">
              {/*
             <Avatar
                icon={<UserOutlined />}
                style={{
                  backgroundColor: "#87d068",
                  marginLeft: "10px",
                }}
              />
            */}
              <img
                src={userData.profile_photo}
                alt="image"
                width="50px"
                className="m-0"
              />
              تفاصيل الحساب
            </p>
          </div>
          <div>
            <Row gutter={8}>
              <Col xs={24} sm={12} md={12} lg={12} xl={12}>
                <Form.Item label="الاسم الاول" name={["user", "first_name"]}>
                  <Input />
                </Form.Item>
              </Col>
              <Col xs={24} sm={12} md={12} lg={12} xl={12}>
                <Form.Item label="الاسم الأخير" name={["user", "last_name"]}>
                  <Input />
                </Form.Item>
              </Col>
            </Row>
            <Form.Item label="البريد الالكتروني" name="email">
              <Input />
            </Form.Item>
            <Form.Item label="رقم الموبايل" name="phone_number">
              <Input />
            </Form.Item>

            <Row gutter={5}>
              <Col xs={8} sm={8} lg={8} xl={8} xxl={8}>
                <Form.Item name="gender" label="الجنس">
                  <Select>
                    <Select.Option value="Male">ذكر</Select.Option>
                    <Select.Option value="Female">انثى</Select.Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col xs={8} sm={8} lg={8} xl={8} xxl={8}>
                <Form.Item name="city" label="المدينة">
                  <Select>{/* Add your city options here */}</Select>
                </Form.Item>
              </Col>
              <Col xs={8} sm={8} lg={8} xl={8} xxl={8}>
                <Form.Item label="نوع المستخدم">
                  <Radio.Group
                    onChange={(e) => {
                      setProp((prevProp) => ({
                        ...prevProp,
                        [e.target.value]: true,
                        is_buyer: e.target.value === "is_buyer",
                        is_seller: e.target.value === "is_seller",
                        is_agent: e.target.value === "is_agent",
                      }));
                    }}
                  >
                    <Radio.Button name="is_seller" value="is_seller">
                      بائع
                    </Radio.Button>
                    <Radio.Button name="is_buyer" value="is_buyer">
                      مشتري
                    </Radio.Button>
                    <Radio.Button name="is_agent" value="is_agent">
                      زائر
                    </Radio.Button>
                  </Radio.Group>
                </Form.Item>
              </Col>
            </Row>

            <Form.Item name="about_me" label="تفاصيل">
              <Input.TextArea showCount maxLength={100} />
            </Form.Item>
            <Form.Item wrapperCol={{ span: 24 }}>
              <Button type="primary" htmlType="submit" block>
                تعديل
              </Button>
            </Form.Item>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default UserProfile;

// <Form
// labelCol={{ span: 5 }}
// wrapperCol={{ span: 22 }}
// className="formStyle"
// // onFinish={handleSubmit}
// >
// <h2 className="text-center pb-4">تسجيل الدخول</h2>
// <Form.Item
//   labelAlign="right"
//   name="email"
//   label="البريد الالكتروني "
//   rules={[
//     {
//       required: true,
//       message: "هذا الحقل مطلوب",
//     },
//     { type: "email", message: "هذا الحقل مطلوب" },
//   ]}
//   hasFeedback
//   prefixCls="majd"
// >
//   <Input
//     placeholder="ادخل البريد الالكتروني "
//     // value={email}
//     // onChange={(e) => setEmail(e.target.value)}
//   />
// </Form.Item>
// <Form.Item
//   labelAlign="left"
//   name="password"
//   label="كلمة المرور"
//   rules={[
//     {
//       required: true,
//       message: "هذا الحقل مطلوب",
//     },
//     { min: 6, message: "كلمة السر يجب أن تكون 6 احرف او اكثر" },
//   ]}
//   hasFeedback
// >
//   <Input.Password
//     placeholder="ادخل كلمة المرور "
//     // value={password}
//     // onChange={(e) => setPassword(e.target.value)}
//   />
// </Form.Item>
// <div className="d-flex align-items-center justify-content-center flex-column">
//   <Form.Item wrapperCol={{ span: 24 }}>
//     <Button type="primary" htmlType="submit" block>
//       تسجيل الدخول
//     </Button>
//   </Form.Item>
//   <p className="fs-6">
//     ليس لديك حساب؟ <Link to="/sign-up">سجل الان</Link>
//   </p>
// </div>
// </Form>
