import React from "react";
import FriedChicken from "../images/FriedChicken.png";
import Leopold from "../images/Leopold.png";
import Ole from "../images/Ole.jpg";
import Pinglei from "../images/Pinglei.png";
import OnepointLogo from "../images/logo-onepoint.png";
import LatitudesLogo from "../images/Latitudes-logo.png";

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

  return (
    <div>
      {/* <img src={TreeLeaves} style={{ width: "20rem" }} alt="tree-leaves" /> */}
      <div style={{ marginTop: "2rem", marginBottom: "2rem" }}>
        <div style={innerDivStyle}>
          <h1>Team</h1>
          <img
            src={FriedChicken}
            style={memeberPictureStyle}
            alt="Frieder"
          ></img>
          <img src={Pinglei} style={memeberPictureStyle} alt="Pinglei"></img>
          <img src={Ole} style={memeberPictureStyle} alt="Ole"></img>
          <img src={Leopold} style={memeberPictureStyle} alt="Leopold"></img>
        </div>
        <hr></hr>
        <div style={innerDivStyle}>
          <h1>Mission</h1>
          <p>
            We aim to model the impact of vegetation in urban environments on
            temperature and pollution. For this we have developed an interactive
            map of Paris (our example). Each data set has a map (the
            map of trees, the map of pollution, the map of temperatures etc.), and
            it is possible to superlay all of them in order to obtain a
            global rendering.{" "}
          </p>
        </div>
        <div style={innerDivStyle}>
          <h1>Partners</h1>
          <img src={LatitudesLogo} style={{ width: "20%", marginLeft: "10%"}} alt="logo-latitudes"></img>
          <img src={OnepointLogo} style = {{ width: "30%", marginLeft: "10%"}}alt="onepoint-logo"></img>
          <p>
            The project was proposed by the company Onepoint, a consulting firm
            specialized in supporting the digital transformation of its
            customers. They accompanied us throughout the project to provide
            technical assistance and to guide us in the right direction!{" "}
          </p>
        </div>
        <div style={innerDivStyle}>
          <h1>Future</h1>
          <p>
            Onepoint's goal is to offer this interactive tool to cities and
            municipalities. They could analyse the effect of their vegetation on
            air quality and temperatures. Cities could then deduce new
            vegetation plans and become more responsible.{" "}
          </p>
        </div>
      </div>
      <hr></hr>
    </div>
  );
};

export default AboutUsScreen;
