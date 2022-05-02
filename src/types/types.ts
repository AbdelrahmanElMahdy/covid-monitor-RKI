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
export interface LineChartdata {
  datasets: LineChartInstance[];
  labels:string[]
}
export interface LineChartInstance{
  data: number[];
  label?: string;
  borderColor?: string;
  backgroundColor?: string;
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
export interface ConditionResponse {
  data: Case[] | Recovered[] | Death[];
  meta?: any;
}
export interface Conditions {
  cases: Case[];
  recovers: Recovered[];
  deaths: Death[];
}