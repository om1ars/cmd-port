import { Close, CropSquare, Remove } from "@material-ui/icons";
import { useState } from "react";
import cmd from "./assets/cdm3.png";
import "./styles.css";

function App() {
  const [state, setState] = useState("");
  const [omar, setOmar] = useState("");
  const [please, setPlease] = useState("");

  console.log(state);

  const handleSubmit = (e) => {
    e.preventDefault();
    setState("");
  };

  const handleClick = () => {
    if (state === "omar") {
      setOmar("omar");
      setPlease('')
    } else if (state === "") {
      setPlease("Please type something otherwise you can not see anything");
      setOmar('')
    }
  };

  return (
    <div className="App__container">
      <div className="App__navbar">
        <div className="left">
          <img src={cmd} />
          <h5>Обработчик команд Windows</h5>
        </div>
        <div className="right">
          <Remove />
          <CropSquare />
          <Close />
        </div>
      </div>
      <div className="app__context">
        <p>
          Microsoft Windows [Version 10.0.19042.1288] <br /> (c) Microsoft
          Corporation. All rights reserved. Type <span> omar </span> in ordery
          to get started
        </p>
        <h5>
          C:\Windows\System32
          <form onSubmit={handleSubmit}>
            <input
              value={state}
              onChange={(e) => setState(e.target.value)}
              type="text"
              placeholder="__"
            />
            <button type="submit" onClick={handleClick}></button>
          </form>
          {omar && <p>hello</p>}
          {please && <p>{please}</p>}
        </h5>
      </div>
    </div>
  );
}

export default App;
