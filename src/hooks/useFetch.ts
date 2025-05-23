import { useCallback, useEffect, useRef, useState } from "react";

interface useFetchProps<T,P> {
  fn: (params:P) => Promise<T>;
  enabled:boolean;
  params?:P;
}
export default function useFetch<T,P>({ fn,enabled,params}: useFetchProps<T,P>) {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const ref=useRef(fn);

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const Data = await ref.current(params as P);
      setData(Data);
    } catch (err) {
      if (err instanceof Error) {
        setError(err);
      } else {
        setError(new Error("Unknown error"));
      }
    } finally {
      setIsLoading(false);
    }
  }, [params]);
  useEffect(() => {
    if (enabled) {
      fetchData();
    }
  }, [enabled, fetchData]);
  const refetch = useCallback(() => {
    return fetchData();
  }, [fetchData]);

  const mutate = useCallback(
    async (params: P) => {
      setIsLoading(true);
      setError(null);
      try {
        const result = await ref.current(params);
        setData(result);
        return result;
      } catch (err) {
        if (err instanceof Error) setError(err);
        else setError(new Error("Unknown error"));
        throw err;
      } finally {
        setIsLoading(false);
      }
    },
    []
  );

  return { data, refetch, isLoading, error ,mutate};
}
