import React, { useState } from "react";

const ReactionForm = ({ getChemicalInfo }) => {
  const [formData, setFormData] = useState({
    chemicalA: "",
  });

  const onFormChange = (event) => {
    const inputName = event.target.name;
    const inputValue = event.target.value;

    const updatedFormData = { ...formData };
    updatedFormData[inputName] = inputValue;

    setFormData(updatedFormData);
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    getChemicalInfo(formData);
  };

  return (
    <form className="ReactionForm" onSubmit={onFormSubmit}>
      <input
        type="text"
        name="chemicalA"
        value={formData.chemicalA}
        onChange={onFormChange}
      />
      <input type="submit" />
    </form>
  );
};

export default ReactionForm;
