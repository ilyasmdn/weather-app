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
    <div className="w-full p-6">
        <h2 className="py-4 text-3xl font-bold text-center text-gray-800">What city you are currently in ?</h2>
        <div className="flex gap-4">
            <input 
                type="text" 
                value={city} 
                onChange={(e) => handleChangeCity(e)}
                placeholder="Enter your city"
                className="w-full p-2 border border-gray-300 rounded-lg"
            />
            <button
            onClick={handleSearchClick}
                className="w-32 p-2 bg-blue-800 text-white rounded-lg cursor-pointer hover:bg-blue-900 transition duration-300"
            >
                Search
            </button>
        </div>
    </div>
  )
}

export default WeatherSearch;