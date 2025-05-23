import { useCallback, useState } from "react";

interface UseMutateProps<T, P> {
  fn: (params: P) => Promise<T>;
  onSuccess:(data:T)=>void;
}

export default function useMutate<T, P>({ fn ,onSuccess}: UseMutateProps<T, P>) {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const mutate = useCallback(
    async (params: P) => {
      setIsLoading(true);
      setError(null);
      try {
        const result = await fn(params);
        setData(result);
        if(onSuccess){
          onSuccess(result);
        }
        return result;
      } catch (err) {
        if (err instanceof Error) setError(err);
        else setError(new Error("Unknown error"));
        throw err;
      } finally {
        setIsLoading(false);
      }
    },
    [fn,onSuccess]
  );

  return { data, mutate, isLoading, error };
}
