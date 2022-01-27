/* eslint-disable no-multi-str */
import React, { useContext, useState } from "react";
import LanguageContext from "../contexts/LanguageContext";
import { Spinner } from "react-bootstrap";
import { emissionText as text } from "../textTranslation";

const EmissionScreen = () => {
  const { lang } = useContext(LanguageContext);
  const [isLoading, setIsLoading] = useState(true);

  const hideSpinner = () => {
    setIsLoading(false);
  };

  return (
    <div>
      {/* The spinner disappears when the iframe finishes loading */}
      {isLoading ? (
        <Spinner
          animation="border"
          role="status"
          style={{ height: "10rem", width: "10rem", margin: "40%", marginTop: "15rem" }}
        >
          <span className="visually-hidden">{text.loading[lang]}</span>
        </Spinner>
      ) : null}

      <iframe
        title="emission-map"
        style={{ width: "100%", height: "80vh" }}
        frameBorder="0"
        scrolling="no"
        onLoad={hideSpinner}
        allowFullScreen
        src="https://learngis2.maps.arcgis.com/apps/Embed/index.html?webmap=44abf032f31d48be8ce2b8c4748a384d&extent=2.1769,48.7986,2.5556,48.914&zoom=true&previewImage=false&scale=true&details=true&legendlayers=true&active_panel=details&basemap_gallery=true&disable_scroll=true&theme=light"
      ></iframe>

      <h4>{lang === "EN" ? "Please ignore the login notice." : "Veuillez ignorer l'avis de connexion."}</h4>
      <h4>
        {lang === "EN" ? "Click on the top left side for legends" : "Cliquez en haut à gauche pour avoir la légende"}
      </h4>
      <hr></hr>
      <div>
        <h1 style={{ marginBottom: "1.5rem" }}>{text.legendExplanation[lang]}</h1>
        <h2>
          NO<sub> 2</sub>
        </h2>
        <p>{text.no2[lang]}</p>
        <h2>PM</h2>
        <p>{text.pm[lang]}</p>
      </div>
    </div>
  );
};

export default EmissionScreen;
