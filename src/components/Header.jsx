import { useState } from "react";
import { NavLink } from "react-router-dom";
import "../App.css";
function Header() {
  const [lightTheme, setLightTheme] = useState(false);
  const navLinkClass = ({ isActive }) =>
    `link ${isActive ? "active-link" : ""}`;

  return (
    <nav className="navbar">
      <div className="search-bar">
        <img src="./src/assets/images/logo.svg" alt="" className="logo" />
        <div
          className="img-container"
          onClick={() => setLightTheme(!lightTheme)}
        >
          {lightTheme ? (
            <img
              src=" ./src/assets/images/icon-moon.svg"
              className="theme-img"
            />
          ) : (
            <img src="./src/assets/images/icon-sun.svg" className="theme-img" />
          )}
        </div>
      </div>

      <div className="filter-container">
        <h1 className="filter-header">Extensions List</h1>

        <div className="filter-list">
          <NavLink className={navLinkClass} to="/">
            All
          </NavLink>
          <NavLink className={navLinkClass} to="active">
            Active
          </NavLink>
          <NavLink className={navLinkClass} to="inactive">
            Inactive
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Header;
