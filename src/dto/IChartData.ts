export interface IChartData {
  labels: string[];
  datasets: Dataset[];
}

export interface Dataset {
  type?: "line" | "bar" | "radar" | "polarArea";
  fill?: boolean;
  label: string;
  data: number[];
  backgroundColor: string;
  borderColor: string;
}
