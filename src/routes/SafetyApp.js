// import "./App.css";
import ReactionForm from "../components/ReactionForm";
import SafetyTable from "../components/SafetyTable";
import axios from "axios";
import { useState } from "react";
import DrawReactionForm from "../components/DrawReactionForm";
import { Link, Outlet, Route } from "react-router-dom";
// import { Outlet, Link } from "react-router-dom";

function SafetyApp() {
  const deployedURL = "https://chemsafetyasstbackend.azurewebsites.net";
  const [reactionSafetyInfo, setReactionSafetyInfo] = useState(null);

  const getChemicalInfo = (chemicalList) => {
    const requestParams = {};

    for (let i = 0; i < chemicalList["reactants"].length; i++) {
      console.log(chemicalList["reactants"][i]);
      if (
        !(chemicalList["reactants"][i] === null) &&
        !(chemicalList["reactants"][i] === "")
      ) {
        requestParams[i] = chemicalList["reactants"][i];
      }
    }
    axios
      .get(`${deployedURL}/chemicals`, {
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

  return (
    <div className="SafetyApp">
      <Link to="/safety-assistant/draw">draw</Link>
      <Link to="/safety-assistant/text">text</Link>
      <Outlet context={[getChemicalInfo]} />
      {/* <ReactionForm
        className="ReactionForm"
        getChemicalInfo={getChemicalInfo}
      ></ReactionForm>
      <DrawReactionForm getChemicalInfo={getChemicalInfo} /> */}
      {safetyTable}
    </div>
  );
}

export default SafetyApp;
