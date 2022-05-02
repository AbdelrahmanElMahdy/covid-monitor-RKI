import { Case, Death, LineChartInstance, Recovered } from "../types/types";
export const prepareForLineChart = (
  conditions: Case[] | Death[] | Recovered[],
  condition_key: string,
  borderColor: { r: number; g: number; b: number; t: number },
  backgroundColor: { r: number; g: number; b: number; t: number }
) => {
  let data: LineChartInstance = {
    data: conditions.map((condition) => condition[condition_key]),
    label: condition_key.toUpperCase(),
    borderColor: `rgb(${borderColor.r},${borderColor.g} , ${borderColor.b},${borderColor.t})`,
    backgroundColor: `rgb(${backgroundColor.r},${backgroundColor.g} , ${backgroundColor.b},${backgroundColor.t})`,
  };

  return data;
};

export const getDates = (conditions: Case[]) =>
  conditions.map((condition) => `day ${new Date(condition.date).getDate()}`);
