import { useState } from "react";
import "../App.css";

export default function test() {
  const [isOn, setIsOn] = useState(false);

  return (
    <div className="container">
      <button
        className={`toggle-btn ${isOn ? "on" : "off"}`}
        onClick={() => setIsOn(!isOn)}
      >
        {isOn ? "ON" : "OFF"}
      </button>
    </div>
  );
}
