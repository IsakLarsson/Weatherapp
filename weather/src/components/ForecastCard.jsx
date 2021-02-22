import React from "react";
import "../components/ForecastCard.css";
import Drizzle from "../icons/partly-cloudy-day-drizzle.svg";
import SnowIcon from "../icons/snow.svg";
import ClearSkyIcon from "../icons/clear-day.svg";
import CloudyIcon from "../icons/cloudy.svg";
import RainIcon from "../icons/rain.svg";
import ThunderIcon from "../icons/thunderstorm.svg";
import MistIcon from "../icons/mist.svg";
import NightIcion from "../icons/night.svg";
import DayIcon from "../icons/sun.svg";

function ForecastCard(props) {
  /* This could really be its own component so that i wouldnt need to
  write it twice... oh well, wasn't planning on making forecasts */
  const WeatherIcon = () => {
    let weatherCode = props.data.weather[0].id;
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
    <div className="forecast-card">
      <div className="left">
        <WeatherIcon />
      </div>
      <div className="right">
        <h1>
          Day:{props.index + 1} Max:{props.data.temp.max}
        </h1>
        <h1>Min: {props.data.temp.min}</h1>
        <h1>Desc: {props.data.weather[0].description}</h1>
        <p>fontweight</p>
      </div>
    </div>
  );
}

export default ForecastCard;
