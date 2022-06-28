import logo from "./logo.svg";
import "./App.css";
import Write from "./components/Write";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        Learn React
      </header>
      <Write />
    </div>
  );
}

export default App;
