import React from "react";
import TreeImg from "../images/circular-tree.png";

const WelcomeScreen = () => {
  return (
    <div style={{ marginTop: "3rem" }}>
      <div style={{ textAlign: "center" }}>
        <img style={{ width: "25rem" }} src={TreeImg} alt="tree" />
      </div>

      <h1 style={{ fontSize: "1.7rem", textAlign: "center" }}>
        Welcome to GreenParisMaps, a CentaleSupelec student project with{" "}
        <a href="https://www.groupeonepoint.com/en/">OnePoint</a>
      </h1>
      <p style={{ margin: "1rem", fontSize: "1.2rem", textAlign: "center" }}>
        Discover more in the navigation bar
      </p>
    </div>
  );
};

export default WelcomeScreen;
