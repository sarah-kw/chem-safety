import React, { useState } from "react";
import { useOutletContext } from "react-router-dom";

const ReactionForm = () => {
  const getChemicalInfo = useOutletContext()[0];
  const [formData, setFormData] = useState({
    reactants: ["", ""],
    products: ["", ""],
  });

  const deleteReactantSlot = (id) => {
    const updatedFormData = { ...formData };
    delete updatedFormData["reactants"][id];
    setFormData(updatedFormData);
    // for debugging
    // console.log(updatedFormData);
  };

  const deleteProductSlot = (id) => {
    const updatedFormData = { ...formData };
    delete updatedFormData["products"][id];
    setFormData(updatedFormData);
    // for debugging
    // console.log(updatedFormData);
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
    // console.log(event);
    // console.log(`id is ${event.target.id}`);
    const inputClass = event.target.name;
    const inputValue = event.target.value;

    const updatedFormData = { ...formData };
    updatedFormData[inputClass][event.target.id] = inputValue;

    setFormData(updatedFormData);

    // for debugging
    // console.log(updatedFormData);
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    getChemicalInfo(formData);
  };

  const reactantInputs = formData.reactants.map((reactant, index) => {
    return reactant === undefined ? null : (
      <div className="InputField" key={index}>
        <input
          key={index}
          id={index}
          name="reactants"
          value={reactant}
          onChange={onFormChange}
        ></input>
        <button
          id={index}
          type="button"
          onClick={() => deleteReactantSlot(index)}
        >
          Delete
        </button>
      </div>
    );
  });

  const productInputs = formData.products.map((product, index) => {
    return product === undefined ? null : (
      <div className="InputField" key={index}>
        <input
          key={index}
          id={index}
          name="products"
          value={product}
          onChange={onFormChange}
        ></input>
        <button
          id={index}
          type="button"
          onClick={() => deleteProductSlot(index)}
        >
          Delete
        </button>
      </div>
    );
  });

  return (
    <React.Fragment>
      <section className="AppHowTo">
        <p>
          Usage: Input reactants and products by name or SMILES. Press submit to
          generate a safety report.
        </p>
      </section>
      <form className="ReactionForm" onSubmit={onFormSubmit}>
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
    </React.Fragment>
  );
};

export default ReactionForm;
