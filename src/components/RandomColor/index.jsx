import React, { useState } from "react";
import "./RandomStyle.css";

export default function RandomColor() {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");

  const getColorIndex = (length) => {
    return Math.floor(Math.random() * length);
  };

  const makeHexColor = () => {
    console.log("make hex color");
    let colorArray = [0, 1, 2, 3, 4, 5, 6, 7, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
      hexColor += colorArray[getColorIndex(colorArray.length)];
    }
    console.log(hexColor);
    setColor(hexColor);
  };

  const makeRGBcolor = () => {
    const r = getColorIndex(256);
    const g = getColorIndex(256);
    const b = getColorIndex(256);
    const rgbColor = `rgb(${r}, ${g}, ${b})`;
    console.log("make RGB color:", rgbColor);
    setColor(rgbColor);
  };

  return (

    <div style={{ background: color }} className="container-fluid my-height mt-5 h-100">
      
      <div className="row d-flex flex-column justify-content-between h-100">
        <div className="col-12 d-flex justify-content-center mt-4">
          <div className="btn my-btn-color" onClick={() => setTypeOfColor("hex")}>
            HEX Color Generator
          </div>
          <div className="btn my-btn-color" onClick={() => {
            if (typeOfColor === "hex") {
              makeHexColor();
            } else {
              makeRGBcolor();
            }
          }}>
            Change Color
          </div>
          <div className="btn my-btn-color" onClick={() => setTypeOfColor("rgb")}>
            RGB Color Generator
          </div>
        </div>
        <div className="col-12 text-center mt-5">
          <p>Current Color Type: {typeOfColor.toUpperCase()}</p>
          <p>color combination is : {color}</p>
        </div>
      </div>
    </div>
  );
}
