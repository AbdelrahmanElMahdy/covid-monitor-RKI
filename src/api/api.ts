import axios, { Method, AxiosResponse } from "axios";
import { Case, ConditionResponse, Death, Recovered } from "../types/types";
import 'dotenv/config'
const api = axios.create({
  baseURL: process.env.REACT_APP_BACK_END_API,
});

export const request = <T>(
  method: Method,
  url: string,
  params: any
): Promise<AxiosResponse<T>> => {
  return api.request<T>({
    method,
    url,
    params,
  });
};

export const getConditionFromDayAgo = async (
  condition: string,
  day: number
) => {
  let response: any = await request(
    "GET",
    `/germany/history/${condition}/${day}`,
    {}
  );
  let data: ConditionResponse = response.data;
  let target: Case[] | Recovered[] | Death[] = data.data;
  return target;
};
