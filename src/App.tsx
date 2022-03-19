import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Component/Home";
import InfoDetails from "./Component/InfoDetails";
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  headerText: {
    textAlign: "center",
  },
  body: {
    marginLeft: "2rem",
    marginRight: "2rem",
    backgroundColor: "#009688",
    color: "white",
  },
  pointer: {
    cursor: "pointer",
  },
});

function App() {
  const classes = useStyles();

  return (
    <BrowserRouter>
      <div>
        <h2 className={classes.headerText}>Find Your Information </h2>
        <div className={classes.body}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/infoDetails" element={<InfoDetails />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
