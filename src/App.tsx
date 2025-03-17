import Header from "./components/Header"
import Footer from "./components/Footer"
import WeatherDisplay from "./components/WeatherDisplay"
import WeatherSearch from "./components/WeatherSearch"
import { fetchWeather } from "./utils/fetchWeather"
import { useState } from "react"

function App() {

  type WeatherData = {
    city: string;
    temperature: number;
    description: string;
    icon: string;
    humidity: number;
    windSpeed: number;
    isLoading: boolean;
    error: string;
  };

  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const handleWeatherDataChange = async (city: string) => {
    const data = await fetchWeather(city);
    setWeatherData(data);
  };
  
  return (
    <>
      <Header />
      <main className="flex-grow">
        <WeatherSearch onSearch={handleWeatherDataChange} />
        {weatherData ? (
          <WeatherDisplay
            city={weatherData.city}
            temperature={weatherData.temperature}
            description={weatherData.description}
            icon={weatherData.icon}
            humidity={weatherData.humidity}
            windSpeed={weatherData.windSpeed}
            isLoading={weatherData.isLoading}
            error={weatherData.error}
          />
        ) : (
          <p className="text-center text-gray-500">No weather data available.</p>
        )}
      </main>
      <Footer />
    </>
  )
}

export default App
