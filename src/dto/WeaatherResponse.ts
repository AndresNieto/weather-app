import { Coord } from "./ICoord";

export interface IWeatherResponse {
  coord: Coord;
  list: List[];
}

export interface List {
  dt: number;
  main: Main;
  components: { [key: string]: number };
}

export interface Main {
  aqi: number;
}
