import React, { useContext, useState } from "react";
import LanguageContext from "../contexts/LanguageContext";
import { Spinner } from "react-bootstrap";

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
          <span className="visually-hidden">Loading...</span>
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
        <h1 style={{ marginBottom: "1.5rem" }}>Explanations about the legends</h1>
        <h2>
          NO<sub> 2</sub>
        </h2>
        <p>
          {lang === "EN" ? (
            <>
              Nitrogen Dioxide (NO2) is one of a group of highly reactive gases known as oxides of nitrogen or nitrogen
              oxides (NOx). Other nitrogen oxides include nitrous acid and nitric acid. NO2 is used as the indicator for
              the larger group of nitrogen oxides. NO2 primarily gets in the air from the burning of fuel. NO2 forms
              from emissions from cars, trucks and buses, power plants, and off-road equipment. Fine particulate matter
              and NO2 are the key problems for increasing air quality in Europe. Whereas particulate matter and the
              exceedance of PM limiting values have attracted considerable public attention during the last couple of
              years, the NO2 problem is a relatively new one, which became mature through the introduction of new
              European limiting values in January 2010. The reduction of nitrogen oxide (NOx = NO + NO2) emissions has
              been historically one of the key objectives for improving air quality in Europe. (see
              https://enveurope.springeropen.com/articles/10.1186/2190-4715-24-21)
            </>
          ) : (
            <>
              Le dioxyde d'azote (NO2) fait partie d'un groupe de gaz hautement réactifs appelés oxydes d'azote ou des
              oxydes d'azote (NOx). D'autres oxydes d'azote comprennent l'acide nitreux et l'acide nitrique. Le NO2 est
              utilisé comme indicateur pour la grand groupe d'oxydes d'azote. Le NO2 pénètre dans l'air principalement
              lors de la combustion du carburant. Formes NO2 de émissions des voitures, des camions et des autobus, des
              centrales électriques et des équipements hors route. Particules fines et NO2 sont les principaux problèmes
              pour améliorer la qualité de l'air en Europe. Alors que les particules et le dépassement des PM valeurs
              limites ont beaucoup attiré l'attention du public ces dernières années, le problème du NO2 est
              relativement nouveau, qui a gagné en maturité grâce à l'introduction de nouvelles valeurs limites
              européennes dans Janvier 2010. La réduction des émissions d'oxyde d'azote (NOx = NO + NO2) a été
              historiquement l'une des principales objectifs d'amélioration de la qualité de l'air en Europe. (voir
              https://enveurope.springeropen.com/articles/10.1186/2190-4715-24-21)
            </>
          )}
        </p>
        <h2>PM</h2>
        <p>
          {lang === "EN" ? (
            <>
              Particulates – also known as atmospheric aerosol particles, atmospheric particulate matter, particulate
              matter (PM), or suspended particulate matter (SPM) – are microscopic particles of solid or liquid matter
              suspended in the air. Types of atmospheric particles include suspended particulate matter; thoracic and
              respirable particles; inhalable coarse particles, designated PM10, which are coarse particles with a
              diameter of 10 micrometers (μm) or less; fine particles, designated PM2.5, with a diameter of 2.5 μm or
              less; ultrafine particles, with a diameter of 100 nm or less; and soot. Due to the highly toxic health
              effects of particulate matter, most governments have created regulations both for the emissions allowed
              from certain types of pollution sources (motor vehicles, industrial emissions etc.) and for the ambient
              concentration of particulates. The IARC and WHO designate airborne particulates as a Group 1 carcinogen.
              Particulates are the most harmful form (other than ultra-fines) of air pollution due to their ability to
              penetrate deep into the lungs, blood streams and brain, causing health problems including heart attacks,
              respiratory disease, and premature death.
            </>
          ) : (
            <>
              Particules - également appelées particules d'aérosol atmosphériques, particules atmosphériques, particules
              (PM), ou matière particulaire en suspension (SPM) – sont des particules microscopiques de matière solide
              ou liquide en suspension dans l'air. Les types de particules atmosphériques comprennent les particules en
              suspension; thoracique et respirable particules; particules grossières inhalables, désignées PM10, qui
              sont des particules grossières d'un diamètre de 10 micromètres (μm) ou moins ; particules fines, désignées
              PM2,5, d'un diamètre de 2,5 μm ou moins; ultrafin particules d'un diamètre de 100 nm ou moins; et la suie.
              En raison des effets hautement toxiques sur la santé des particules question, la plupart des gouvernements
              ont créé des réglementations à la fois pour les émissions autorisées de certains types de sources de
              pollution (véhicules à moteur, émissions industrielles, etc.) et pour la concentration ambiante de
              particules. Le CIRC et l'OMS désignent les particules en suspension dans l'air comme cancérogènes du
              groupe 1. Les particules sont les la forme la plus nocive (autre que les ultra-fines) de la pollution de
              l'air en raison de leur capacité à pénétrer profondément dans le poumons, la circulation sanguine et le
              cerveau, causant des problèmes de santé, notamment des crises cardiaques, des maladies respiratoires et
              mort prématurée.
            </>
          )}
        </p>
      </div>
    </div>
  );
};

export default EmissionScreen;
