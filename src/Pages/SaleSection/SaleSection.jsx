import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import cardImage from "../../assets/download.jpeg";
import { faBath } from "@fortawesome/free-solid-svg-icons";
import { Button } from "react-bootstrap";
import Btn from "../../components/Button/Btn";
import ShowAll from "../../components/ShowAll/ShowAll";
import { Link } from "react-router-dom";
import PropertyCard from "../../components/cards/PropertyCard";

function SaleSection() {
  return (
    <div className=" p-5 bg-light">
      <div className="container ">
        <div className="text-center">
          <h3 className=" text-center">عقارات للبيع:</h3>
        </div>
        <div className="text-center align-content-center align-items-center mt-4 fs-6  ">
          متوفر الآن مجموعة متنوعة من عقارات الايجار في جميع أنحاء سوريا. شقق
          رخيصة للايجار الشهري واليومي. فريق هاوس تك يضمن مساعدتك للوصول للعقار
          المثالي الذي يلبي احتياجاتك، والتفاوض للحصول على السعر المناسب
        </div>
        <PropertyCard property_status={"For Sale"} />
        <hr className="mt-5 bg-light" />
      </div>
    </div>
  );
}

export default SaleSection;
