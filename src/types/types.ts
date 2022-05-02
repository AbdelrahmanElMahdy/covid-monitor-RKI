export interface ConditionResponse {
  data: Case[] | Recovered[] | Death[];
  meta?: any;
}
export interface Conditions {
  cases: Case[];
  recovers: Recovered[];
  deaths: Death[];
}
export interface LineChartdata {
  datasets?: LineChartInstance[];
}
export interface LineChartInstance{
  data: number[];
  label?: string;
  borderColor?: string;
  backgroundColor?: string;
}
export interface PieChartData {
  datasets: {
    label: string;
    data: number[];
    backgroundColor: string[];
    borderColor: string[];
    borderWidth: number;
  }[];
}
export interface Case {
  cases: number;
  date: string;
}
export interface Recovered {
  cases: number;
  date: string;
}
export interface Death {
  cases: number;
  date: string;
}
export interface MonitorProps {}
export interface CountryParams {
  country: string;
}
export interface StateParams {
  state: string;
}
export interface StateProps {
  state: string;
}
export interface DistrictProps {
  district: string;
}
