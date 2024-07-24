// import axios from "axios";
import { useState, useEffect } from "react";
// import "../../../node_modules/bootstrap/dist/css/bootstrap.css";
import "./signup.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Loading from "../components/loading/Loading";

import logo from "../assets/IMG-20231031-WA0001.jpg";
import { Button, Form, Input, message } from "antd";
import { BASE, REGiSTER } from "./API";
const SignUp = () => {
  const [error, setError] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [firstName, setFirstName] = useState("");

  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    try {
      setIsLoading(true);
      const response = await axios
        .post(
          `${BASE}/${REGiSTER}`,
          // formData,
          {
            email,
            first_name: firstName,
            last_name: lastName,
            password,
            password2,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((data) => {
          setIsLoading(false);
          message.success("تم تسجيل الحساب, قم بالتحقق من الايميل الخاص بك");
          navigate("/verify");
        });
    } catch (err) {
      setIsLoading(false);
      if (err.response.data.non_field_errors === "passwords do not match")
        message.error("كلمة المرور غير مطابقة");
      setIsLoading(false);
      console.error(err);
      setError("Error signing up");
    }
  };

  // useEffect(() => {
  //   // if (password != confirmPassword) {
  //   //   setError("passwards not match");
  //   // }
  // }, [error]);

  useEffect(() => {
    if (isSubmitted) {
      // setUsername("");
      setEmail("");
      setPassword("");
      // setConfirmPassword("");
      setError("");
      setIsSubmitted(false);
    }
  }, [isSubmitted]);

  return (
    <>
      {isLoading && <Loading />}
      <div className="page">
        <Form
          labelCol={{ span: 5 }}
          // wrapperCol={{ span: 15 }}
          className="formStyle"
          onFinish={handleSubmit}
        >
          <h2 className="text-center pb-4">تسجيل حساب جديد</h2>
          <Form.Item
            name="fullName"
            label="الاسم الأول"
            labelAlign="left"
            rules={[
              {
                required: true,
                message: "هذا الحقل مطلوب",
              },
              { whitespace: true, message: "هذا الحقل مطلوب" },
              { min: 2, message: "الاسم يجب أن يكون أكثر من حرف" },
            ]}
            hasFeedback
          >
            <Input
              placeholder="ادخل الاسم الاول "
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </Form.Item>
          <Form.Item
            labelAlign="left"
            name="lastName"
            label="الاسم الأخير"
            rules={[
              {
                required: true,
                message: "هذا الحقل مطلوب",
              },
              { whitespace: true, message: "هذا الحقل مطلوب" },
              { min: 2, message: "الاسم يجب أن يكون أكثر من حرف" },
            ]}
            hasFeedback
          >
            <Input
              placeholder="ادخل الاسم الأخير "
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </Form.Item>
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
          <Form.Item
            labelAlign="left"
            name="confirmPassword"
            label=" تأكيد كلمة المرور"
            dependencies={["password"]}
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
              value={password2}
              onChange={(e) => setPassword2(e.target.value)}
              placeholder="قم بتأكيد كلمة المرور..   "
            />
          </Form.Item>
          <div className="text-center m-auto">
            <Form.Item
              wrapperCol={{ span: 25 }}
              className=" d-flex align-items-center justify-content-center "
            >
              <Button type="primary" htmlType="submit" block>
                إنشاء حساب
              </Button>
            </Form.Item>
            <p className="fs-6">
              هل لديك حساب؟ قم بالضغط هنا{" "}
              <Link to={"/login"}>لتسجيل الدخول</Link>
            </p>
          </div>
        </Form>
      </div>
    </>
  );
};

export default SignUp;
