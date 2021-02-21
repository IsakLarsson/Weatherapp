import React, { useEffect, useState } from "react";
import Drizzle from "../icons/partly-cloudy-day-drizzle.svg";
import SnowIcon from "../icons/snow.svg";
import ClearSkyIcon from "../icons/clear-day.svg";
import CloudyIcon from "../icons/cloudy.svg";
import RainIcon from "../icons/rain.svg";
import ThunderIcon from "../icons/thunderstorm.svg";

const Card = (props) => {
  const [cityData, setCityData] = useState();

  useEffect(() => {
    setCityData(props.cityData);
    return () => {};
  }, [props.cityData]);

  const WeatherIcon = () => {
    let weatherCode = cityData.weather[0].id;

    let firstDigit = String(weatherCode).charAt(0);
    console.log(firstDigit);
    switch (firstDigit) {
      case 6:
        console.log("yeet");
        return <img src={SnowIcon} />;
      case "clear sky":
        return <img src={ClearSkyIcon} />;
      default:
        return <></>;
        break;
    }
  };

  return (
    <div>
      <div className="card">
        {cityData && (
          <>
            <WeatherIcon />
            <h1>{cityData.name}</h1>
            <h2>{Math.round(cityData.main.temp)}°C</h2>
            <h3>Feels like: {Math.round(cityData.main.feels_like)}°C</h3>
          </>
        )}
        {!cityData && (
          <>
            {" "}
            <h1>Hello, please enter a city</h1>
          </>
        )}
      </div>
    </div>

    /* <div className="card">
      <img src={Drizzle} alt="weathericon" />

      <h1>{this.state.weatherData.name}</h1>
      <p>
        {condition} {this.state.temp}°C, feels like {this.state.feelsLike}°C
      </p>
    </div> */
  );
};

export default Card;
