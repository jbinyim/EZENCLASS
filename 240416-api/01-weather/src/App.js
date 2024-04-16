import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ClipLoader from "react-spinners/ClipLoader";
import WeatherBox from "./components/WeatherBox";
import WeatherButton from "./components/WeatherButton";
import { useEffect, useState } from "react";

const API_KEY = process.env.REACT_APP_API_KEY;
// 등록후 서버 다시 열기
function App() {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(true);
  const cities = ["paris", "new york", "tokyo", "seoul"];

  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      getWeatherByCurrentLocation(lat, lon);
    });
  };
  const getWeatherByCurrentLocation = async (lat, lon) => {
    const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&lang=kr&units=metric`;

    const response = await fetch(URL);
    const data = await response.json();
    setLoading(false);
    setWeather(data);
  };
  const getWeatherByCity = async () => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&lang=kr&units=metric`;

    const response = await fetch(url);
    const data = await response.json();
    setLoading(false);
    setWeather(data);
  };

  useEffect(() => {
    if (city === "") {
      getCurrentLocation();
    } else {
      getWeatherByCity();
    }
  }, [city]);

  // useEffect(() => {
  //   getCurrentLocation();
  // }, []); // 최초의 한번만 랜더링하기위해 의존생 배열

  // useEffect(() => {
  //   getWeatherByCity();
  // }, [city]); // city가 변경될때마다 랜더링

  // Current Location 버튼 예시2)
  // const handleCityChange = (city) => {
  //   if (city === "current") {
  //     setWeather(getCurrentLocation());
  //   } else {
  //     setCity(city);
  //   }
  // };

  return (
    <div className="App">
      {loading ? (
        <div className="container">
          <ClipLoader color="#f88c6b" loading={loading} size={150} />
        </div>
      ) : (
        <div className="container">
          <WeatherBox weather={weather} />
          <WeatherButton
            cities={cities}
            setCity={setCity}
            getCurrentLocation={getCurrentLocation}
          />
        </div>
      )}
    </div>
  );
}

export default App;
