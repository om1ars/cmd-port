import "./App.css";
import cmd from './assets/cmd3.png'

function App() {
  return (
    <div className="App__container">
      <div className="App__navbar">
        <img src={cmd} />
        <h5>Обработчик команд Windows</h5>
      </div>
    </div>
  );
}

export default App;
