import { Jsme } from "jsme-react";
import React, { useState } from "react";
import ReactionDrawInput from "./ReactionDrawInput";
import { useOutletContext } from "react-router-dom";

// const DrawReactionForm = ({ getChemicalInfo }) => {
const DrawReactionForm = () => {
  const getChemicalInfo = useOutletContext()[0];
  const [formData, setFormData] = useState({
    reactants: ["", ""],
    products: ["", ""],
  });

  const deleteReactantSlot = (id) => {
    const updatedFormData = { ...formData };
    delete updatedFormData["reactants"][id];
    setFormData(updatedFormData);
    console.log(updatedFormData);
  };

  const deleteProductSlot = (id) => {
    const updatedFormData = { ...formData };
    delete updatedFormData["products"][id];
    setFormData(updatedFormData);
    console.log(updatedFormData);
  };

  const addReactantSlot = () => {
    const updatedFormData = { ...formData };
    updatedFormData["reactants"].push("");
    setFormData(updatedFormData);
  };

  const addProductSlot = () => {
    const updatedFormData = { ...formData };
    updatedFormData["products"].push("");
    setFormData(updatedFormData);
  };

  const onFormChange = (event) => {
    console.log(event);
    console.log(`id is ${event.target.id}`);
    // const inputClass = event.target.name;
    const inputValue = event.target.value;
    console.log(inputValue);

    // const updatedFormData = { ...formData };
    // updatedFormData[inputClass][event.target.id] = inputValue;

    // setFormData(updatedFormData);
    // console.log(updatedFormData);
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    getChemicalInfo(formData);
  };
  // const onSketchChange = (smiles) => {
  //   console.log(smiles);
  // };
  const updateCallback = (id, smiles) => {
    const updatedFormData = { ...formData };
    updatedFormData["reactants"][id] = smiles;
    setFormData(updatedFormData);
    console.log(updatedFormData);
  };

  const reactantInputs = formData.reactants.map((reactant, index) => {
    return reactant === undefined ? null : (
      <ReactionDrawInput
        key={index}
        id={index}
        deleteSlot={deleteReactantSlot}
        updateCallback={updateCallback}
      ></ReactionDrawInput>
    );
  });

  const productInputs = formData.products.map((product, index) => {
    return product === undefined ? null : (
      <ReactionDrawInput
        key={index}
        id={index}
        smiles={formData.products.index}
        deleteSlot={deleteProductSlot}
        updateCallback={updateCallback}
      ></ReactionDrawInput>
    );
  });

  return (
    <form className="DrawReactionForm" onSubmit={onFormSubmit}>
      <div className="InputBlock">
        <section className="ReactantInputs">
          <h2>Reactants</h2>
          {reactantInputs}
          <button type="button" onClick={addReactantSlot}>
            Add Reactant
          </button>
        </section>
        <section className="ProductInputs">
          <h2>Products</h2>
          {productInputs}
          <button type="button" onClick={addProductSlot}>
            Add Product
          </button>
        </section>
      </div>
      <input type="submit" />
    </form>
  );
};

export default DrawReactionForm;
