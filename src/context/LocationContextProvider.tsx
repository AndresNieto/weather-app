import { FunctionComponent, useState } from "react";
import {
  LocationContext,
  LocationContextProps,
  LocationData,
} from "./LocationContext";

interface LocationContextProviderProps {
  children: JSX.Element | JSX.Element[];
}

const LocationContextProvider: FunctionComponent<
  LocationContextProviderProps
> = ({ children }) => {
  const [locationData, setLocationData] = useState<LocationData>();

  const updateLocationData = (newLocationData: LocationData) => {
    console.log(newLocationData);
    setLocationData(newLocationData);
  };

  const locationContext: LocationContextProps = {
    locationData,
    updateLocationData,
  };

  return (
    <LocationContext.Provider value={locationContext}>
      {children}
    </LocationContext.Provider>
  );
};

export default LocationContextProvider;
