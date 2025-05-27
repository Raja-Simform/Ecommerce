import useFetch from "../../hooks/useFetch";
import { apiPaths } from "../../constants/apiPath";
import { axiosInstance } from "../../config/axios.config";
import Card from "../../components/Card/Card";
import type ApiResponse from "./HomeType";

export default function Home() {
  const { data, isLoading, error } = useFetch({
    fn: (): Promise<ApiResponse> => {
      return axiosInstance
        .get<ApiResponse>(apiPaths.user)
        .then((res) => res.data);
    },
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!data) return <div>No data</div>;

  return <Card products={data.data} />;
}
