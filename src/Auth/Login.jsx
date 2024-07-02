import { useState, Fragment } from "react";
import "./signup.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Button, Form, Input, Spin, message } from "antd";

import { BASE } from "./API";

import Cookie from "cookie-universal";

const Login = () => {
  const [error, setError] = useState("");
  // const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(false);

  const cookie = new Cookie();
  // const token = cookie.set("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    // e.preventDefault();
    console.log("sad");

    try {
      setIsLoading(true);
      const response = await axios
        .post(
          `${BASE}/auth/login/`,
          { email, password },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((data) => {
          setIsLoading(false);
          cookie.set("Token", data.data.token, {
            expires: new Date(Date.now() + 25920000 * 860),
          });
          // console.log(data.token);

          message.success("تم تسجيل الدخول بنجاح");
          console.log(data);
          navigate("/");
        });
    } catch (err) {
      if (err.response.status === 403)
        message.error("تحقق من الايميل او كلمة المرور");
      setIsLoading(false);

      console.error(err);
      setError(err.message);
    }
  };

  //change States

  // const onFinish = (values) => {
  //   console.log("Success:", values);
  // };
  // const onFinishFailed = (errorInfo) => {
  //   console.log("Failed:", errorInfo);
  // };
  return (
    <Fragment>
      {isLoading ? (
        <Spin>
          {" "}
          <div className="page">
            <Form
              labelCol={{ span: 5 }}
              // wrapperCol={{ span: 15 }}
              className="formStyle"
              onFinish={handleSubmit}
            >
              <h2 className="text-center pb-4">تسجيل الدخول</h2>
              <Form.Item
                labelAlign="left"
                name="email"
                label="البريد الالكتروني "
                rules={[
                  {
                    required: true,
                    message: "هذا الحقل مطلوب",
                  },
                  { type: "email", message: "هذا الحقل مطلوب" },
                ]}
                hasFeedback
              >
                <Input
                  placeholder="ادخل البريد الالكتروني "
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Item>
              <Form.Item
                labelAlign="left"
                name="password"
                label="كلمة المرور"
                rules={[
                  {
                    required: true,
                    message: "هذا الحقل مطلوب",
                  },
                  { min: 6, message: "كلمة السر يجب أن تكون 6 احرف او اكثر" },
                ]}
                hasFeedback
              >
                <Input.Password
                  placeholder="ادخل كلمة المرور "
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Item>
              <div className="d-flex align-items-center justify-content-center flex-column">
                <Form.Item wrapperCol={{ span: 24 }}>
                  <Button type="primary" htmlType="submit" block>
                    تسجيل الدخول
                  </Button>
                </Form.Item>
                <p className="fs-6">
                  ليس لديك حساب؟ <Link to="/sign-up">سجل الان</Link>
                </p>
              </div>
            </Form>
          </div>
        </Spin>
      ) : (
        <div className="page">
          <Form
            labelCol={{ span: 5 }}
            // wrapperCol={{ span: 15 }}
            className="formStyle"
            onFinish={handleSubmit}
          >
            <h2 className="text-center pb-4">تسجيل الدخول</h2>
            <Form.Item
              labelAlign="left"
              name="email"
              label="البريد الالكتروني "
              rules={[
                {
                  required: true,
                  message: "هذا الحقل مطلوب",
                },
                { type: "email", message: "هذا الحقل مطلوب" },
              ]}
              hasFeedback
            >
              <Input
                placeholder="ادخل البريد الالكتروني "
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Item>
            <Form.Item
              labelAlign="left"
              name="password"
              label="كلمة المرور"
              rules={[
                {
                  required: true,
                  message: "هذا الحقل مطلوب",
                },
                { min: 6, message: "كلمة السر يجب أن تكون 6 احرف او اكثر" },
              ]}
              hasFeedback
            >
              <Input.Password
                placeholder="ادخل كلمة المرور "
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Item>
            <div className="d-flex align-items-center justify-content-center flex-column">
              <Form.Item wrapperCol={{ span: 24 }}>
                <Button type="primary" htmlType="submit" block>
                  تسجيل الدخول
                </Button>
              </Form.Item>
              <p className="fs-6">
                ليس لديك حساب؟ <Link to="/sign-up">سجل الان</Link>
              </p>
            </div>
          </Form>
        </div>
      )}
    </Fragment>
  );
};

export default Login;
