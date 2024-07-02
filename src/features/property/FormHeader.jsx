import { Avatar } from "antd";
import "./property.css";
function FormHeader({ text, icon }) {
  return (
    <div className="property-header ">
      <p className="fs-6 fw-bold">
        <Avatar className="mx-2">{icon}</Avatar>
        {text}
      </p>
    </div>
  );
}

export default FormHeader;
