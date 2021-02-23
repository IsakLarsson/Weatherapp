import "./App.css";
import "./components/Card.css";
import Card from "./components/Card.jsx";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { useRef, useState } from "react";
import ForecastCard from "./components/ForecastCard.jsx";

require("dotenv").config();

const useStyles = makeStyles({
  textField: {
    alignSelf: "center",
    width: "70%",
    maxWidth: "400px",
    fontSize: "2rem",
    backgroundColor: "#F2ECFF",
    marginTop: "30px",
    borderRadius: "5px",
    textAlign: "center",
  },
  label: {
    color: "#000",
  },
  input: {
    //fontSize: "25px",
  },
});

function App() {
  const classes = useStyles();
  const [cityData, setCityData] = useState(null);
  const [forecastData, setForecastData] = useState();

  const valueRef = useRef("");

  const today = new Date().getDay() + 1;

  async function getCityData() {
    try {
      let forecastArray = [];
      let API_KEY = process.env.REACT_APP_API_KEY;
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${valueRef.current.value}&units=metric&appid=${API_KEY}`
      );
      const data = await response.json();
      const multiple = await fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${data.coord.lat}&lon=${data.coord.lon}&units=metric&appid=${API_KEY}`
      );
      const multipleData = await multiple.json();
      multipleData.daily.forEach((day) => {
        forecastArray.push(day);
      });

      if (data.cod === "404") {
        console.log("error 404");
      } else {
        setCityData(data);
        setForecastData([]);
        setForecastData(forecastArray);
      }
    } catch (error) {
      console.log(error);
    }
  }

  /*  const getData = () => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=Stockholm&units=metric&appid=7c8a35514e7190836d0122f1a2248d2e`
    ).then((response) => {
      response.json().then((data) => {
        setCityData(data);
        console.log(cityData);
      });
    });
  }; */

  /* const handleChange = (event) => {
    //Fix state update
    event.preventDefault();
    let fieldValue = event.target.value;
    setCityName(fieldValue);
  }; */

  return (
    <div className="App">
      <Card cityData={cityData} />

      <TextField
        inputRef={valueRef}
        className={classes.textField}
        variant="filled"
        label="City name"
        onKeyPress={async (event) => {
          if (event.key === "Enter") {
            getCityData();
          }
        }}
        inputProps={{ className: classes.input }}
        InputLabelProps={{ className: classes.label }}
      />
      <section className="forecasts">
        {forecastData && <h2>Forecast</h2>}

        {forecastData &&
          forecastData.map((day, index) => {
            return (
              <ForecastCard
                data={day}
                key={index}
                index={index}
                day={today + index}
              />
            );
          })}
      </section>
    </div>
  );
}

export default App;
