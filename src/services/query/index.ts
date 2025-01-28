import {
  useMutation,
  useQuery,
} from "@tanstack/react-query";
import axios, { AxiosRequestConfig } from "axios";
import Config from "@/utils/config";
const config = new Config().getState();
const instance = axios.create({
  baseURL: config.api.host,
  timeout: 1000,
  headers: { "Content-Type": "application/json" },
});

export const request = async (
  config: AxiosRequestConfig
) => {
  return await instance.request(config);
};
const axiosRequestConfig = (
  config: AxiosRequestConfig
) => {
  const newConfig: AxiosRequestConfig = {
    ...config,
    params:
      config.method === "GET"
        ? config.data
        : undefined,
    data:
      config.method !== "GET"
        ? config.data
        : undefined,
  };
  return newConfig;
};
export interface IResponseData {code: string; data: unknown, message?:string}
export function useGet(
  config: AxiosRequestConfig
) {
  const rs = useQuery({
    queryKey: [config.url],
    queryFn: () =>
      request(axiosRequestConfig(config)),
  });
  return rs;
}

export function useRequest(
  config: AxiosRequestConfig,
  resFunc: Record<string, (res: unknown)=>void>
) {
  return useMutation({
    mutationFn: async (data: unknown) =>{
      console.log('check data', data);
      return await request(
        axiosRequestConfig({
          ...config,
          data,
        })
      )},
    onSuccess: (response: {data: IResponseData}) => {
      try {
        resFunc[response.data.code]?.(response.data.data)
      } catch (error) {
        console.log(error);
      }
    },
  });
}
