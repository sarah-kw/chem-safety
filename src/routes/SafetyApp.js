import SafetyTable from "../components/SafetyTable";
import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";

function SafetyApp() {
  const deployedURL = "https://chemsafetyasstbackend.azurewebsites.net";
  const localURL = "http://localhost";
  const [reactionSafetyInfo, setReactionSafetyInfo] = useState(null);

  const getChemicalInfo = (chemicalList) => {
    const requestParams = {};

    for (let i = 0; i < chemicalList["reactants"].length; i++) {
      console.log(chemicalList["reactants"][i]);
      if (
        !(chemicalList["reactants"][i] === null) &&
        !(chemicalList["reactants"][i] === "")
      ) {
        const param_id = `r${i}`;
        requestParams[param_id] = chemicalList["reactants"][i];
      }
    }
    for (let i = 0; i < chemicalList["products"].length; i++) {
      console.log(chemicalList["products"][i]);
      if (
        !(chemicalList["products"][i] === null) &&
        !(chemicalList["products"][i] === "")
      ) {
        const param_id = `p${i}`;
        requestParams[param_id] = chemicalList["products"][i];
      }
    }
    console.log(requestParams);
    axios
      .get(`${deployedURL}/chemicals`, {
        // .get(`${localURL}/chemicals`, {
        params: requestParams,
        // headers: {
        //   // "Access-Control-Request-Headers": "hello",
        // },
      })
      .then((res) => {
        console.log(res.data);
        // console.log(res.headers);
        setReactionSafetyInfo(res.data);
      })
      .catch((err) => {
        console.log(err);
        console.log(err.response.data);
      });
  };
  // getChemicalInfo(["CC"]);

  const safetyTable =
    reactionSafetyInfo === null ? null : (
      <SafetyTable safetyInfo={reactionSafetyInfo}></SafetyTable>
    );

  // Removes safety table content when switching between sub-apps
  const setSafetyTableNull = () => {
    setReactionSafetyInfo(null);
  };
  const location = useLocation();
  useEffect(() => {
    setSafetyTableNull();
  }, [location]);

  return (
    <div className="SafetyApp">
      <header className="SafetyAppHeader">
        <h2>Safety Assistant</h2>
        <nav>
          <ul>
            <li>
              <NavLink to="/safety-assistant/text">
                Text (name or SMILES)
              </NavLink>
            </li>
            <li>
              <NavLink to="/safety-assistant/draw">Draw Molecules</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet context={[getChemicalInfo]} />
      {safetyTable}
    </div>
  );
}

export default SafetyApp;
