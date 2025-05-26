import axios from "axios";
import useFetch from "../../hooks/useFetch";
import Concatenate from "../../utility/concatenate";
import { apiPaths } from "../../constants/apiPath";

export default function Home() {
  const Products = async () => {
    const response = await axios.get(
      Concatenate(import.meta.env.VITE_API_DOMAIN, apiPaths.user)
    );
    return response.data;
  };
  const { data, isLoading, error } = useFetch({
    fn: Products,
  });
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!data) return <div>No data</div>;
  return (
    <>
      {data.map((value) => (
        <div key={value.id}>{value}</div>
      ))}
    </>
  );
}
