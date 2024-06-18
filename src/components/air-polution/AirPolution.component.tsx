import { FunctionComponent, useContext, useEffect, useState } from "react";
import { IChartData } from "../../dto/IChartData";
import { useFetchWeather } from "../../hooks/useFetchWeather";
import { buildAirPolutionSeries, updateDates } from "../../shared/utils";
import ChartComponent from "../ChartComponent/ChartComponent";
import { LocationContext } from "../../context/LocationContext";

interface AirPolutionComponentProps {}
/* eslint-disable @typescript-eslint/no-explicit-any */

const AirPolutionComponent: FunctionComponent<
  AirPolutionComponentProps
> = () => {
  const { locationData } = useContext(LocationContext);

  const { getAirPolutionData } = useFetchWeather();
  const [chartData, setChartData] = useState<IChartData>();

  const fetchData = async () => {
    if (!locationData) return;
    const { lat, lon } = locationData;
    const start = updateDates(new Date(), -1);
    const end = new Date();

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
      <h1>Air pol</h1>
      {/* {chartData && <LineChartComponent data={chartData} />} */}
      {chartData && (
        <ChartComponent chartData={chartData} chartName="Air Polution" />
      )}
    </>
  );
};

export default AirPolutionComponent;
