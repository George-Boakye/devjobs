import React, { useContext } from "react";
import { CheckBoxContext } from "../providers";
import "./Checkbox.css";

export default function Checkbox() {
  const { check, setCheck } = useContext(CheckBoxContext);
  console.log(check);

  return (
    <>
      <div className="checkbox-wrapper h-[5rem]  flex items-center">
        <label className="main">
          <input
            className="dark:bg-dark-blue"
            type="checkbox"
            checked={check}
            onChange={(e) => {
              setCheck(e.target.checked);
            }}
          />
          <span className="mark"></span>
        </label>
      </div>
    </>
  );
}
