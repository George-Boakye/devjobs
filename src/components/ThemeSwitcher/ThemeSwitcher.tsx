import React, { useState } from "react";
import "./index.css";
import moon from "../../assets/moon.svg";

export default function ThemeSwitcher() {
  const [dark, setDark] = useState(() => {
    const theme = localStorage.getItem("theme");
    if (theme) {
      document.documentElement.classList.add("dark");
    }
    return theme ? JSON.parse(theme) : false;
  });

  const modifySetDark = (value: any) => {
    setDark(value);
    localStorage.setItem("theme", JSON.stringify(value));
  };

  const toggleTheme = () => {
    modifySetDark(document.documentElement.classList.toggle("dark"));
  };

  return (
    <>
      {" "}
      <div
        className="flex w-[112px] justify-between items-center"
        onClick={toggleTheme}
      >
        <figure>
          <img src="/assets/sun.svg" alt="" />
        </figure>
        <label className="switch ">
          <input type="checkbox" onChange={toggleTheme} checked={dark} />
          <span className="slider"></span>
        </label>
        <figure>
          <img src={moon} alt="" />
        </figure>
      </div>
    </>
  );
}
