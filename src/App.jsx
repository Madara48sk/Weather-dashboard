import { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';
import ErrorMessage from './components/ErrorMessage';
import './main.css';

function App() {
    const [city, setCity] = useState('');
    const [weatherData, setWeatherData] = useState(null);
    const [error, setError] = useState(null);
    const apiKey = import.meta.env.VITE_OPENWEATHERMAP_API_KEY;
    const [refreshing, setRefreshing] = useState(false);

    useEffect(() => {
        // Initial data, might want to make this a default city, for now, we just set it to null
        console.log("Initial useEffect, apiKey:", apiKey);
        const testCall = async () => {
            try {
                const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=London&appid=${apiKey}&units=metric`);
                console.log("testCall Response Status:", response.status);
                const data = await response.json();
                 console.log("testCall Data:", data);
            }
            catch (e) {
                console.error("testCall error", e);
            }
        }
        testCall();
        setWeatherData(null);
        setError(null);
    }, []);


    useEffect(() => {
        if(city){
            const fetchData = async () => {
                setRefreshing(true)
                await fetchWeatherData(city);
                setRefreshing(false)
            }
            fetchData();
            const intervalId = setInterval(fetchData, 10 * 60 * 1000);
            return () => clearInterval(intervalId);
        }
    }, [city]);


    const fetchWeatherData = async (city) => {
        setError(null);
        setWeatherData(null);
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        console.log("fetchWeatherData: API URL:", apiUrl);
        try {
            const response = await fetch(apiUrl);
            console.log("fetchWeatherData: Response Object:", response);
            console.log("fetchWeatherData: Response Status:", response.status);


            if (!response.ok) {
                const message = `HTTP error! status: ${response.status}`;
                throw new Error(message);
            }
            const data = await response.json();
            console.log("fetchWeatherData: Data:", data)
            setWeatherData(data);
        } catch (error) {
            console.error("fetchWeatherData: error=", error)
            setError(error.message)
        }
    };

    const handleSearch = (cityInput) => {
        setCity(cityInput);
        fetchWeatherData(cityInput);
    };
    const handleRefresh = async () => {
        setRefreshing(true);
        await fetchWeatherData(city);
        setRefreshing(false);
    }

    return (
        <div className="app-wrap">
            <SearchBar onSearch={handleSearch} />
            { city &&
                <button disabled={refreshing} onClick={handleRefresh} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-2">
                    {refreshing ? "Refreshing..." : "Refresh"}
                </button>
            }
            {error && <ErrorMessage message={error} />}
            {weatherData && <WeatherCard weatherData={weatherData} />}
        </div>
    );
}

export default App;