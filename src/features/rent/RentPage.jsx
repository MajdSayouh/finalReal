import { Outlet } from "react-router-dom";
import TopBar from "../../components/RentDesign/TopBar";
import SideBar from "../../components/RentDesign/SideBar";
import NavBar from "../../components/navbar/NavBar";
import { Col, Row } from "antd";
import { FilterProvider } from "../../context/FilterContext";

function RentPage() {
  return (
    <div>
      <NavBar />
      <FilterProvider>
        <TopBar />
        <Row>
          <Col>
            <SideBar />
          </Col>
          <Col xs={24} sm={24} md={18} xl={17} xxl={18} className="p-2 ">
            <Outlet />
          </Col>
        </Row>
      </FilterProvider>
    </div>
  );
}

export default RentPage;
