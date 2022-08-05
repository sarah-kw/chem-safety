import React from "react";

const SafetyTable = ({ safetyInfo }) => {
  const safetyRows = safetyInfo.map((chemical, index) => {
    return (
      <tr
        key={index}
        className={
          chemical.gotHazards
            ? "SafetyRow--HazardsAvailable"
            : "SafetyRow--HazardsUnavailable"
        }
      >
        <td>{chemical.name}</td>
        <td>{chemical.gotHazards ? chemical.hazards : "None found"}</td>
        <td>{chemical.gotHazards ? chemical.precautions : "None found"}</td>
      </tr>
    );
  });

  return (
    <table className="SafetyTable">
      <thead>
        <tr>
          <th>Chemical</th>
          <th>GHS Hazards</th>
          <th>Recommended Precautions</th>
        </tr>
      </thead>
      <tbody>{safetyRows}</tbody>
    </table>
  );
};

export default SafetyTable;
