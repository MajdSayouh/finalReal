import "./landingPage.css";
import HeroSection from "./heroSection/HeroSection";
import CategorySection from "./categorySection/CategorySection";
import RentSection from "../RentSection/RentSection";
import SaleSection from "../SaleSection/SaleSection";
import "../../Pages/pages.module.css";
import { FilterProvider } from "../../context/FilterContext";
const LandingPage = () => {
  return (
    <div className="bg-light">
      <FilterProvider>
        <HeroSection />
        <CategorySection />
        <RentSection />
        <SaleSection />
      </FilterProvider>
    </div>
  );
};

export default LandingPage;
