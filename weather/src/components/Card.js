import React, { Component } from "react";
import Drizzle from "../icons/partly-cloudy-day-drizzle.svg";

export default class Card extends Component {
  state = {
    weatherData: "",
    temp: null,
    loading: true,
  };

  async componentDidMount() {
    const response = await fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=Umeå&units=metric&appid=7c8a35514e7190836d0122f1a2248d2e"
    );
    const data = await response.json();
    console.log(data);
    this.setState({
      weatherData: data,
      temp: data.main.temp,
      loading: false,
    });
  }

  render() {
    return (
      <div className="card">
        <div className="upperCard">
          <img src={Drizzle} alt="weathericon" />
        </div>
        <div className="lowerCard">
          <h1>{this.state.weatherData.name}</h1>
          <h1>{this.state.temp}°C</h1>
        </div>
      </div>
    );
  }
}
