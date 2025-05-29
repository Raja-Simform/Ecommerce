import useFetch from "../../hooks/useFetch";
import { apiPaths } from "../../constants/apiPath";
import { axiosInstance } from "../../config/axios.config";
import Card from "../../components/Card/Card";
import type ApiResponse from "./HomeType";
import Filter from "../../components/Filter/Filter";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";

export default function Home() {
  const [searchData] = useSearchParams();
  const search = searchData.get("search");
  const { data, isLoading, error, refetch } = useFetch({
    fn: (searchData): Promise<ApiResponse> => {
      return axiosInstance
        .get<ApiResponse>(apiPaths.user, { params: { search: searchData } })
        .then((res) => res.data);
    },
  });
  useEffect(() => {
    refetch(search ?? "");
  }, [refetch, search]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!data) return <div>No data</div>;

  return (
    <div className="flex ">
      <Filter />
      <Card products={data.data} />;
    </div>
  );
}
