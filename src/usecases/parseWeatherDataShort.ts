import { WeatherDataShort, WeatherData } from '../models/weatherData'

/**
 * @param data weather data received from the api
 * @returns city, temperature and date
 */
export const parseWeatherDataShort = (data: WeatherData): WeatherDataShort => {
  return {
    city: data.location.name,
    temperature: data.current.temp_c,
    date: new Date(data.location.localtime),
  }
}