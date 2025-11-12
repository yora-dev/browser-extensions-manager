// "logo": "./assets/images/logo-devlens.svg",
//         "name": "DevLens",
//         "description": "Quickly inspect page layouts and visualize element boundaries.",
//         "isActive": true
import { useState } from "react";

function ExtentionCard() {
  const [isOn, setIsOn] = useState(false);
  return (
    <>
      <div className="extension-card">
        <div className="top-part">
          <img src="./src/assets/images/logo-devlens.svg" alt="there" />
          <div className="extension-body">
            <h1 className="extension-header">DevLens</h1>
            <p className="extesion-description">
              Quickly inspect page layouts and visualize element boundaries.
            </p>
          </div>
        </div>

        <div className="bottom-part">
          <button className=" btn remove-btn">Remove</button>
          <label className="switch">
            <input
              type="checkbox"
              checked={isOn}
              onChange={() => setIsOn(!isOn)}
            />
            <span className="slider" />
          </label>
        </div>
      </div>
    </>
  );
}

export default ExtentionCard;
