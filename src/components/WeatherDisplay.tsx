import {
  Sun,
  CloudRain,
  Cloud,
  Snowflake,
  CloudLightning,
  CloudDrizzle,
  Wind,
  CloudSun,
} from "lucide-react";
import { JSX } from "react";

interface WeatherDisplayProps {
  city: string;
  temperature: number;
  description: string;
  icon: string;
  humidity?: number;
  windSpeed?: number;
  isLoading: boolean;
  error?: string;
}

const color = "#fafbfc";
const size = 72;

const iconMap: Record<string, JSX.Element> = {
  Clear: <Sun size={size} color={color} />,
  Rain: <CloudRain size={size} color={color} />,
  Clouds: <CloudSun size={size} color={color} />,
  Drizzle: <CloudDrizzle size={size} color={color} />,
  Thunderstorm: <CloudLightning size={size} color={color} />,
  Snow: <Snowflake size={size} color={color} />,
  Mist: <Wind size={size} color={color} />,
  Smoke: <Wind size={size} color={color} />,
  Haze: <Wind size={size} color={color} />,
  Dust: <Wind size={size} color={color} />,
  Fog: <Wind size={size} color={color} />,
  Sand: <Wind size={size} color={color} />,
  Ash: <Wind size={size} color={color} />,
  Squall: <Wind size={size} color={color} />,
  Tornado: <Wind size={size} color={color} />,
};

const WeatherDisplay: React.FC<WeatherDisplayProps> = ({
  city,
  temperature,
  description,
  icon,
  humidity,
  windSpeed,
  isLoading,
  error,
}) => {
  return isLoading ? (
    // Display a spinner when loading
    <div className="flex justify-center items-center">
      <div className="border-t-4 border-blue-500 border-solid w-12 h-12 rounded-full animate-spin"></div>
    </div>
  ) : error ? (
    // Display error message if there's an error
    <p className="text-center text-red-500">{error}</p>
  ) : (
    // Display weather data if available
    <div className="weather-display text-center bg-black/10 backdrop-blur-lg border border-border px-8 py-6 rounded-2xl shadow-xl max-w-sm mx-auto flex flex-col sm:flex-row items-center gap-6">
      <div className="flex flex-col flex-1 items-center sm:items-start text-text">
        <h1 className="text-xl font-semibold leading-tight mb-1.5">
          {city}
        </h1>
        <h3 className="text-xl font-normal text-gray-300 capitalize mb-1.5">{description}</h3>
        <h2 className="text-4xl font-bold mb-3">{temperature} °C</h2>
        {humidity !== undefined && (
          <p className="text-base text-gray-300">Humidity: {humidity}%</p>
        )}
        {windSpeed !== undefined && (
          <p className="text-base text-gray-300">
            Wind Speed: {windSpeed} km/h
          </p>
        )}
      </div>
      <div className="shrink-0">
        {iconMap[icon] || <Cloud size={72} color={color} />}
      </div>
    </div>
  );
};

export default WeatherDisplay;
