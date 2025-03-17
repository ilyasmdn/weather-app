const API_KEY = "d2711d390f58bfb2e98c79abbac36442";
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

export async function fetchWeather(city: string) {
    try {
      const response = await fetch(`${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`);
  
      if (!response.ok) {
        throw new Error("City not found or API limit reached");
      }
  
      const data = await response.json();
  
      return {
        city: data.name,
        temperature: data.main.temp,
        description: data.weather[0].description,
        icon: `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`,
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
        isLoading: false,
        error: ""
      };
    } catch (error) {
      return {
        error: (error as Error).message,
        city: "",
        temperature: 0,
        description: "",
        icon: "",
        humidity: 0,
        windSpeed: 0,
        isLoading: false,
      };    
    }
}