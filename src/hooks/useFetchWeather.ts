import { useState } from "react";
import {
  fetchAirPolutionData,
  fetchCurrentWeather,
  fetchPrecipitacionProbability,
} from "../api/weatherApi";
import { IWeatherResponse } from "../dto/WeaatherResponse";
import { IPrecipitationResponse } from "../dto/PrecipitationResponse";
import { ICurrentWeatherResponse } from "../dto/CurrentWeatherResponse";

export const useFetchWeather = () => {
  const [isLoading, setIsLoading] = useState(false);

  const getAirPolutionData = async (
    lat: number,
    lon: number,
    start: number,
    end: number
  ): Promise<IWeatherResponse> => {
    setIsLoading(true);
    try {
      const { data } = await fetchAirPolutionData(lat, lon, start, end);
      return data as IWeatherResponse;
    } catch (error) {
      return error as IWeatherResponse;
    } finally {
      setIsLoading(false);
    }
  };

  const getPrecipitationProbabilityData = async (
    lat: number,
    lon: number,
    cnt: number
  ): Promise<IPrecipitationResponse> => {
    setIsLoading(true);
    try {
      const { data } = await fetchPrecipitacionProbability(lat, lon, cnt);
      return data as IPrecipitationResponse;
    } catch (error) {
      return error as IPrecipitationResponse;
    } finally {
      setIsLoading(false);
    }
  };

  const getCurrentWeatherData = async (
    lat: number,
    lon: number
  ): Promise<ICurrentWeatherResponse> => {
    setIsLoading(true);
    try {
      const { data } = await fetchCurrentWeather(lat, lon);
      return data as ICurrentWeatherResponse;
    } catch (error) {
      return error as ICurrentWeatherResponse;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    getAirPolutionData,
    getPrecipitationProbabilityData,
    getCurrentWeatherData,
  };
};
