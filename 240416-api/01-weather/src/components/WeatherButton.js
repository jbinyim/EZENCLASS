import React from "react";
import { Button } from "react-bootstrap";

const WeatherButton = ({ cities, setCity, getCurrentLocation }) => {
  return (
    <div className="weatherButton">
      <Button variant="warning" onClick={() => getCurrentLocation()}>
        Current Location
      </Button>
      {cities.map((it, idx) => (
        <Button onClick={() => setCity(it)} key={idx} variant="warning">
          {it}
        </Button>
      ))}
    </div>
  );
};

export default WeatherButton;
