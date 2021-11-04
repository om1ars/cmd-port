import React from "react";
import cdm from "./assets/cdm.png";
import vs from "./assets/vs.jpg";
import google from "./assets/google.png";
import folderd from "./assets/folderd.jpg";
import windows from "./assets/windows.jpg";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="icons">
        <div></div>
        <div></div>
        <div></div>
        <div>
          <img className="windows" src={windows} />
        </div>
        <div>
          <img src={folderd} />
        </div>
        <img src={google} />
        <img src={vs} />
        <img src={cdm} />
      </div>
      <div className="hours"></div>
    </div>
  );
};
