import { Dataset, IChartData } from "../dto/IChartData";
import { IPrecipitationResponse } from "../dto/PrecipitationResponse";
import { IWeatherResponse } from "../dto/WeaatherResponse";
/* eslint-disable @typescript-eslint/no-explicit-any */
export const buildChartSeries = (data: IWeatherResponse) => {
  const { list } = data;
  const dataBuilded: any = [];

  list.forEach((current) => {
    const { components } = current;
    const polutionObj: any = {};

    Object.keys(components).forEach((key: string) => {
      polutionObj[key] = components[key];
    });
    const newRow = {
      label: current.dt,
      data: [polutionObj],
    };
    dataBuilded.push(newRow);
  });

  return dataBuilded;
};

export const buildAirPolutionSeries = (data: IWeatherResponse): IChartData => {
  const { list } = data;
  const datasets: Dataset[] = [];
  const valuePerKey: any = {};
  const labels: string[] = [];

  list.slice(0, 5).forEach((current) => {
    const { components, dt } = current;
    labels.push(new Date(dt * 1000).toLocaleDateString());

    Object.keys(components).forEach((key: string) => {
      if (!valuePerKey[key]) {
        valuePerKey[key] = [];
      }
      valuePerKey[key].push(components[key]);
    });
  });

  const { components } = list[0];

  Object.keys(components).forEach((key: string) => {
    const color = buildRandomHexaColor();
    datasets.push({
      type: "line",
      label: key.toUpperCase(),
      data: valuePerKey[key],
      backgroundColor: color,
      borderColor: color,
    });
  });

  return {
    labels,
    datasets,
  };
};

export const builPrecipitationSeries = (
  data: IPrecipitationResponse
): IChartData => {
  const { list } = data;
  const TEMP_LABEL = "Temperature";
  const PRECIPITACION_PROB = "Precipitation probability";
  const datasets: Dataset[] = [];
  const valuePerKey: any = {};
  const labels: string[] = [];

  list.forEach((current) => {
    const { dt_txt, main, pop } = current;
    labels.push(dt_txt.toLocaleString());

    if (!valuePerKey[PRECIPITACION_PROB]) {
      valuePerKey[PRECIPITACION_PROB] = [];
    }
    valuePerKey[PRECIPITACION_PROB].push(pop * 100);

    if (!valuePerKey[TEMP_LABEL]) {
      valuePerKey[TEMP_LABEL] = [];
    }
    valuePerKey[TEMP_LABEL].push(main.temp);
  });

  Object.keys(valuePerKey).forEach((key: string) => {
    const isArea = key != PRECIPITACION_PROB;
    const color = buildRandomHexaColor();
    datasets.push({
      type: "line",
      fill: isArea,
      label: key.toUpperCase(),
      data: valuePerKey[key],
      backgroundColor: `${color}80`,
      borderColor: color,
    });
  });

  return {
    labels,
    datasets,
  };
};

export const buildRandomHexaColor = () =>
  "#" + ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, "0");

export const updateDates = (currentDate: Date, months: number): Date => {
  const mes = currentDate.getMonth();
  currentDate.setMonth(currentDate.getMonth() + months);
  while (currentDate.getMonth() === mes) {
    currentDate.setDate(currentDate.getDate() - 1);
  }
  return currentDate;
};

export const getUnixDate = (date: Date) =>
  Math.floor(date.getTime() / 1000).toString();
