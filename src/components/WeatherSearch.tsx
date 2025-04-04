import { useState } from "react";

interface WeatherSearchProps {
    onSearch: (city: string) => void;
}

const WeatherSearch: React.FC<WeatherSearchProps> = ({ onSearch }) => {


    const [city, setCity] = useState('');

    const handleChangeCity = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCity(e.target.value)
    }

    const handleSearchClick = async () => {
        onSearch(city);
      };

  return (
    <div className="w-full pt-4 pb-8 px-16">
        <h2 className="py-4 text-3xl font-bold text-center text-text">What city you are currently in?</h2>
        <div className="mt-3 relative max-w-2xl mx-auto">
            <input 
                type="text" 
                value={city} 
                onChange={(e) => handleChangeCity(e)}
                placeholder="Enter your city"
                className="w-full text-text p-2.5 border border-border rounded-xl outline-none"
            />
            <button
            onClick={handleSearchClick}
                className="absolute right-0 top-0 p-2.5 w-22 border border-border bg-primary text-text rounded-xl cursor-pointer hover:bg-primary/50 transition"
            >
                Search
            </button>
        </div>
    </div>
  )
}

export default WeatherSearch;