import React from 'react';

export function useFetch(
  fetchMethod: () => Promise<any>,
  options: {
    retries?: number;
    enabled?: boolean;
  } = { retries: 3, enabled: true }
) {
  const [data, setData] = React.useState<any | null>(null);
  const [loading, setLoading] = React.useState<boolean>(true);
  const [error, setError] = React.useState<Error | null>(null);

  React.useEffect(() => {
    if (!options.enabled) {
      setLoading(false);
      return;
    }
    let isMounted = true;

    fetchMethod()
      .then((responseData) => {
        if (isMounted) {
          setData(responseData);
          setLoading(false);
        }
      })
      .catch((err) => {
        if (isMounted) {
          setError(err);
          setLoading(false);
        }
        if (options.retries && options.retries > 0) {
          useFetch(fetchMethod, { ...options, retries: options.retries - 1 });
        }
      });

    return () => {
      isMounted = false;
    };
  }, [fetchMethod]);

  return { data, loading, error };
}
