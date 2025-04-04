const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center mt-10 p-8">
      <p className="text-text">&copy; {new Date().getFullYear()} WeatherApp</p>
      <p className="text-text">
        Data from &nbsp;
        <a 
        className="underline font-medium text-text" 
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