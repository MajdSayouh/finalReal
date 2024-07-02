import { Form, Input } from "antd";
import FormItem from "antd/es/form/FormItem";

import "./rent.css";

function SideBar() {
  return (
    <div className="p-3">
      <Form layout="vertical">
        <Form.Item>
          <Input
            variant="borderless"
            className="input-form"
            onFocus={() =>
              document.querySelector(".label-form").classList.add("focused")
            }
            onBlur={() =>
              document.querySelector(".label-form").classList.remove("focused")
            }
          />
          <span className="label-form">المنطقة</span>
        </Form.Item>
      </Form>
    </div>
  );
}

export default SideBar;
