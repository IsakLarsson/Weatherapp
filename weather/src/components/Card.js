import React, { Component } from "react";
import Drizzle from "../icons/partly-cloudy-day-drizzle.svg";

export default class Card extends Component {
  state = {
    weatherData: "",
    temp: null,
    loading: true,
    condition: "",
    feelsLike: "",
  };

  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  async componentDidMount() {
    const response = await fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=Umeå&units=metric&appid=7c8a35514e7190836d0122f1a2248d2e"
    );
    const data = await response.json();
    console.log(data);
    this.setState({
      weatherData: data,
      loading: false,
      condition: data.weather[0].description,
      temp: Math.round(data.main.temp),
      feelsLike: Math.round(data.main.feels_like),
    });
  }

  render(props) {
    let condition = this.capitalizeFirstLetter(this.state.condition);
    return (
      <div className="card">
        <img src={Drizzle} alt="weathericon" />

        <h1>{this.state.weatherData.name}</h1>
        <p>
          {condition} {this.state.temp}°C, feels like {this.state.feelsLike}°C
        </p>
      </div>
    );
  }
}
