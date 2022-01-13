import React from "react";

const FrameScreen = (iframeLink) => {
  return (
    <div>
      {/* <iframe
        title="tree-map"
        style={{ width: "100%", height: "80vh" }}
        frameBorder="0"
        scrolling="no"
        allowFullScreen
        src="https://arcg.is/OnKfO0"
      ></iframe> */}
            <iframe
        title="tree-map"
        style={{ width: "100%", height: "80vh" }}
        frameBorder="0"
        scrolling="no"
        allowFullScreen
        src="https://arcg.is/OnKfO0"
      ></iframe>

      {/* <iframe
        // width="500"
        // height="400"
        style={{ width: "100%", height: "80vh" }}
        frameborder="0"
        scrolling="no"
        marginheight="0"
        marginwidth="0"
        title="Project S7"
        src={iframeLink}
      ></iframe> */}
      {/* <iframe
        title="tree-map"
        style={{ width: "100%", height: "80vh" }}
        frameBorder="0"
        scrolling="no"
        allowFullScreen
        src="https://arcg.is/0jO0OS"
      ></iframe>
      <iframe
        title="tree-map-2"
        width="500"
        height="400"
        frameBorder="0"
        scrolling="no"
        allowFullScreen
        src="https://arcg.is/OnKfO0"
      ></iframe> */}
    </div>
  );
};

export default FrameScreen;
