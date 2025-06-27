import React, { useEffect, useState } from "react";

const API_KEY = "047eecb5c1114aab9fa80203252706"; // Replace with your actual API key
const DEFAULT_CITY = "Colombo";

export default function Weather() {
  const [city, setCity] = useState(DEFAULT_CITY);
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showExtended, setShowExtended] = useState(true);

  useEffect(() => {
    async function fetchWeather() {
      setLoading(true);
      setError(null);
      try {
        const [currentRes, forecastRes] = await Promise.all([
          fetch(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=yes`),
          fetch(`https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=5&aqi=yes&alerts=yes`)
        ]);
        
        if (!currentRes.ok || !forecastRes.ok) throw new Error("Failed to fetch weather data");
        
        const currentData = await currentRes.json();
        const forecastData = await forecastRes.json();
        
        setWeather(currentData);
        setForecast(forecastData);
      } catch (err) {
        setError(err.message);
        setWeather(null);
        setForecast(null);
      } finally {
        setLoading(false);
      }
    }
    fetchWeather();
  }, [city]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      setCity(query.trim());
    }
  };

  const getWeatherIcon = (condition) => {
    const conditionLower = condition?.toLowerCase() || "";
    if (conditionLower.includes("sun") || conditionLower.includes("clear")) return "☀️";
    if (conditionLower.includes("cloud")) return "☁️";
    if (conditionLower.includes("rain")) return "🌧️";
    if (conditionLower.includes("snow")) return "❄️";
    if (conditionLower.includes("storm")) return "⛈️";
    return "🌤️";
  };

  const getBackgroundGradient = (condition) => {
    const conditionLower = condition?.toLowerCase() || "";
    if (conditionLower.includes("sun") || conditionLower.includes("clear")) 
      return "from-amber-400 via-orange-500 to-yellow-600";
    if (conditionLower.includes("cloud")) 
      return "from-slate-400 via-gray-500 to-slate-600";
    if (conditionLower.includes("rain")) 
      return "from-blue-400 via-blue-600 to-indigo-700";
    if (conditionLower.includes("snow")) 
      return "from-blue-100 via-white to-blue-200";
    return "from-purple-400 via-pink-500 to-red-500";
  };

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour >= 5 && hour < 12) return { message: "Good Morning", emoji: "🌅" };
    if (hour >= 12 && hour < 17) return { message: "Good Afternoon", emoji: "☀️" };
    if (hour >= 17 && hour < 21) return { message: "Good Evening", emoji: "🌇" };
    return { message: "Good Night", emoji: "🌙" };
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-950 p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Main Weather Card */}
          <div className="lg:col-span-2">
            {/* Search Form */}
            <div className="mb-6 lg:mb-8">
              <div className="relative group">
                <input
                  type="text"
                  className="w-full bg-slate-800/50 backdrop-blur-md border border-slate-600/50 rounded-2xl px-6 py-4 text-white placeholder-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-300 text-lg shadow-lg"
                  placeholder="Enter city name..."
                  value={query}
                  onChange={e => setQuery(e.target.value)}
                  onKeyPress={e => e.key === 'Enter' && handleSubmit(e)}
                />
                <button
                  onClick={handleSubmit}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-6 py-2 rounded-xl hover:from-blue-700 hover:to-indigo-800 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl hover:scale-105"
                >
                  Search
                </button>
              </div>
            </div>

            {/* Main Weather Display */}
            <div className="bg-slate-800/30 backdrop-blur-xl border border-slate-600/30 rounded-3xl p-6 sm:p-8 shadow-2xl hover:shadow-3xl transition-all duration-500">
              {/* Greeting Header */}
              <div className="text-center mb-6 lg:mb-8">
                <div className="flex items-center justify-center gap-3 mb-3">
                  <span className="text-3xl sm:text-4xl animate-pulse">{getGreeting().emoji}</span>
                  <h1 className="text-xl sm:text-2xl font-bold text-white tracking-wide">
                    {getGreeting().message}!
                  </h1>
                </div>
                <p className="text-slate-300 text-sm">
                  {new Date().toLocaleDateString('en-US', { 
                    weekday: 'long', 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </p>
              </div>

              {loading && (
                <div className="text-center py-12">
                  <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-400 mb-4"></div>
                  <div className="text-slate-300 text-lg">Loading weather data...</div>
                </div>
              )}

              {error && (
                <div className="text-center py-12">
                  <div className="text-red-400 text-lg font-medium bg-red-500/10 rounded-xl p-4 border border-red-500/20">
                    {error}
                  </div>
                </div>
              )}

              {weather && !loading && !error && (
                <div className="text-center">
                  {/* Location Header */}
                  <div className="mb-6 lg:mb-8">
                    <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2 tracking-wide">
                      {weather.location.name}
                    </h2>
                    <p className="text-slate-300 text-base sm:text-lg">
                      {weather.location.region}, {weather.location.country}
                    </p>
                  </div>

                  {/* Main Temperature Display */}
                  <div className="mb-8">
                    <div className="text-6xl sm:text-8xl mb-4 animate-bounce">
                      {getWeatherIcon(weather.current.condition.text)}
                    </div>
                    <div className="text-5xl sm:text-6xl font-bold text-white mb-3">
                      {weather.current.temp_c}°C
                    </div>
                    <div className="text-lg sm:text-xl text-slate-300 capitalize mb-2">
                      {weather.current.condition.text}
                    </div>
                    <div className="text-slate-400 text-sm">
                      Feels like {weather.current.feelslike_c}°C
                    </div>
                  </div>

                  {/* Weather Details Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                    <div className="bg-slate-700/30 rounded-2xl p-4 border border-slate-600/20 hover:bg-slate-700/40 transition-all duration-300">
                      <div className="text-2xl mb-2">💧</div>
                      <div className="text-slate-400 text-xs uppercase tracking-wider mb-1">Humidity</div>
                      <div className="text-white text-xl font-bold">{weather.current.humidity}%</div>
                    </div>

                    <div className="bg-slate-700/30 rounded-2xl p-4 border border-slate-600/20 hover:bg-slate-700/40 transition-all duration-300">
                      <div className="text-2xl mb-2">💨</div>
                      <div className="text-slate-400 text-xs uppercase tracking-wider mb-1">Wind Speed</div>
                      <div className="text-white text-xl font-bold">{weather.current.wind_kph} km/h</div>
                    </div>

                    <div className="bg-slate-700/30 rounded-2xl p-4 border border-slate-600/20 hover:bg-slate-700/40 transition-all duration-300">
                      <div className="text-2xl mb-2">☀️</div>
                      <div className="text-slate-400 text-xs uppercase tracking-wider mb-1">UV Index</div>
                      <div className="text-white text-xl font-bold">{weather.current.uv}</div>
                    </div>

                    <div className="bg-slate-700/30 rounded-2xl p-4 border border-slate-600/20 hover:bg-slate-700/40 transition-all duration-300">
                      <div className="text-2xl mb-2">🌡️</div>
                      <div className="text-slate-400 text-xs uppercase tracking-wider mb-1">Pressure</div>
                      <div className="text-white text-xl font-bold">{weather.current.pressure_mb} mb</div>
                    </div>
                  </div>

                  {/* Last Updated */}
                  <div className="text-slate-400 text-sm">
                    Last updated: {new Date(weather.current.last_updated).toLocaleTimeString()}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Extended Weather Info Sidebar */}
          <div className="lg:col-span-1">
            {(showExtended && weather && forecast) && (
              <div className="space-y-6">
                {/* Air Quality */}
                {weather.current.air_quality && (
                  <div className="bg-slate-800/30 backdrop-blur-xl border border-slate-600/30 rounded-3xl p-6 shadow-2xl">
                    <h3 className="text-white text-lg font-bold mb-4 flex items-center gap-2">
                      🌬️ Air Quality
                    </h3>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-slate-400 text-sm">CO</span>
                        <span className="text-white font-semibold">{weather.current.air_quality.co?.toFixed(1)} μg/m³</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-slate-400 text-sm">PM2.5</span>
                        <span className="text-white font-semibold">{weather.current.air_quality.pm2_5?.toFixed(1)} μg/m³</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-slate-400 text-sm">PM10</span>
                        <span className="text-white font-semibold">{weather.current.air_quality.pm10?.toFixed(1)} μg/m³</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* 5-Day Forecast */}
                <div className="bg-slate-800/30 backdrop-blur-xl border border-slate-600/30 rounded-3xl p-6 shadow-2xl">
                  <h3 className="text-white text-lg font-bold mb-4 flex items-center gap-2">
                    📅 5-Day Forecast
                  </h3>
                  <div className="space-y-3">
                    {forecast.forecast.forecastday.map((day, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-slate-700/20 rounded-xl">
                        <div className="flex items-center gap-3">
                          <span className="text-lg">{getWeatherIcon(day.day.condition.text)}</span>
                          <div>
                            <div className="text-white text-sm font-medium">
                              {index === 0 ? 'Today' : new Date(day.date).toLocaleDateString('en-US', { weekday: 'short' })}
                            </div>
                            <div className="text-slate-400 text-xs">{day.day.condition.text}</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-white font-semibold">{day.day.maxtemp_c}°</div>
                          <div className="text-slate-400 text-sm">{day.day.mintemp_c}°</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Additional Weather Details */}
                <div className="bg-slate-800/30 backdrop-blur-xl border border-slate-600/30 rounded-3xl p-6 shadow-2xl">
                  <h3 className="text-white text-lg font-bold mb-4 flex items-center gap-2">
                    📊 Additional Details
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-400 text-sm">Visibility</span>
                      <span className="text-white font-semibold">{weather.current.vis_km} km</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-400 text-sm">Wind Direction</span>
                      <span className="text-white font-semibold">{weather.current.wind_dir}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-400 text-sm">Wind Gust</span>
                      <span className="text-white font-semibold">{weather.current.gust_kph} km/h</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-400 text-sm">Cloud Cover</span>
                      <span className="text-white font-semibold">{weather.current.cloud}%</span>
                    </div>
                  </div>
                </div>

                {/* Weather Alerts */}
                {forecast.alerts && forecast.alerts.alert.length > 0 && (
                  <div className="bg-red-500/10 backdrop-blur-xl border border-red-500/30 rounded-3xl p-6 shadow-2xl">
                    <h3 className="text-red-400 text-lg font-bold mb-4 flex items-center gap-2">
                      ⚠️ Weather Alerts
                    </h3>
                    {forecast.alerts.alert.map((alert, index) => (
                      <div key={index} className="text-red-300 text-sm mb-2">
                        <div className="font-semibold">{alert.headline}</div>
                        <div className="text-red-400 text-xs">{alert.desc}</div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}