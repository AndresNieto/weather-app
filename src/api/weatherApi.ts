import axios from "axios";
import { IWeatherResponse } from "../dto/WeaatherResponse";

export const fetchAirPolutionData = (
  lat: number,
  lon: number,
  start: number,
  end: number
) => {
  return axios.get(`${process.env.REACT_APP_ENDPOINT}air_pollution/history`, {
    params: {
      appid: process.env.REACT_APP_API_KEY,
      lat,
      lon,
      start,
      end,
    },
  });
};

//api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}

export const fetchPrecipitacionProbability = (
  lat: number,
  lon: number,
  cnt: number
) => {
  return axios.get(`${process.env.REACT_APP_ENDPOINT}forecast`, {
    params: {
      appid: process.env.REACT_APP_API_KEY,
      lat,
      lon,
    },
  });
};
