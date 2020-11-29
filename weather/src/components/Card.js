import React, { Component } from "react";

export default class Card extends Component {
  state = {
    weatherData: "",
    loading: true,
  };

  async componentDidMount() {
    const response = await fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=Umeå&appid=7c8a35514e7190836d0122f1a2248d2e"
    );
    const data = await response.json();
    console.log(data);
    this.setState({
      weatherData: data,
      loading: false,
    });
  }

  render() {
    return <div>{this.state.weatherData.name}</div>;
  }
}
