import React, { useEffect, useState } from "react";
import Drizzle from "../icons/partly-cloudy-day-drizzle.svg";
import SnowIcon from "../icons/snow.svg";
import ClearSkyIcon from "../icons/clear-day.svg";
import CloudyIcon from "../icons/cloudy.svg";
import RainIcon from "../icons/rain.svg";
import ThunderIcon from "../icons/thunderstorm.svg";
import MistIcon from "../icons/mist.svg";
import "../components/Card.css";

const { getName } = require("country-list");

const Card = (props) => {
  const [cityData, setCityData] = useState();

  useEffect(() => {
    setCityData(props.cityData);
    return () => {};
  }, [props.cityData]);

  const WeatherIcon = () => {
    let weatherCode = cityData.weather[0].id;
    let weatherCodeString = String(weatherCode);
    let firstDigit = weatherCodeString.charAt(0);
    let thirdDigit = weatherCodeString.charAt(2);
    switch (firstDigit) {
      case "2":
        return <img src={ThunderIcon} alt="Thunder" />;
      case "3":
        return <img src={Drizzle} alt="Drizzle" />;
      case "5":
        return <img src={RainIcon} alt="Rain" />;
      case "6":
        return <img src={SnowIcon} alt="Snow" />;
      case "7":
        return <img src={MistIcon} alt="Mist" />;
      case "8":
        if (thirdDigit === "0") {
          return <img src={ClearSkyIcon} alt="Clear sky" />;
        } else {
          return <img src={CloudyIcon} alt="Clouds" />;
        }
      default:
        return <></>;
    }
  };

  return (
    <div className="card">
      {cityData && (
        <>
          <WeatherIcon />
          <h1>
            {cityData.name}, {getName(cityData.sys.country)}
          </h1>

          <h2>
            {Math.round(cityData.main.temp)}°C,{" "}
            {cityData.weather[0].description}
          </h2>
          <h3>Feels like: {Math.round(cityData.main.feels_like)}°C</h3>
        </>
      )}
      {!cityData && (
        <>
          <h1>Please enter a city</h1>
        </>
      )}
    </div>
  );
};

export default Card;
