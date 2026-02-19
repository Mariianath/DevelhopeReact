import useSWR from "swr";

function useGithubUser(username) {
  const key = username ? `https://api.github.com/users/${username}` : null;

  const { data, error, isLoading, mutate } = useSWR(key);

  const refetch = () => {
    mutate();
  };

  return {
    user: data,
    error,
    isLoading,
    refetch
  };
}

export default useGithubUser;
