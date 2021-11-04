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
        <div>
          <img className="windows" src={windows} />
        </div>
        <div>
          <img src={folderd} />
        </div>
        <div>
          <img src={google} />
        </div>
        <div>
          <img src={vs} />
        </div>
        <div></div>

        <img src={cdm} />
      </div>
      <div className="hours"></div>
    </div>
  );
};
