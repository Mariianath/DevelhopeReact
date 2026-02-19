import useSWR from "swr";

function useBotReply(trigger) {
  const endpoint = trigger
    ? "https://mocki.io/v1/YOUR-MOCK-Ihttps://mocki.io/v1/bb64191b-27de-46b5-84ed-6741a550684e"
    : null;

  const { data, error, isLoading, mutate } = useSWR(endpoint);

  return {
    reply: data,
    error,
    isLoading,
    refetch: mutate
  };
}

export default useBotReply;
