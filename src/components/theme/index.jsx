import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { ImCog } from "react-icons/im";
import setTheme from "../../helpers/theme";
import './style.scss'

const colorsArray = [
  {
    id: "yellow",
    bgCOlor: "#ffdd40",
  },

  {
    id: "red",
    bgCOlor: "#E82A2A",
  },

  {
    id: "green",
    bgCOlor: "#6ac045",
  },

  {
    id: "blue",
    bgCOlor: "#5078ff",
  },

  {
    id: "orange",
    bgCOlor: "#f35e18",
  },


];

const Theme = () => {
  const [theme, setCurrentTheme] = useState("yellow");
  const [toggle, setToggle] = useState(false);

  const handleToggleTheme = (currentId) => {
    setCurrentTheme(currentId);
    setToggle(false);
  };

  useEffect(()=>{
    setTheme(theme)
  },[theme])

 
  return (
    <div className={`theme-wrapper ${toggle ? "active" : ""}`}>
      <div className="theme-wrapper__toggle-icon">
        <ImCog onClick={() => setToggle(!toggle)} size={40} />
      </div>

      <div className="theme-wrapper__menu">
        <h4>Choose Theme</h4>
        <ul>
          {colorsArray.map((item, key) => (
            <li
              onClick={() => handleToggleTheme(item.id)}
              key={key}
              style={{ background: item.bgCOlor }}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Theme;
