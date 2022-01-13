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
    </div>
  );
};

export default EmissionScreen;
