import "./App.css";
import { Outlet, NavLink } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Chemistry Safety Assistant</h1>
        <nav>
          <ul>
            <li>
              <NavLink to="/safety-assistant">Assistant</NavLink>
            </li>
            <li>
              <NavLink to="/ghs">What is GHS?</NavLink>
            </li>
            <li>
              <NavLink to="data">Data Sources</NavLink>
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
