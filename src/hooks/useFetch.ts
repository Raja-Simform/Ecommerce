import { useCallback, useEffect, useRef, useState } from "react";

interface useFetchProps<T> {
  fn: (value?: string) => Promise<T>;
  enabled?: boolean;
}
export default function useFetch<T>({ fn, enabled = true }: useFetchProps<T>) {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const ref = useRef(fn);

  const fetchData = useCallback(async (value?: string) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await ref.current(value);
      setData(response);
    } catch (err) {
      if (err instanceof Error) {
        setError(err);
      } else {
        setError(new Error("Unknown error"));
      }
    } finally {
      setIsLoading(false);
    }
  }, []);
  useEffect(() => {
    if (enabled) {
      fetchData();
    }
  }, [enabled, fetchData]);
  const refetch = fetchData;

  return { data, refetch, isLoading, error };
}
