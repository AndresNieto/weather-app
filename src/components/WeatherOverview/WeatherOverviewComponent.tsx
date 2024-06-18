import { FunctionComponent, useContext, useEffect, useState } from "react";
import styles from "./WeatherOverview.module.scss";
import { LocationContext } from "../../context/LocationContext";
import { useFetchWeather } from "../../hooks/useFetchWeather";
import { ICurrentWeatherResponse } from "../../dto/CurrentWeatherResponse";
import { WiDaySunny } from "react-icons/wi";
import { WiThermometer } from "react-icons/wi";
import { WiStrongWind } from "react-icons/wi";
import { WiCloud } from "react-icons/wi";
import { WiHumidity } from "react-icons/wi";
import ReactLoading from "react-loading";

interface WeatherOverviewComponentProps {}

const WeatherOverviewComponent: FunctionComponent<
  WeatherOverviewComponentProps
> = () => {
  const { locationData } = useContext(LocationContext);

  const { isLoading, getCurrentWeatherData } = useFetchWeather();
  const [weatherData, setWeatherData] = useState<ICurrentWeatherResponse>();

  const fetchData = async () => {
    if (!locationData) return;
    const { lat, lon } = locationData;

    const response = await getCurrentWeatherData(lat, lon);
    setWeatherData(response);
  };

  useEffect(() => {
    fetchData();
  }, [locationData]);

  return (
    <div className={styles.weatherContainer}>
      {!isLoading && !!weatherData ? (
        <div className={styles.currentWeatherContainer}>
          <div className={styles.currentWeatherInfo}>
            <div className={styles.boxIcon}>
              <WiDaySunny size={"medium"} />
              <span>
                {weatherData?.name}, {weatherData?.sys.country}
              </span>
              <span>{weatherData?.main.temp} °C </span>
              <span>{weatherData?.weather[0].description}</span>
            </div>
            <div className={styles.boxLocationInfo}>
              <div className={styles.boxInfo}>
                <WiThermometer className={styles.icon} />
                Real Feel <span>{weatherData?.main.feels_like}°C </span>
              </div>
              <div className={styles.boxInfo}>
                <WiStrongWind className={styles.icon} />
                Wind <span>{weatherData?.wind.speed} m/s</span>
              </div>
              <div className={styles.boxInfo}>
                <WiCloud className={styles.icon} />
                Clouds <span>{weatherData?.clouds.all} %</span>
              </div>
              <div className={styles.boxInfo}>
                <WiHumidity className={styles.icon} />
                Humidity <span>{weatherData?.main.humidity} %</span>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <ReactLoading type={"spin"} color={"black"} height={20} width={20} />
      )}
    </div>
  );
};

export default WeatherOverviewComponent;
