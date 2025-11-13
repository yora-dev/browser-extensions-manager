import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

function ExtentionCard() {
  const [allExtensions, setAllExtensions] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [filterType, setFilterType] = useState("All");
  const [lightTheme, setLightTheme] = useState(false);

  async function fetchData() {
    try {
      const response = await fetch("../../data.json");
      const data = await response.json();
      setAllExtensions(data);
      setFilteredList(data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    let filtered = [];
    if (filterType === "All") filtered = allExtensions;
    else if (filterType === "Active")
      filtered = allExtensions.filter((ext) => ext.isActive);
    else if (filterType === "Inactive")
      filtered = allExtensions.filter((ext) => !ext.isActive);

    setFilteredList(filtered);
  }, [filterType, allExtensions]);

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      lightTheme ? "light" : "dark"
    );
  }, [lightTheme]);

  const navLinkClass = ({ isActive }) =>
    `link ${isActive ? "active-link" : ""}`;

  function handleClickEvent(value) {
    setFilterType(value);
  }

  function handleToggle(name) {
    setAllExtensions((prev) =>
      prev.map((ext) =>
        ext.name === name ? { ...ext, isActive: !ext.isActive } : ext
      )
    );
  }

  function handleRemove(name) {
    setAllExtensions((prev) => prev.filter((ext) => ext.name !== name));
  }

  return (
    <div className={`app-container ${lightTheme ? "light" : "dark"}`}>
      <nav className="navbar">
        <div className="search-bar">
          <img src="./src/assets/images/logo.svg" alt="logo" className="logo" />
          <div
            className="img-container"
            onClick={() => setLightTheme(!lightTheme)}
          >
            <img
              src={
                lightTheme
                  ? "./src/assets/images/icon-moon.svg"
                  : "./src/assets/images/icon-sun.svg"
              }
              className="theme-img"
              alt="theme toggle"
            />
          </div>
        </div>

        <div className="filter-container">
          <h1 className="filter-header">Extensions List</h1>
          <div className="filter-list">
            <NavLink
              to="/"
              className={navLinkClass}
              onClick={() => handleClickEvent("All")}
            >
              All
            </NavLink>
            <NavLink
              to="/active"
              className={navLinkClass}
              onClick={() => handleClickEvent("Active")}
            >
              Active
            </NavLink>
            <NavLink
              to="/inactive"
              className={navLinkClass}
              onClick={() => handleClickEvent("Inactive")}
            >
              Inactive
            </NavLink>
          </div>
        </div>
      </nav>

      {filteredList.map((extension) => (
        <div key={extension.name} className="extension-card">
          <div className="top-part">
            <img src={`./src/${extension.logo}`} alt={extension.name} />
            <div className="extension-body">
              <h1 className="extension-header">{extension.name}</h1>
              <p className="extension-description">{extension.description}</p>
            </div>
          </div>

          <div className="bottom-part">
            <button
              className="btn remove-btn"
              onClick={() => handleRemove(extension.name)}
            >
              Remove
            </button>

            <label className="switch">
              <input
                type="checkbox"
                checked={extension.isActive}
                onChange={() => handleToggle(extension.name)}
              />
              <span className="slider" />
            </label>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ExtentionCard;
