// import Card from "../../components/cards/Card";
import { useQuery } from "@tanstack/react-query";
import { getProperties } from "../../services/apiProperty";
// import Loading from "../loading/Loading";
import PropertyCard from "../../components/cards/PropertyCard";

function SaleSection() {
  const saleQuery = useQuery({
    queryKey: ["Sale Properties"],
    queryFn: () => getProperties("for sale"),
  });
  // console.log(saleQuery);
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
        <PropertyCard rentData={saleQuery} />

        <hr className="mt-5 bg-light" />
      </div>
    </div>
  );
}

export default SaleSection;
