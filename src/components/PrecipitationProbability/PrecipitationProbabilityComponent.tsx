import { FunctionComponent, useContext, useEffect, useState } from "react";
import { LocationContext } from "../../context/LocationContext";
import { useFetchWeather } from "../../hooks/useFetchWeather";
import { IChartData } from "../../dto/IChartData";
import {
  builPrecipitationSeries,
  buildAirPolutionSeries,
} from "../../shared/utils";
import ChartComponent from "../ChartComponent/ChartComponent";

interface PrecipitationProbabilityComponentProps {}

const PrecipitationProbabilityComponent: FunctionComponent<
  PrecipitationProbabilityComponentProps
> = () => {
  const DAYS_TO_CHECK = 5;
  const { locationData } = useContext(LocationContext);

  const { getPrecipitationProbabilityData } = useFetchWeather();
  const [chartData, setChartData] = useState<IChartData>();

  const fetchData = async () => {
    if (!locationData) return;
    const { lat, lon } = locationData;

    const response = await getPrecipitationProbabilityData(
      lat,
      lon,
      DAYS_TO_CHECK
    );
    const builde = builPrecipitationSeries(response);
    setChartData(builde);
  };

  useEffect(() => {
    fetchData();
  }, [locationData]);

  return (
    <>
      <h1>Air pol</h1>
      {chartData && (
        <ChartComponent chartData={chartData} chartName="Precipitaion" />
      )}
    </>
  );
};

export default PrecipitationProbabilityComponent;
