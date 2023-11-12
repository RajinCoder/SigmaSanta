import "./App.css";
import { useState, useEffect } from "react";
import Title from "./components/Title";

function App() {
  const [data, setData] = useState<{ members?: string[] }>({}); // Explicitly define the type here

  useEffect(() => {
    fetch("http://127.0.0.1:5000/members")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        console.log(data);
      });
  });
  return (
    <div>
      <Title name="Sigma Santa"/>
    </div>
  );
}

export default App;
