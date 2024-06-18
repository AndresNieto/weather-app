import { createContext } from "react";

export type LocationData = {
  lat: number;
  lon: number;
};

export type LocationContextProps = {
  locationData: LocationData | undefined;
  updateLocationData: (newLocationData: LocationData) => void;
};

export const LocationContext = createContext<LocationContextProps>(
  {} as LocationContextProps
);
