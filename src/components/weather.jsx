import { useEffect, useState } from "react";
import WeatherForm from "./weatherForm";
import WeatherMainInfo from "./weatherMainInfo";

export default function WeatherApp() {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    loadInfo();
  }, []);

  useEffect(() => {
    document.title = `Weather | ${weather?.location.name ?? ""}`;
  }, [weather]);

  async function loadInfo(city = "london") {
    const key = "50bb825efd244b6ba9b231431220708";
    try {
      const request = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=${key}&q=${city}&aqi=no`
      );
      const json = await request.json();
      console.log(json);
      setWeather(json);
    } catch (error) {
      console.log(`Este es el error: ${error}`);
    }
  }

  function handleChangeCity(city) {
    setWeather(null);
    loadInfo(city);
  }

  return (
    <div>
      <WeatherForm OnChangeCity={handleChangeCity} />
      <WeatherMainInfo weather={weather} />
    </div>
  );
}
