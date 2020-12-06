import "./App.css";
import Card from "./components/Card";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { useState, useEffect } from "react";

const useStyles = makeStyles({
  textField: {
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
  const [cityName, setCityName] = useState("Umeå");

  const setCity = (input) => {
    console.log("setting city name");
    setCityName("Luleå");
  };

  useEffect(() => {
    const listener = (event) => {
      if (event.code === "Enter" || event.code === "NumpadEnter") {
        console.log("Enter key was pressed. Run your function.");
        setCity();
      }
    };
    document.addEventListener("keydown", listener);
    return () => {
      document.removeEventListener("keydown", listener);
    };
  }, []);

  return (
    <div className="App">
      <Card cityName={cityName} />
      <TextField
        className={classes.textField}
        variant="filled"
        label="City name"
        inputProps={{ className: classes.input }}
        InputLabelProps={{ className: classes.label }}
      />
    </div>
  );
}

export default App;
