import Header from "./components/Header"
import Footer from "./components/Footer"
import WeatherDisplay from "./components/WeatherDisplay"
import WeatherSearch from "./components/WeatherSearch"

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

  const weatherData: WeatherData | null = null as WeatherData | null;
  
  return (
    <>
      <Header />
      <main className="flex-grow">
        <WeatherSearch />
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
