import "./App.css";
import { Outlet, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>hello there it is safety time</p>
        <nav>
          <Link to="/safety-assistant">Safety Assistant</Link>
          {/* <Link to="/about">About</Link> */}
          <Link to="/ghs">What is GHS?</Link>
        </nav>
      </header>
      <Outlet />
    </div>
  );
}

export default App;
