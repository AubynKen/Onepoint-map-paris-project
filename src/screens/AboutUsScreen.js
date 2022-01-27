/* eslint-disable no-multi-str */
import React, { useContext } from "react";
import FriedChicken from "../images/FriedChicken.png";
import Leopold from "../images/Leopold.png";
import Ole from "../images/Ole.jpg";
import Pinglei from "../images/Pinglei.png";
import OnepointLogo from "../images/logo-onepoint.png";
import LatitudesLogo from "../images/Latitudes-logo.png";
import LanguageContext from "../contexts/LanguageContext";

import { aboutText as text } from "../textTranslation";

const AboutUsScreen = () => {
  const memberPictureStyle = {
    borderRadius: "50%",
    width: "20%",
    margin: "2%",
  };

  const innerDivStyle = {
    paddingTop: "1rem",
    paddingBottom: "1rem",
  };

  const { lang } = useContext(LanguageContext);

  return (
    <div>
      {/* <img src={TreeLeaves} style={{ width: "20rem" }} alt="tree-leaves" /> */}
      <div style={{ marginTop: "2rem", marginBottom: "2rem" }}>
        <div style={innerDivStyle}>
          <h1>{lang === "EN" ? "Team" : "L’Équipe"}</h1>
          <img src={FriedChicken} style={memberPictureStyle} alt="Frieder"></img>
          <img src={Pinglei} style={memberPictureStyle} alt="Pinglei"></img>
          <img src={Ole} style={memberPictureStyle} alt="Ole"></img>
          <img src={Leopold} style={memberPictureStyle} alt="Leopold"></img>
        </div>
        <hr></hr>
        <div style={innerDivStyle}>
          <h1>Mission</h1>
          <p>{text.missionText[lang]}</p>
        </div>
        <div style={innerDivStyle}>
          <h1>{lang === "EN" ? "Partners" : "Partenaires"}</h1>
          <img src={LatitudesLogo} style={{ width: "20%", marginLeft: "10%" }} alt="logo-latitudes"></img>
          <img src={OnepointLogo} style={{ width: "30%", marginLeft: "10%" }} alt="onepoint-logo"></img>
          <p>{text.partner[lang]}</p>
        </div>
        <div style={innerDivStyle}>
          <h1>Future</h1>
          <p>{text.future[lang]}</p>
        </div>
      </div>
      <hr></hr>
    </div>
  );
};

export default AboutUsScreen;
