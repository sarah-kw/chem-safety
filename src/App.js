import "./App.css";
import { Outlet, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Chemistry Safety Assistant</h1>
        <nav>
          <ul>
            <li>
              <Link to="/safety-assistant">Assistant</Link>
            </li>
            {/* <Link to="/about">About</Link> */}
            <li>
              <Link to="/ghs">What is GHS?</Link>
            </li>
            <li>
              <Link to="data">Data Sources</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
      <footer>
        <p>
          Made by sarah-kw in 2022. This project is Open Source under the terms
          of the MIT License.
        </p>
      </footer>
    </div>
  );
}

export default App;
