import "./styles.css";
import { useState, useEffect } from "react";
import CreateMeow from "./components/CreateMeow";
import Timeline from "./components/Timeline";

export default function App() {
  const [meows, setMeows] = useState([]);

  useEffect(() => {
    fetch("https://cyf-cors-api.herokuapp.com/meows")
      .then(res => res.json())
      .then(setMeows)
  });
  
  return (
    <div className="App">
      <CreateMeow />
      <h1>Kitter</h1>
      <Timeline meows={meows} />
    </div>
  );
}
