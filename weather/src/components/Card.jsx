import React, { useEffect, useState } from "react";
import Drizzle from "../icons/partly-cloudy-day-drizzle.svg";
import SnowIcon from "../icons/snow.svg";
import ClearSkyIcon from "../icons/clear-day.svg";
import CloudyIcon from "../icons/cloudy.svg";
import RainIcon from "../icons/rain.svg";
import ThunderIcon from "../icons/thunderstorm.svg";
import MistIcon from "../icons/mist.svg";

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
        return <img src={ThunderIcon} />;
      case "3":
        return <img src={Drizzle} />;
      case "5":
        return <img src={RainIcon} />;
      case "6":
        return <img src={SnowIcon} />;
      case "7":
        return <img src={MistIcon} />;
      case "8":
        if (thirdDigit === "0") {
          return <img src={ClearSkyIcon} />;
        } else {
          return <img src={CloudyIcon} />;
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
          <h1>{cityData.name}</h1>

          <h2>
            {Math.round(cityData.main.temp)}°C,{" "}
            {cityData.weather[0].description}
          </h2>
          <h3>Feels like: {Math.round(cityData.main.feels_like)}°C</h3>
        </>
      )}
      {!cityData && (
        <>
          <h1>Hello, please enter a city</h1>
        </>
      )}
    </div>
  );
};

export default Card;
