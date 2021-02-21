import "./App.css";
import Card from "./components/Card.jsx";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { useState, useEffect } from "react";

const useStyles = makeStyles({
  textField: {
    position: "absolute",
    bottom: "100px",
    width: "400px",
    paddingBottom: 0,
    marginTop: 0,
    fontWeight: 500,
    fontSize: "2rem",
    backgroundColor: "#F2ECFF",
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
  const [cityName, setCityName] = useState("Umeå");

  async function getCityData() {
    console.log("setting city name: ", cityName);
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=7c8a35514e7190836d0122f1a2248d2e`
      );
      const data = await response.json();
      if (data.cod === "404") {
        console.log("error 404");
      } else {
        setCityData(data);
        console.log(cityData);
      }
    } catch (error) {
      console.log(error);
    }
  }

  const getData = () => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=Stockholm&units=metric&appid=7c8a35514e7190836d0122f1a2248d2e`
    ).then((response) => {
      response.json().then((data) => {
        setCityData(data);
        console.log(cityData);
      });
    });
  };

  const handleChange = (event) => {
    let fieldValue = event.target.value;
    setCityName(fieldValue);
  };

  useEffect(() => {
    /* const listener = (event) => {
      if (event.code === "Enter" || event.code === "NumpadEnter") {
        console.log("Enter key was pressed");
        console.log("current city name: ", cityName);

        let data = getCityData();
        
        console.log("APP.js city state: ", cityData);
      }
    }; */
    return () => {};
  });

  return (
    <div className="App">
      <Card cityData={cityData} />

      <TextField
        className={classes.textField}
        variant="filled"
        onChange={handleChange}
        label="City name"
        onKeyPress={(event) => {
          if (event.key === "Enter") {
            getCityData();
          }
        }}
        inputProps={{ className: classes.input }}
        InputLabelProps={{ className: classes.label }}
      />
    </div>
  );
}

export default App;
