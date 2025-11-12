// "logo": "./assets/images/logo-devlens.svg",
//         "name": "DevLens",
//         "description": "Quickly inspect page layouts and visualize element boundaries.",
//         "isActive": true
import { useEffect, useState } from "react";

function ExtentionCard() {
  const [isOn, setIsOn] = useState(false);
  const [extensionList, setExtensionList] = useState([]);

  async function fetchData() {
    try {
      const response = await fetch("../../data.json");
      const data = await response.json();
      if (data) {
        setExtensionList(data);
      }
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {" "}
      {extensionList.map((extension) => {
        return (
          <div key={extension.name} className="extension-card">
            <div className="top-part">
              <img src={`./src/${extension.logo}`} alt="" />
              <div className="extension-body">
                <h1 className="extension-header">{extension.name}</h1>
                <p className="extesion-description">{extension.description}</p>
              </div>
            </div>

            <div className="bottom-part">
              <button className=" btn remove-btn">Remove</button>
              <label className="switch">
                <input
                  type="checkbox"
                  checked={extension.isActive}
                  onChange={() => setIsOn(!isOn)}
                />
                <span className="slider" />
              </label>
            </div>
          </div>
        );
      })}
      {/* <div className="extension-card">
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
      </div> */}
    </>
  );
}

export default ExtentionCard;
