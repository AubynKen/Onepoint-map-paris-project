import React, { useContext } from "react";
import TreeImg from "../images/circular-tree.png";
import LanguageContext from "../contexts/LanguageContext";

const WelcomeScreen = () => {
  const { lang } = useContext(LanguageContext);

  return (
    <div style={{ marginTop: "3rem" }}>
      <div style={{ textAlign: "center" }}>
        <img style={{ width: "25rem" }} src={TreeImg} alt="tree" />
      </div>

      {lang === "EN" ? (
        <h1 style={{ fontSize: "1.7rem", textAlign: "center" }}>
          Welcome to GreenParisMaps, a CentraleSupelec student project with{" "}
          <a href="https://www.groupeonepoint.com/en/">Onepoint</a>
        </h1>
      ) : (
        <h1 style={{ fontSize: "1.7rem", textAlign: "center" }}>
          Bienvenue à GreenParisMaps, un projet étudiant de CentraleSupélec avec{" "}
          <a href="https://www.groupeonepoint.com/en/">Onepoint</a>
        </h1>
      )}
      <p style={{ margin: "1rem", fontSize: "1.2rem", textAlign: "center" }}>
        {lang === "EN" ? <>Discover more in the navigation bar</> : <>Découvrir plus dans la bar de navigation</>}
      </p>
    </div>
  );
};

export default WelcomeScreen;
