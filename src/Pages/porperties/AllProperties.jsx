import { getProperties } from "../../services/apiProperty";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import Card from "../../components/cards/Card";
import { message, Row } from "antd";
import Loading from "../../components/loading/Loading";
import { useFilter } from "../../context/FilterContext";

function AllProperties() {
  const queryClient = useQueryClient();
  const { filter } = useFilter();
  console.log(filter);
  const query = useQuery({
    queryKey: ["ALL Properties", filter],
    queryFn: () => getProperties(filter),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["ALL Properties"],
      });
    },
  });
  const { data, isLoading, isError, isSuccess, isPending } = query;

  console.log(data);
  if (isLoading || isPending) {
    return <Loading />;
  }
  if (isError) {
    message.error(
      "لا يوجد شبكة, حاول الاتصال بالانترنت ثم قم بإعادة تحميل الصفحة"
    );
    throw new Error("asdasdasd");
  }
  console.log(query);
  if (!data.data.length) {
    return <div className="text-center fs-4 mt-3">لا يوجد هذا التصنيف</div>;
  }

  const showData = data.data.map((item, idx) => {
    return (
      isSuccess && <Card key={idx} rentData={item} style={{ zIndex: "2222" }} />
    );
  });
  return (
    <Row
      gutter={[10, 10]}
      style={{
        // backgroundColor: " rgb(145, 145, 145,0.1)",
        width: "105%",
        zIndex: "-222",
        padding: "10px",
        borderRadius: "15px",
        marginTop: "-7px",
      }}
    >
      {showData}
    </Row>
  );
}

export default AllProperties;
