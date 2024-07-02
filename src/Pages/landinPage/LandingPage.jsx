import { Fragment } from "react";
import "./landingPage.css";
import HeroSection from "./heroSection/HeroSection";
import CategorySection from "./categorySection/CategorySection";
import RentSection from "../RentSection/RentSection";
import SaleSection from "../SaleSection/SaleSection";
import Blogs from "../blogs/Blogs";
import "../../Pages/pages.module.css";
const LandingPage = () => {
  return (
    <div className="bg-light">
      <HeroSection />
      <CategorySection />
      <RentSection />
      <SaleSection />
    </div>
  );
};

export default LandingPage;
