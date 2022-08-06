import React from "react";

const WhatIsGHS = () => {
  return (
    <div className="WhatIsGHS">
      <section>
        <h2>What is GHS?</h2>
        <p>
          GHS, or the Globally Harmonized System, is an international standard
          for classifying chemical hazards.
        </p>
      </section>
      <section>
        <h2>Hazards under GHS</h2>
        <h3>Explosives</h3>
        <h3>Flammables</h3>
        <h3>Oxidizers</h3>
        <h3>Pressurized Gases</h3>
        <h3>Corrosives</h3>
        <h3>Acute Toxins</h3>
        <h3>Irritants</h3>
        <h3>Health Hazards</h3>
        <h3>Environmental Hazards</h3>
      </section>
      <p>
        Information on this page, as well as further details, can be found in
        the{" "}
        <a href="https://unece.org/sites/default/files/2021-09/GHS_Rev9E_0.pdf">
          U.N. Globally Harmonized System of Classification and Labelling of
          Chemicals (GHS) (9th ed.)
        </a>
      </p>
    </div>
  );
};

export default WhatIsGHS;
