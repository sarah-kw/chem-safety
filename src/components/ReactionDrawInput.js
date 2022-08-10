import { Jsme } from "jsme-react";
const ReactionDrawInput = ({ id, deleteSlot, updateCallback, smiles }) => {
  return (
    <div className="DrawInputField" key={id}>
      <Jsme
        height="300px"
        width="350px"
        onChange={(smiles) => updateCallback(id, smiles)}
        options="nozoom"
        smiles={smiles}
      ></Jsme>
      <button id={id} type="button" onClick={() => deleteSlot(id)}>
        Delete
      </button>
    </div>
  );
};

export default ReactionDrawInput;
