import { FunctionComponent, useContext, useEffect, useState } from "react";
import ReactLoading from "react-loading";
import { LocationContext } from "../../context/LocationContext";
import { IChartData } from "../../dto/IChartData";
import { useFetchWeather } from "../../hooks/useFetchWeather";
import { buildAirPolutionSeries, updateDates } from "../../shared/utils";
import ChartComponent from "../ChartComponent/ChartComponent";

interface AirPolutionComponentProps {}

const AirPolutionComponent: FunctionComponent<
  AirPolutionComponentProps
> = () => {
  const { locationData } = useContext(LocationContext);

  const { isLoading, getAirPolutionData } = useFetchWeather();
  const [chartData, setChartData] = useState<IChartData>();

  const fetchData = async () => {
    if (!locationData) return;
    const { lat, lon } = locationData;
    const start = updateDates(new Date(), -1);

    const response = await getAirPolutionData(
      lat,
      lon,
      Math.round(+start / 1000),
      Math.floor(Date.now() / 1000)
    );
    const builde = buildAirPolutionSeries(response);
    setChartData(builde);
  };

  useEffect(() => {
    fetchData();
  }, [locationData]);

  return (
    <>
      {!isLoading && chartData ? (
        <ChartComponent chartData={chartData} chartName="Air Polution" />
      ) : (
        <ReactLoading type={"spin"} color={"black"} height={20} width={20} />
      )}
    </>
  );
};

export default AirPolutionComponent;
