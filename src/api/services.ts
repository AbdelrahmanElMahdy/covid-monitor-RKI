import { Case, Death, LineChartdata, Recovered } from "../types/types";
import { getDates, prepareForLineChart } from "../utils/utils";
import { getConditionFromDayAgo } from "./api";

export const getConditionsLineChartData = async () => {
  let deaths: Death[], cases: Case[], recovered: Recovered[];
  [cases, deaths, recovered] = await Promise.all([
    getConditionFromDayAgo("cases", 7),
    getConditionFromDayAgo("deaths", 7),
    getConditionFromDayAgo("recovered", 7),
  ]);
  let data: LineChartdata = { datasets: [], labels: [] };
  data.datasets.push(
    prepareForLineChart(
      cases,
      "cases",
      { r: 255, g: 99, b: 132, t: 0.2 },
      { r: 255, g: 99, b: 132, t: 1 }
    )
  );
  data.datasets.push(
    prepareForLineChart(
      deaths,
      "deaths",
      { r: 0, g: 0, b: 0, t: 0.2 },
      { r: 1, g: 1, b: 1, t: 1 }
    )
  );
  data.datasets.push(
    prepareForLineChart(
      recovered,
      "recovered",
      { r: 53, g: 162, b: 235, t: 0.2 },
      { r: 53, g: 162, b: 235, t: 1 }
    )
  );
  data.labels = getDates(cases);
  return data;
};
