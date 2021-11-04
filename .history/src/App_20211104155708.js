import { Close, CropSquare, Fastfood, Remove } from "@material-ui/icons";
import { useState } from "react";
import cmd from "./assets/cdm3.png";
import "./styles.css";

function App() {
  const [state, setState] = useState("");
  const [stateSecond, setStateSecond] = useState("");
  const [omar, setOmar] = useState("");
  const [please, setPlease] = useState("");
  const [port, setPort] = useState("");
  const [about, setAbout] = useState("");
  const [exit, setExit] = useState("");
  const [shrink, setShrink] = useState(false);
  const [closeIcon, setCloseIcon] = useState(false);

  console.log(state);

  const handleSubmit = (e) => {
    e.preventDefault();
    setState("");
  };

  const handleSubmitSecond = (e) => {
    e.preventDefault();
    setStateSecond("");
  };

  const handleClick = () => {
    if (state === "omar") {
      setOmar("omar");
      setPlease("");
    } else if (state === "") {
      setPlease("Please type something otherwise you can not see anything");
      setOmar("");
    }
  };
  const handleClickSecond = () => {
    if (stateSecond === "exit") {
      setExit("exited");
      setAbout("");
      setPort("");
    } else if (stateSecond === "port") {
      setPort("port");
      setAbout("");
      setExit("");
    } else if (stateSecond === "about") {
      setPort("about");
      setAbout("");
      setExit("");
    }
  };

  const handleShrink = () => {
    setShrink(!shrink);
  };

  const handleCloseIcon = () => {
    setCloseIcon(!close)
  }

  return (
    <div className={`App__container ${shrink && `shrink`}`}>
      <div className="App__navbar">
        <div className="left">
          <img src={cmd} />
          <h5>Обработчик команд Windows</h5>
        </div>
        <div className="right">
          <Remove />
          <CropSquare onClick={handleShrink} />
          <Close onClick={handleCloseIcon} />
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
        </h5>
        {please && <h1>{please}</h1>}
        {omar && (
          <div className="second__layer">
            <h1>My name is Omar and I am a Fullstack Developer</h1>
            <p>
              Type <span>port</span> to get my portfolio
            </p>
            <p>
              Type <span>about</span> to get about me
            </p>
            <p>
              Type <span>exit</span> to quit
            </p>
            <h5>
              C:\Windows\System32
              <form onSubmit={handleSubmitSecond}>
                <input
                  value={stateSecond}
                  onChange={(e) => setStateSecond(e.target.value)}
                  type="text"
                  placeholder="__"
                />
                <button type="submit" onClick={handleClickSecond}></button>
              </form>
            </h5>
          </div>
        )}
        {port && <p className="">{port}</p>}
        {about && <p className="">{about}</p>}
        {exit && <p className="">{exit}</p>}
      </div>
    </div>
  );
}

export default App;
