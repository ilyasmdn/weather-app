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
    error: string;
  };

  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);

  const [isLoading, setLoading] = useState<boolean>(false)
  
  const handleWeatherDataChange = async (city: string) => {
    setLoading(true); // Set loading to true before fetching
    try {
      const data = await fetchWeather(city);
      
      // Assuming fetchWeather returns data that matches the WeatherData shape
      setWeatherData({
        city: city,
        temperature: data.temperature,
        description: data.description,
        icon: data.icon,
        humidity: data.humidity,
        windSpeed: data.windSpeed,
        error: "" // Clear any previous errors
      });
    } catch (error) {
      // Handle error if fetch fails
      setWeatherData({
        city: "",
        temperature: 0,
        description: "",
        icon: "",
        humidity: 0,
        windSpeed: 0,
        error: "Failed to fetch weather data."
      });
    } finally {
      setLoading(false);
    }
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
            isLoading={isLoading}
            error={weatherData.error}
          />
        ) : (
          <p className="text-center text-gray-300">No weather data available.</p>
        )}
      </main>
      <Footer />
    </>
  )
}

export default App
