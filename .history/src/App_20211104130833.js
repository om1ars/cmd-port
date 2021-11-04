import "./App.css";
import cmd from "./assets/cdm3.png";

function App() {
  return (
    <div className="App__container">
      <div className="App__navbar">
        <img src={cmd} />
        <h5>Обработчик команд Windows</h5>
      </div>
      <div className="app__context">
        <p>
          Microsoft Windows [Version 10.0.19042.1288] <br /> (c) Microsoft Corporation.
          All rights reserved.
        </p>
        
      </div>
    </div>
  );
}

export default App;
