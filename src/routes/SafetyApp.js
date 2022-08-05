// import "./App.css";
import ReactionForm from "../components/ReactionForm";
import SafetyTable from "../components/SafetyTable";
import axios from "axios";
import { useState } from "react";
// import { Outlet, Link } from "react-router-dom";

function SafetyApp() {
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
      .get("http://localhost:4567/chemicals", {
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
      <ReactionForm
        className="ReactionForm"
        getChemicalInfo={getChemicalInfo}
      ></ReactionForm>
      {safetyTable}
    </div>
  );
}

export default SafetyApp;
