import { FunctionComponent, useContext, useEffect } from "react";
import AirPolutionComponent from "../../components/AirPolution/AirPolution.component";
import PrecipitationProbabilityComponent from "../../components/PrecipitationProbability/PrecipitationProbabilityComponent";
import WeatherOverviewComponent from "../../components/WeatherOverview/WeatherOverviewComponent";
import { LocationContext } from "../../context/LocationContext";
import styles from "./Dashboard.module.scss";

interface DashboardPageProps {}

const DashboardComponent: FunctionComponent<DashboardPageProps> = () => {
  const { updateLocationData } = useContext(LocationContext);

  const getCurrentLocation = async () => {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      console.log({ lat, lon });
      updateLocationData({
        lat,
        lon,
      });
    });
  };

  useEffect(() => {
    getCurrentLocation();
  }, []);

  return (
    <div className={styles.dashboardContainer}>
      <div className={styles.resumeContainer}>
        <WeatherOverviewComponent />
      </div>
      <div className={styles.chartsContainer}>
        <div className={styles.chart}>
          <AirPolutionComponent />
        </div>
        <div className={styles.chart}>
          <PrecipitationProbabilityComponent />
        </div>
      </div>
    </div>
  );
};

export default DashboardComponent;
