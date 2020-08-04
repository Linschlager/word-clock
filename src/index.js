import React from "react";
import ReactDOM from "react-dom";
import Grid from "./Grid";
import loader from "./languagePack/loader";
import { useTime } from "./util";

import "./styles.scss";

function App({ lang = "de" }) {
  const time = useTime(); // Get current time
  //const time = useDemoTime(); // for testing all possible times
  const { letters, getActive, transformTime } = loader(lang); // Load LanguagePack
  const [hour, five, minute] = transformTime(time); // Transform time according to the LanguagePack
  const active = getActive(hour, five, minute); // Get active letter indices
  return <Grid letters={letters} activeChars={active} minutes={minute} />; // render grid
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
