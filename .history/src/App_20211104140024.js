import cmd from "./assets/cdm3.png";
import "./styles.css";

function App() {
  return (
    <div className="App__container">
      <div className="App__navbar">
        <div className="left">
          <img src={cmd} />
          <h5>Обработчик команд Windows</h5>
        </div>
        <div className="right"></div>
      </div>
      <div className="app__context">
        <p>
          Microsoft Windows [Version 10.0.19042.1288] <br /> (c) Microsoft
          Corporation. All rights reserved.
        </p>
        <h5>C:\Windows\System32 <span>_</span> </h5>
      </div>
    </div>
  );
}

export default App;
