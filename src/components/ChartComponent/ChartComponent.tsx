import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  ArcElement,
  BarElement,
  RadialLinearScale,
  Filler,
} from "chart.js";
import { FunctionComponent } from "react";
import { Chart, Line } from "react-chartjs-2";
import { IChartData } from "../../dto/IChartData";

interface ChartComponentProps {
  chartName: string;
  chartData: IChartData;
}

const ChartComponent: FunctionComponent<ChartComponentProps> = ({
  chartData,
  chartName,
}) => {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    ArcElement,
    BarElement,
    RadialLinearScale,
    Filler,
    Title,
    Tooltip,
    Legend
  );

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: chartName,
      },
    },
  };
  return <Chart type="line" options={options} data={chartData} />;
};

export default ChartComponent;
