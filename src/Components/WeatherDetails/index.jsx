import React from "react";

const index = ({ weatherData }) => {
  function getCurrentDate() {
    return new Date().toLocaleDateString("en-us", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  }
  return (
    <div>
      <div className="date">
        <h4>{getCurrentDate()}</h4>
      </div>
      <div className="city-name">
        <h1>
          {weatherData?.name} , <span>{weatherData?.sys?.country}</span>
        </h1>
      </div>
      <div className="coord">
        <h3>Latitude :{weatherData?.coord?.lat}</h3>
        <h3>Longitude :{weatherData?.coord?.lon}</h3>
      </div>

      <div className="description">
        <h4>
          Weather Type :
          {weatherData &&
            weatherData?.weather &&
            weatherData?.weather[0]?.description}
        </h4>
        <h4>Visibility: {weatherData?.visibility}</h4>
      </div>
      <div className="temperature_details">
        <h4>Temperature : {weatherData?.main?.temp}</h4>
        <h4>Feels Like : {weatherData?.main?.feels_like}</h4>
        <h4> Min Temperature : {weatherData?.main?.temp_min}</h4>
        <h4>Max Temperature : {weatherData?.main?.temp_max}</h4>
        <h4>Pressure : {weatherData?.main?.pressure}</h4>
        <h4>Humidity :{weatherData?.main?.humidity} </h4>
      </div>
    </div>
  );
};

export default index;
