import React from "react";

const EmissionScreen = () => {
  return (
    <div>
      <iframe
        title="tree-map"
        style={{ width: "100%", height: "80vh" }}
        frameBorder="0"
        scrolling="no"
        allowFullScreen
        src="//learngis2.maps.arcgis.com/apps/Embed/index.html?webmap=44abf032f31d48be8ce2b8c4748a384d&extent=2.1724,48.8008,2.5511,48.9149&zoom=true&previewImage=false&scale=true&search=true&searchextent=true&legendlayers=true&disable_scroll=true&theme=light"
      ></iframe>
    </div>
  );
};

export default EmissionScreen;
