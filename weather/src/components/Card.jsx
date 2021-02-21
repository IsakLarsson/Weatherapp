import React, { useEffect, useState } from "react";
import Drizzle from "../icons/partly-cloudy-day-drizzle.svg";
import SnowIcon from "../icons/snow.svg";
import ClearSkyIcon from "../icons/clear-day.svg";
import CloudyIcon from "../icons/cloudy.svg";

const Card = (props) => {
  const [cityData, setCityData] = useState();

  useEffect(() => {
    console.log(props.cityData);
    setCityData(props.cityData);
    return () => {};
  }, [props.cityData]);

  const WeatherIcon = () => {
    switch (cityData.weather[0].description) {
      case "snow":
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
      {cityData && (
        <div className="card">
          <WeatherIcon />
          <h1>{props.hej}</h1>
          <h1>{cityData.name}</h1>
          <h2>{Math.round(cityData.main.temp)}°C</h2>
          <h3>Feels like: {Math.round(cityData.main.feels_like)}°C</h3>
          <p>{cityData.weather[0].description}</p>
        </div>
      )}
      {!cityData && (
        <>
          {" "}
          <h1>Hello, please enter a city</h1>
        </>
      )}
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
