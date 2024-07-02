/* eslint-disable no-unused-vars */
import PropertyCard from "../../components/cards/PropertyCard";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getProperties } from "../../services/apiProperty";

function RentSection() {
  const queryClient = useQueryClient();
  const query = useQuery({
    queryKey: ["properties"],
    queryFn: getProperties,
  });
  console.log(query);
  return (
    <div className=" p-5 bg-light">
      <div className="container ">
        <div className="text-center ">
          <h3>عقارات للإيجار:</h3>
        </div>
        <div className="text-center align-content-center align-items-center mt-4 fs-6  ">
          متوفر الآن مجموعة متنوعة من عقارات الايجار في جميع أنحاء سوريا. شقق
          رخيصة للايجار الشهري واليومي. فريق هاوس تك يضمن مساعدتك للوصول للعقار
          المثالي الذي يلبي احتياجاتك، والتفاوض للحصول على السعر المناسب
        </div>
        
          <PropertyCard property_status={"For Rent"} />
        

        <hr className="mt-5 bg-light" />
      </div>
    </div>
  );
}

export default RentSection;
