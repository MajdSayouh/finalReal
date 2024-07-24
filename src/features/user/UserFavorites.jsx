import { useQuery } from "@tanstack/react-query";
import { getFavouritsProperties } from "../../services/apiProperty";
import Loading from "../../components/loading/Loading";
import { Row } from "antd";

import Card from "../../components/cards/Card";

function UserFavorites() {
  const favoriteQuery = useQuery({
    queryKey: ["Favorite Properties"],
    queryFn: () => getFavouritsProperties(),
  });

  console.log(favoriteQuery);
  const { isPending, isLoading, isError, isSuccess, error } = favoriteQuery;

  if (isLoading || isPending) return <Loading />;
  if (isError) console.log(error);
  if (favoriteQuery.data?.data.length === 0)
    return (
      <div className="m-auto fs-5 p-5 text-center">
        لا يوجد عقارات قمت بإضافتها للمفضلة
      </div>
    );
  const showFavorites = favoriteQuery.data?.data.map((prop, idx) => {
    console.log(prop.property);
    return <Card data={prop.property} key={idx} />;
  });

  return (
    <div className=" bg-light  p-4">
      <Row gutter={[20, 20]}>{isSuccess && showFavorites}</Row>
    </div>
  );
}

export default UserFavorites;
