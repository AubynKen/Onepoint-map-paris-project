/* eslint-disable no-multi-str */
import React, { useContext } from "react";

import TreeLeaves from "../images/tree-leaves.png";

import LanguageContext from "../contexts/LanguageContext";

import { aboutText as text } from "../textTranslation";

const BackgroundScreen = () => {
  const { lang } = useContext(LanguageContext);

  return (
    <div>
      <img src={TreeLeaves} style={{ width: "20rem" }} alt="tree-leaves" />
      <div style={{ marginTop: "2rem", marginBottom: "2rem" }}>
        <div id="scientific-background-text" style={{ marginBottom: "3rem" }}>
          <h1>{text.scientificBackgroundTitle[lang]}</h1>
          <p>{text.scientificBackgroundText[lang]}</p>
          <h1>{text.hardFactsTitle[lang]}</h1>
          <p>{text.hardFactsText[lang]}</p>
          <h1>{text.treesTitle[lang]}</h1>
          <p>{text.treesText[lang]}</p>
        </div>
        <hr></hr>
        <div id="scientific-background-sources" style={{ marginTop: "2rem" }}>
          <h2>{lang === "EN" ? "Sources" : "Bibliographie"}</h2>
          <ul>
            <li>
              Marselle, M.R., Bowler, D.E., Watzema, J., Eichenberg, D., Kirsten, T., Bonn, A. (2020): “Urban Street
              tree biodiversity and antidepressant prescriptions”. In: Sci Rep 10, 22445
            </li>
            <li>
              Nowak, D.J. and Crane, D.E. (2007): “Oxygen production by urban trees in the United States”. In:
              Arboriculture & Urban Forestry, 33 (3), p.220-226.
            </li>
            <li>
              Ramanan, S., Osman, M., Shanker, A.K. and Sridhar, K.B. (2021): “Oxygen production potential of trees in
              urban areas: a reality check?”. In: Current Science, Vol. 121 (5), p.622-625.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BackgroundScreen;
