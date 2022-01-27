import React, { useContext } from "react";
import TreeImg from "../images/circular-tree.png";
import LanguageContext from "../contexts/LanguageContext";

import { welcomeText as text } from "../textTranslation";

const WelcomeScreen = () => {
  const { lang } = useContext(LanguageContext);

  return (
    <div style={{ marginTop: "3rem" }}>
      <div style={{ textAlign: "center" }}>
        <img style={{ width: "25rem" }} src={TreeImg} alt="tree" />
      </div>

      <h1 style={{ fontSize: "1.7rem", textAlign: "center" }}>
        {text.welcome[lang]}
        <a href="https://www.groupeonepoint.com/en/">Onepoint</a>
      </h1>
      <p style={{ margin: "1rem", fontSize: "1.2rem", textAlign: "center" }}>{text.discover[lang]}</p>
    </div>
  );
};

export default WelcomeScreen;
