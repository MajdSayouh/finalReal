import { Spin } from "antd";
import "./loading.css";
function Loading() {
  return (
    <div className="spinner-container-submit">
      <Spin size="large" />
    </div>
  );
}

export default Loading;
