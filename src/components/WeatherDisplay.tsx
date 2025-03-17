interface WeatherDisplayProps {
  city: string,
  temperature: number,
  description: string,
  icon: string,
  humidity?: number,
  windSpeed?: number,
  isLoading: boolean,
  error?: string
}

const WeatherDisplay: React.FC<WeatherDisplayProps> = ({
  city,
  temperature,
  description,
  icon,
  humidity,
  windSpeed,
  isLoading,
  error
}) => {
  
  if (!city)
    return;

  if (isLoading)
    return <div>Loading...</div>;

  if (error)
    return <div>Error: {error}</div>;

  return (
    <div className="weather-display text-center bg-white border border-gray-300 p-6 rounded-lg shadow-lg max-w-sm mx-auto">
      <h2 className="text-2xl font-semibold mb-2">{city}</h2>
      <img src={icon} alt={description} className="w-24 h-24 mx-auto mb-4" />
      <p className="text-xl font-medium text-gray-700 mb-2">{description}</p>
      <p className="text-3xl font-bold mb-2">{temperature}°C</p>
      {humidity && <p className="text-sm text-gray-500">Humidity: {humidity}%</p>}
      {windSpeed && <p className="text-sm text-gray-500">Wind Speed: {windSpeed} km/h</p>}
    </div>
  );

};

export default WeatherDisplay;