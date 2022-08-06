/* eslint-ignore */
import React from "react";

const DataSources = () => {
  return (
    <section>
      <h2>Data Sources</h2>
      <p>
        This app is powered by the{" "}
        <a href="https://pubchemdocs.ncbi.nlm.nih.gov/pug-rest">PUG REST</a> and{" "}
        <a href="https://pubchemdocs.ncbi.nlm.nih.gov/pug-view">PUG View</a>{" "}
        APIs, which are part of{" "}
        <a href="https://pubchem.ncbi.nlm.nih.gov/">PubChem</a>, an open
        chemistry database provided by the National Institutes of Health (NIH).
      </p>

      <h2>Citations</h2>
      <ul>
        <li>
          Kim, S., Chen, J., Cheng, T., Gindulyte, A., He, J., He, S., Li, Q.,
          Shoemaker, B. A., Thiessen, P. A., Yu, B., Zaslavsky, L., Zhang, J., &
          Bolton, E. E. (2019). PubChem in 2021: new data content and improved
          web interfaces. Nucleic Acids Res., 49(D1), D1388–D1395.
          https://doi.org/10.1093/nar/gkaa971
        </li>
        <li>
          Kim S, Thiessen PA, Cheng T, Yu B, Bolton EE. An update on PUG-REST:
          RESTful interface for programmatic access to PubChem. Nucleic Acids
          Res. 2018 July 2; 46(W1):W563-570. [PubMed PMID: 29718389] doi:
          10.1093/nar/gky294.
        </li>
        <li>
          Kim S, Thiessen PA, Cheng T, Zhang J, Gindulyte A, Bolton EE.
          PUG-View: programmatic access to chemical annotations integrated in
          PubChem. J Cheminform. 2019 Aug 9; 11(1):56. [PubMed PMID: 31399858]
          doi: 10.1186/s13321-019-0375-2.
        </li>
      </ul>
    </section>
  );
};

export default DataSources;
