import { useQuery } from "@tanstack/react-query";
import { getUserProperty } from "../../services/apiProperty";
import Loading from "../../components/loading/Loading";
import { Row } from "antd";

// import Card from "../../components/cards/Card";
import PropertyCard from "../../components/cards/PropertyCard";
import Card from "../../components/cards/Card";

function UserAdedProperties() {
  const userPropertyQuery = useQuery({
    queryKey: ["userProperties"],
    queryFn: () => getUserProperty(),
  });
  console.log(userPropertyQuery);
  // const { isSuccess } = userPropertyQuery;
  const { isLoading, isPending, isError, isSuccess } = userPropertyQuery;

  if (isError) throw new Error("Error");
  if ((isLoading, isPending)) return <Loading />;
  const userPropertyShow = userPropertyQuery.data.data?.map((prop, idx) => {
    if (userPropertyQuery.data?.data.length === 0)
      return <div key={idx}>لايوجد عقارات</div>;
    return <Card rentData={prop} key={idx} />;
  });

  return (
    <div className=" bg-light  p-4">
      <Row gutter={[20, 20]}>{isSuccess && userPropertyShow}</Row>
    </div>
  );
}

export default UserAdedProperties;
