import OApi from "../services";
import { useQuery } from "@tanstack/react-query";

export const useProfile = () => {
  const { data, ...rest } = useQuery(["getProfile"], OApi.me.getProfile, {
    retry: 0,
    refetchInterval: 15000,
  });
  const isLogged = !!data?.data;

  return {
    //@ts-ignore
    dataUser: data?.data.data,
    isLogged,
    ...rest,
  };
};
