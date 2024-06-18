import { FunctionComponent, useContext, useEffect } from "react";
import SidebarComponent from "../../components/sidebar/Sidebar.component";
import AirPolutionComponent from "../../components/air-polution/AirPolution.component";
import { LocationContext } from "../../context/LocationContext";
import LocationContextProvider from "../../context/LocationContextProvider";
import PrecipitationProbabilityComponent from "../../components/PrecipitationProbability/PrecipitationProbabilityComponent";

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
    <>
      {/* <SidebarComponent /> */}
      <AirPolutionComponent />
      <PrecipitationProbabilityComponent />
    </>
  );
};

export default DashboardComponent;
