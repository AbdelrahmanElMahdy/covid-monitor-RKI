import * as React from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import "../../assets/css/monitor/country.css";
import { CountryParams, MonitorProps, LineChartdata } from "../../types/types";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { getConditionsLineChartData } from "../../api/services";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "bottom" as const,
    },
    title: {
      display: true,
      text: "COVID 19 DISTRIBUTION BASED ON LAST 7 DAYS",
    },
  },
};

export default function Country(props: MonitorProps) {
  const { country } = useParams<CountryParams>();
  const [lineChartData, setLineChartData] = React.useState<LineChartdata>({
    datasets: [],
  });
  const [labels, setLabels] = React.useState<string[]>([]);
  React.useEffect(() => {
    const fetch = async () => {
      let data:any[], dates: string[];
      [data, dates] = await getConditionsLineChartData();
      console.log("data",data)

      setLineChartData({ datasets: data });
      setLabels(dates);
    };
    fetch();
  }, []);

  return (
    <Container>
      <Row className="m-5">
        <Col className="text-center">
          <div className="country-name">{country} Statistics</div>
        </Col>
      </Row>
      <Row>
        <Col className="m-5">
          <Line
            options={options}
            data={{ labels: labels, datasets: lineChartData.datasets }}
          />
        </Col>
        <Col className="m-5 text-center">
          <figure className="figure">
            <figcaption className="figure-caption mb-2">
              week incidences for states
            </figcaption>
            <img src="https://api.corona-zahlen.org/map/states-legend" alt="" />
          </figure>
        </Col>
      </Row>
      <Row className="m-5">
        <Col className="text-center">
          <figure className="figure">
            <img
              src="https://api.corona-zahlen.org/map/states-legend/hospitalization"
              alt=""
            />
            <figcaption className="figure-caption">
              hospitalization incidences for states
            </figcaption>
          </figure>
        </Col>
        <Col />
      </Row>
    </Container>
  );
}
