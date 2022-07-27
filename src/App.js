import "./App.css";
import ReactionForm from "./components/ReactionForm";
import SafetyTable from "./components/SafetyTable";

function App() {
  const getChemicalInfo = (chemicalList) => {
    for (const chemical in chemicalList) {
      console.log(chemicalList[chemical]);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>hello there it is safety time</p>
      </header>
      <ReactionForm getChemicalInfo={getChemicalInfo}></ReactionForm>
      <SafetyTable></SafetyTable>
    </div>
  );
}

export default App;
