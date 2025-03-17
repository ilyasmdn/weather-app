import Header from "./components/Header"
import Footer from "./components/Footer"
import WeatherDisplay from "./components/WeatherDisplay"
import WeatherSearch from "./components/WeatherSearch"

function App() {

  const weatherData = {
    city: "London",
    temperature: 22, // In Celsius
    description: "Clear sky",
    icon: "https://openweathermap.org/img/wn/01d.png", // You can replace it with any valid weather icon URL
    humidity: 65, // Optional
    windSpeed: 15, // Optional
    isLoading: false, // Set to true if you're still fetching data
    error: "", // Leave empty or set an error message for testing
  };
  

  return (
    <>
      <Header />
      <WeatherSearch />
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
      <Footer />
    </>
  )
}

export default App
