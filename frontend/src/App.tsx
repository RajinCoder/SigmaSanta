import "./App.css";
import { useState, useEffect } from "react";

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
      {typeof data.members === "undefined" ? (
        <p>Loading</p>
      ) : (
        data.members.map((member, i) => <p key={i}>{member}</p>)
      )}
    </div>
  );
}

export default App;
