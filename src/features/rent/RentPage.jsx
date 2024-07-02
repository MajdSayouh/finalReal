import { Outlet } from "react-router-dom";
import TopBar from "../../components/RentDesign/TopBar";
import SideBar from "../../components/RentDesign/SideBar";
import NavBar from "../../components/navbar/NavBar";
import { Col, Row } from "antd";

function RentPage() {
  return (
    <div>
      <NavBar />
      <TopBar />
      <Row gutter={50}>
        <Col
          className="bg-light border border-3"
          xs={24}
          sm={24}
          md={12}
          xl={6}
          xxl={6}
        >
          <SideBar />
        </Col>
        <Col style={{ backgroundColor: "rgb(201, 234, 201)" }}>
          <h1>jhnikb</h1>
        </Col>
      </Row>
    </div>
  );
}

export default RentPage;
