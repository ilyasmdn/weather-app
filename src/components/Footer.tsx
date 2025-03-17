const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center mt-10 p-8 bg-blue-800">
      <p className="text-white">&copy; {new Date().getFullYear()} WeatherApp</p>
      <p className="text-white">
        Data from &nbsp;
        <a 
        className="underline font-medium" 
        href="https://openweathermap.org/"
        target="_blank"
        rel="noopener noreferrer"
        >
          OpenWeatherMap
        </a>
      </p>
    </footer>
  )
}

export default Footer;