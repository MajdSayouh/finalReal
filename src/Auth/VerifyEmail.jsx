import axios from "axios";
import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Loading from "../Pages/loading/Loading";
import logo from "../assets/IMG-20231031-WA0001.jpg";
import { Button, Form, Input, message } from "antd";
import { BASE } from "./API";

function VerifyEmail() {
  //   const [form, setForm] = useState({
  //     email: "",
  //     password: "",
  //   });
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  //   const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleVerify = async (e) => {
    // e.preventDefault();
    setIsLoading(true);

    try {
      const response = await axios
        .post(
          `${BASE}/auth/verify-email/`,
          { email, otp },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then(() => {
          setIsLoading(true);
          message.success("تم التحقق من الحساب , قم بتسجيل الدخول");
          navigate("/login");
        });
    } catch (err) {
      if (
        err.response.data.message ===
        "Passcode is invalid or not associated with the user"
      ) {
        message.error("الرمز غير صحيح");
        console.log("first");
      }
    }
  };

  //change States
  //   function handleOnChange(e) {
  //     setForm({ [e.target.name]: e.target.value });
  //   <h1 className="form-title">Login to Your Account</h1>
  //   }
  return (
    <>
      {isLoading && <Loading />}
      <div className="page">
        <Form
          labelCol={{ span: 5 }}
          // wrapperCol={{ span: 15 }}
          className="formStyle"
          onFinish={handleVerify}
        >
          <h2 className="text-center pb-4">صفحة التحقق</h2>
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
            name="otp"
            label="رمز التحقق"
            rules={[
              {
                required: true,
                message: "هذا الحقل مطلوب",
              },
              { min: 3, message: "كلمة السر يجب أن تكون 3 احرف او اكثر" },
            ]}
            hasFeedback
          >
            <Input
              placeholder="XXXXX"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />
          </Form.Item>

          <Form.Item wrapperCol={{ span: 24 }} labelAlign="start">
            <Button type="primary" htmlType="submit" block>
              تحقق
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
}

export default VerifyEmail;
