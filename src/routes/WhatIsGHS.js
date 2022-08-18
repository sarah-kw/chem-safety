import React from "react";

const WhatIsGHS = () => {
  return (
    <div className="WhatIsGHS">
      <section>
        <h2>What is GHS?</h2>
        <p>
          The GHS, or Globally Harmonized System of Classification and Labelling
          of Chemicals, is an international standard for classifying chemical
          hazards. In response to the growth of global trade in chemicals, the
          United Nations developed the GHS standard to address the hazards
          associated with their transport, use, and disposal. The GHS Plan of
          Implementation was adopted in 2002, and the first edition of the GHS
          was published in early 2003. The GHS is currently in its 9th revised
          edition (published 2021).
        </p>
      </section>
      <section>
        <h2>Hazards under GHS</h2>
        <h3>Explosives</h3>
        <p>
          Explosives under GHS are chemicals that are themselves capable, under
          the right conditions, of undergoing a reaction that produces gas at
          temperature and pressure sufficient to cause damage. Pyrotechnic
          substances, which are mixtures designed to produce heat, light, sound,
          gas, or smoke, are also catagorized under explosives even when they do
          not produce gas.
        </p>
        <h3>Flammables</h3>
        <p>
          Flammables under GHS are chemicals which carry a particular risk of
          fire.
        </p>
        <p>
          Flammable gases can ignite under ambient conditions (20&deg;C and
          atmospheric pressure). Subcategories under flammable gases include
          pyrophorics, which can spontaneously ignite in air at temperatures
          lower than 54&deg;C, and chemically unstable gases, which can ignite
          under air- or oxygen-free conditions.
        </p>
        <p>
          Flammable liquids have a flash point of less than 93&deg;C (near
          boiling temperature). A liquid's flash point is the temperature at
          which exposure to a spark or flame will ignite the layer of vapor near
          the liquid's surface. A subcategory of flammable liquids is pyrophoric
          liquids, which can catch fire spontaneously when exposed to air.
        </p>
        <p>
          Flammable solids are readily combustable -- easily ignited by brief
          contact with a spark, friction, or flame. As with liquids, a
          subcategory of flammable solids is pyrophoric solids, which can catch
          fire spontaneously when exposed to air.
        </p>
        <h3>Oxidizers</h3>
        <p>
          Oxidizers make fires worse. According to the GHS, an oxidizer can
          "cause or contribute to the combustion of other material more than air
          does." These chemicals typically undergo reactions that produce
          oxygen.
        </p>
        <h3>Pressurized Gases</h3>
        <p>
          Self-explanitorily, pressurized gases are gases in a container under
          pressure. The lower limit for a gas to be considered "pressurized" in
          gas form is 200kPa, or around 2 atmospheres of pressure. This category
          also contains gases liquefied by pressure or a combination of pressure
          and refrigeration.
        </p>
        <h3>Corrosives</h3>
        <p>
          Chemicals under the corrosives GHS heading are capable of damaging or
          destroying metals. Under GHS, corrosiveness is based off of corrosion
          rate to thick steel or aluminum surfaces.
        </p>
        <h3>Acute Toxins</h3>
        <p>
          Under GHS, acutely toxic chemicals can cause serious health damage
          from a single or short-term inhalation, consumption, or exposure to
          the skin. Toxicity is traditionally measured in terms of LD50, a
          measurement of lethal dose.
        </p>
        <h3>Irritants</h3>
        <p>
          Chemicals classified as irritants under GHS cause skin, eye, or
          respiratory damage. The irritants category covers chemicals capable of
          causing permanent or severe damage to exposed tissues, but it also
          covers chemicals for which exposure symptoms are mild. For example,
          table salt, or NaCl, is classified as an irritant.
        </p>
        <h3>Health Hazards</h3>
        <p>
          The health hazards category of GHS covers some specific hazards beyond
          the categories of acute toxicity or irritation. These include germ
          cell mutagenicity (damage to egg/sperm cells), carcinogenicity
          (possibility of causing cancer), reproductive toxicity (fertility
          damage or harm to developing offspring), specific organ toxicity, and
          aspiration risk.
        </p>
        <h3>Environmental Hazards</h3>
        <p>
          The GHS specifically notes the potential of chemicals to cause harm to
          the aquatic environment and to the ozone layer. Environmental hazard
          classification is of particular relevance when it comes to chemical
          waste disposal.
        </p>
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
