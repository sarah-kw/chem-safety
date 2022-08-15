import React from "react";
import hazardCodes from "../resources/hazard_codes.json";
import precautionCodes from "../resources/precaution_codes.json";
import GHS01 from "../images/GHS01-Explosives.svg";
import GHS02 from "../images/GHS02-Flammables.svg";
import GHS03 from "../images/GHS03-Oxidizers.svg";
import GHS04 from "../images/GHS04-Compressed_Gases.svg";
import GHS05 from "../images/GHS05-Corrosives.svg";
import GHS06 from "../images/GHS06-Acute_Toxicity.svg";
import GHS07 from "../images/GHS07-Irritant.svg";
import GHS08 from "../images/GHS08-Health_Hazard.svg";
import GHS09 from "../images/GHS09-Environment.svg";

const SafetyTable = ({ safetyInfo }) => {
  console.log(Object.values(safetyInfo));
  const safetyPictogramDictionary = {
    "GHS01-Explosives": GHS01,
    "GHS02-Flammables": GHS02,
    "GHS03-Oxidizers": GHS03,
    "GHS04-Compressed_Gases": GHS04,
    "GHS05-Corrosives": GHS05,
    "GHS06-Acute_Toxicity": GHS06,
    "GHS07-Irritant": GHS07,
    "GHS08-Health_Hazards": GHS08,
    "GHS09-Environment": GHS09,
  };

  const getSafetyImages = (hazards) => {
    const pictograms = new Set();
    for (const hazard of hazards) {
      console.log(`the hazard is ${hazard}`);
      const toLookup = hazard[0].split(" ")[0];
      console.log(toLookup);
      for (const pictogram of hazardCodes[toLookup].Pictogram) {
        pictograms.add(pictogram);
      }
    }

    const safetyImages = Array.from(pictograms).map((pictogram) => {
      return (
        <img
          key={pictogram}
          src={safetyPictogramDictionary[pictogram]}
          alt={pictogram}
        />
      );
    });
    return safetyImages;
  };

  const parseHazardInfo = (hazards) => {
    const parsedHazards = hazards.map((hazard) => {
      const description = hazard[1].split("[");
      const hazardString = `${hazard[0].split(" ")[0]}: ${description[0]}`;
      return (
        <li key={hazard[0]}>
          {hazardString}
          <br />
          {`[${description[1]}`}
        </li>
      );
    });
    return parsedHazards;
  };

  const parsePrecautionInfo = (precautions) => {
    const shortPrecautions = precautions.slice(0, 5);
    const parsedPrecautions = shortPrecautions.map((precaution, index) => {
      return precautionCodes[precaution] === undefined ? null : (
        <li key={index}>{precautionCodes[precaution]}</li>
      );
    });
    console.log(precautions.length);
    return parsedPrecautions;
  };

  const safetyRows = Object.values(safetyInfo).map((chemical, index) => {
    return (
      <tr
        key={index}
        className={
          chemical.gotHazards
            ? "SafetyRow--HazardsAvailable"
            : "SafetyRow--HazardsUnavailable"
        }
      >
        {/* <td>{chemical.userInputName}</td> */}
        <td>
          {chemical.gotHazards ? chemical.commonName : chemical.userInputName}
          <br />
          {chemical.iupacName}
          <br />
          {chemical.canonicalSMILES}
        </td>
        <td>
          {chemical.gotHazards
            ? getSafetyImages(chemical.hazards)
            : "None found"}
        </td>
        <td>
          {chemical.gotHazards ? (
            <ul>{parseHazardInfo(chemical.hazards)}</ul>
          ) : (
            "None found"
          )}
        </td>
        <td>
          {chemical.gotHazards ? (
            <ul>{parsePrecautionInfo(chemical.precautions)}</ul>
          ) : (
            "None found"
          )}
        </td>
      </tr>
    );
  });

  return (
    <table className="SafetyTable">
      <thead>
        <tr>
          <th>Chemical</th>
          <th>Hazard Symbols</th>
          <th>GHS Hazards</th>
          <th>Recommended Precautions</th>
        </tr>
      </thead>
      <tbody>{safetyRows}</tbody>
    </table>
  );
};

export default SafetyTable;
