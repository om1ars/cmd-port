import React from "react";
import cdm from  "./assets/cdm.png";
import vs from "./assets/vs.jpg";
import "./assets/google.png";
import "./assets/folderd.jpg";
import "./assets/windows.jpg";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="icons">
        <img src={windows} />
        <img src={folderd} />
        <img src={google} />
        <img src={vs} />
        <img src={cdm} />
      </div>
      <div className="hours"></div>
    </div>
  );
};
