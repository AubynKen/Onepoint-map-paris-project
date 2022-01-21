import React, { useContext } from "react";
import FriedChicken from "../images/FriedChicken.png";
import Leopold from "../images/Leopold.png";
import Ole from "../images/Ole.jpg";
import Pinglei from "../images/Pinglei.png";
import OnepointLogo from "../images/logo-onepoint.png";
import LatitudesLogo from "../images/Latitudes-logo.png";
import LanguageContext from "../contexts/LanguageContext";

const AboutUsScreen = () => {
  const memeberPictureStyle = {
    borderRadius: "50%",
    width: "20%",
    margin: "2%",
  };

  const innerDivStyle = {
    paddingTop: "1rem",
    paddingBottom: "1rem",
  };

  const { lang } = useContext(LanguageContext);

  switch (lang) {
    case "EN":
      return (
        <div>
          {/* <img src={TreeLeaves} style={{ width: "20rem" }} alt="tree-leaves" /> */}
          <div style={{ marginTop: "2rem", marginBottom: "2rem" }}>
            <div style={innerDivStyle}>
              <h1>Team</h1>
              <img src={FriedChicken} style={memeberPictureStyle} alt="Frieder"></img>
              <img src={Pinglei} style={memeberPictureStyle} alt="Pinglei"></img>
              <img src={Ole} style={memeberPictureStyle} alt="Ole"></img>
              <img src={Leopold} style={memeberPictureStyle} alt="Leopold"></img>
            </div>
            <hr></hr>
            <div style={innerDivStyle}>
              <h1>Mission</h1>
              <p>
                We aim to model the impact of vegetation in urban environments on temperature and pollution. For this we
                have developed an interactive map of Paris (our example). Each data set has a map (the map of trees, the
                map of pollution, the map of temperatures etc.), and it is possible to superlay all of them in order to
                obtain a global rendering.{" "}
              </p>
            </div>
            <div style={innerDivStyle}>
              <h1>Partners</h1>
              <img src={LatitudesLogo} style={{ width: "20%", marginLeft: "10%" }} alt="logo-latitudes"></img>
              <img src={OnepointLogo} style={{ width: "30%", marginLeft: "10%" }} alt="onepoint-logo"></img>
              <p>
                The project was proposed by the company Onepoint, a consulting firm specialized in supporting the
                digital transformation of its customers. They accompanied us throughout the project to provide technical
                assistance and to guide us in the right direction!{" "}
              </p>
            </div>
            <div style={innerDivStyle}>
              <h1>Future</h1>
              <p>
                Onepoint's goal is to offer this interactive tool to cities and municipalities. They could analyse the
                effect of their vegetation on air quality and temperatures. Cities could then deduce new vegetation
                plans and become more responsible.{" "}
              </p>
            </div>
          </div>
          <hr></hr>
        </div>
      );
    default:
      return (
        <div>
          {/* <img src={TreeLeaves} style={{ width: "20rem" }} alt="tree-leaves" /> */}
          <div style={{ marginTop: "2rem", marginBottom: "2rem" }}>
            <div style={innerDivStyle}>
              <h1>L'Équipe</h1>
              <img src={FriedChicken} style={memeberPictureStyle} alt="Frieder"></img>
              <img src={Pinglei} style={memeberPictureStyle} alt="Pinglei"></img>
              <img src={Ole} style={memeberPictureStyle} alt="Ole"></img>
              <img src={Leopold} style={memeberPictureStyle} alt="Leopold"></img>
            </div>
            <hr></hr>
            <div style={innerDivStyle}>
              <h1>Mission</h1>
              <p>
                Nous visons à modéliser l'impact de la végétation en milieu urbain sur température et pollution. Pour
                cela, nous avons développé un outil interactif plan de Paris (notre exemple). Chaque ensemble de données
                a une carte (le carte des arbres, la carte de la pollution, la carte des températures etc.), et il est
                possible de tous les superposer afin d'obtenir un rendu global.{" "}
              </p>
            </div>
            <div style={innerDivStyle}>
              <h1>Partenaires</h1>
              <img src={LatitudesLogo} style={{ width: "20%", marginLeft: "10%" }} alt="logo-latitudes"></img>
              <img src={OnepointLogo} style={{ width: "30%", marginLeft: "10%" }} alt="onepoint-logo"></img>
              <p>
                Le projet a été proposé par la société Onepoint, cabinet de conseil spécialisée dans l'accompagnement de
                la transformation digitale de ses clients. Ils nous ont accompagnés tout au long du projet pour fournir
                assistance technique et pour nous guider dans la bonne direction !{" "}
              </p>
            </div>
            <div style={innerDivStyle}>
              <h1>Future</h1>
              <p>
                L'objectif de Onepoint est de proposer cet outil interactif aux villes et municipalités. Ils pourraient
                analyser l'effet de leur végétation sur la qualité de l'air et les températures. Les villes pourraient
                alors déduire de nouveaux plans de végétation et devenir plus responsable.{" "}
              </p>
            </div>
          </div>
          <hr></hr>
        </div>
      );
  }
};

export default AboutUsScreen;
