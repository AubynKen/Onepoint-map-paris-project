import React from "react";

const EmissionScreen = () => {
  return (
    <div>
      <iframe
        title="emission-map"
        style={{ width: "100%", height: "80vh" }}
        frameBorder="0"
        scrolling="no"
        allowFullScreen
        src="https://learngis2.maps.arcgis.com/apps/Embed/index.html?webmap=44abf032f31d48be8ce2b8c4748a384d&extent=2.1769,48.7986,2.5556,48.914&zoom=true&previewImage=false&scale=true&details=true&legendlayers=true&active_panel=details&basemap_gallery=true&disable_scroll=true&theme=light"
      ></iframe>
      <h4>Please ignore the login notice.</h4>
      <h4>Click on the top-left corner to add legends.</h4>
      <hr></hr>
      <div>
        <h1 style={{ marginBottom: "1.5rem" }}>
          Explanations about the legends
        </h1>
        <h2>
          NO<sub>2</sub>
        </h2>
        <p>
          Nitrogen Dioxide (NO2) is one of a group of highly reactive gases
          known as oxides of nitrogen or nitrogen oxides (NOx). Other nitrogen
          oxides include nitrous acid and nitric acid. NO2 is used as the
          indicator for the larger group of nitrogen oxides. NO2 primarily gets
          in the air from the burning of fuel. NO2 forms from emissions from
          cars, trucks and buses, power plants, and off-road equipment. Fine
          particulate matter and NO2 are the key problems for increasing air
          quality in Europe. Whereas particulate matter and the exceedance of PM
          limiting values have attracted considerable public attention during
          the last couple of years, the NO2 problem is a relatively new one,
          which became mature through the introduction of new European limiting
          values in January 2010. The reduction of nitrogen oxide
          (NOx = NO + NO2) emissions has been historically one of the key
          objectives for improving air quality in Europe. (see
          https://enveurope.springeropen.com/articles/10.1186/2190-4715-24-21)
        </p>
        <h2>PM</h2>
        <p>
          Particulates – also known as atmospheric aerosol particles,
          atmospheric particulate matter, particulate matter (PM), or suspended
          particulate matter (SPM) – are microscopic particles of solid or
          liquid matter suspended in the air. Types of atmospheric particles
          include suspended particulate matter; thoracic and respirable
          particles; inhalable coarse particles, designated PM10, which are
          coarse particles with a diameter of 10 micrometers (μm) or less; fine
          particles, designated PM2.5, with a diameter of 2.5 μm or less;
          ultrafine particles, with a diameter of 100 nm or less; and soot. Due
          to the highly toxic health effects of particulate matter, most
          governments have created regulations both for the emissions allowed
          from certain types of pollution sources (motor vehicles, industrial
          emissions etc.) and for the ambient concentration of particulates. The
          IARC and WHO designate airborne particulates as a Group 1 carcinogen.
          Particulates are the most harmful form (other than ultra-fines) of air
          pollution due to their ability to penetrate deep into the lungs, blood
          streams and brain, causing health problems including heart attacks,
          respiratory disease, and premature death.
        </p>
      </div>
    </div>
  );
};

export default EmissionScreen;
