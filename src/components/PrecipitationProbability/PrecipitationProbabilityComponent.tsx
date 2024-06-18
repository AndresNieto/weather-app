import { FunctionComponent, useContext, useEffect, useState } from "react";
import ReactLoading from "react-loading";
import { LocationContext } from "../../context/LocationContext";
import { IChartData } from "../../dto/IChartData";
import { useFetchWeather } from "../../hooks/useFetchWeather";
import { builPrecipitationSeries } from "../../shared/utils";
import ChartComponent from "../ChartComponent/ChartComponent";

interface PrecipitationProbabilityComponentProps {}

const PrecipitationProbabilityComponent: FunctionComponent<
  PrecipitationProbabilityComponentProps
> = () => {
  const DAYS_TO_CHECK = 5;
  const { locationData } = useContext(LocationContext);

  const { isLoading, getPrecipitationProbabilityData } = useFetchWeather();
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
      {!isLoading && chartData ? (
        <ChartComponent chartData={chartData} chartName="Precipitaion" />
      ) : (
        <ReactLoading type={"spin"} color={"black"} height={20} width={20} />
      )}
    </>
  );
};

export default PrecipitationProbabilityComponent;
