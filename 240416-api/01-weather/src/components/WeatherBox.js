import React from "react";

const WeatherBox = ({ weather }) => {
  const changeWeatherName = (it) => {
    switch (it) {
      case "Paris":
        return "파리";
      case "New York":
        return "뉴욕";
      case "Tokyo":
        return "도쿄";
      case "Seoul":
        return "서울";
      default:
        return it;
    }
  };

  return (
    <div className="weatherBox">
      <h2>도시명 : {weather?.name && changeWeatherName(weather?.name)}</h2>
      <h2>
        온도 : {weather?.main.temp}℃ / 습도 : {weather?.main.humidity}%
      </h2>
      <h3>현재날씨 : {weather?.weather[0].description}</h3>
    </div>
  );
};

export default WeatherBox;
