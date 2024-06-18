import {
  ArcElement,
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Filler,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  RadialLinearScale,
  Title,
  Tooltip,
} from "chart.js";
import { FunctionComponent } from "react";
import { Chart } from "react-chartjs-2";
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
