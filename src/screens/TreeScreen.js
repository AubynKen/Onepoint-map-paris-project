import React from "react";

const TreeScreen = () => {
  return (
    <div>
      <iframe
        title="tree-map"
        style={{ width: "100%", height: "80vh" }}
        frameBorder="0"
        scrolling="no"
        allowFullScreen
        src="https://arcg.is/0jO0OS"
      ></iframe>
      <iframe
        title="emission-map"
        style={{ width: "100%", height: "80vh" }}
        frameBorder="0"
        scrolling="no"
        allowFullScreen
        src="https://learngis2.maps.arcgis.com/apps/Embed/index.html?webmap=44abf032f31d48be8ce2b8c4748a384d&extent=2.1769,48.7986,2.5556,48.914&zoom=true&previewImage=false&scale=true&details=true&legendlayers=true&active_panel=details&basemap_gallery=true&disable_scroll=true&theme=light"
      ></iframe>
    </div>
  );
};

export default TreeScreen;
