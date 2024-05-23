import "./App.css";
import endavaLogo from "../public/endava.svg";

function App() {
  return (
    <main>
      <img src={endavaLogo} alt="EndavaLogo" className="endava-logo" />
      <div className="container">
        <h1>REACT 19</h1>
        <div className="button-group">
          <button>Client API</button>
          <button>Server API</button>
          <button>Improvments</button>
        </div>
      </div>
    </main>
  );
}

export default App;
