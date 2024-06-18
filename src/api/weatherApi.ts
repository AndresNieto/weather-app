import axios from "axios";

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
      units: "metric",
    },
  });
};

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
      units: "metric",
    },
  });
};

export const fetchCurrentWeather = (lat: number, lon: number) => {
  return axios.get(`${process.env.REACT_APP_ENDPOINT}weather`, {
    params: {
      appid: process.env.REACT_APP_API_KEY,
      lat,
      lon,
      units: "metric",
    },
  });
};
