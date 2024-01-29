import React, { useState } from "react";
import Search from "../Search";
import WeatherDetails from "../WeatherDetails";

const Weather = () => {
  const [searchValue, setSearchValue] = useState("");
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState("");
  const [weatherData, setWeatherData] = useState(null);

  async function getWeatherInfo() {
    setLoader(true);
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&appid=f6cb8120db323a3426dbbee831007c96`
      );
      const data = await response.json();
      setWeatherData(data);
      setLoader(false);
    } catch (err) {
      setLoader(false);
      setError(err.message);
      console.log("Error Occurred", err);
    }
  }

  async function handleSearch() {
    getWeatherInfo();
  }

  return (
    <div>
      <Search
        search={searchValue}
        setSearch={setSearchValue}
        handleSearch={handleSearch}
      />
      {loader ? (
        <div>Loading .......</div>
      ) : weatherData === null ? (
        <h4>Nothing To Show !!</h4>
      ) : (
        <WeatherDetails weatherData={weatherData} />
      )}
    </div>
  );
};

export default Weather;
