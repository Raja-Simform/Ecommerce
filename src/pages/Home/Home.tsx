import useFetch from "../../hooks/useFetch";
import { apiPaths } from "../../constants/apiPath";
import { axiosInstance } from "../../config/axios.config";
import Card from "../../components/Card/Card";
import type ApiResponse from "./HomeType";

export default function Home() {
  const fetchProducts = async (): Promise<ApiResponse> => {
    const response = await axiosInstance.get<ApiResponse>(apiPaths.user);
    return response.data;
  };

  const { data, isLoading, error } = useFetch({
    fn: fetchProducts,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!data) return <div>No data</div>;

  return <Card Products={data.data} />;
}
