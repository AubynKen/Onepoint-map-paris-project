import React, { useState } from "react";
import { Spinner } from "react-bootstrap";

const TreeScreen = () => {
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
        title="tree-map"
        style={{ width: "100%", height: "80vh" }}
        frameBorder="0"
        scrolling="no"
        onLoad={hideSpinner}
        allowFullScreen
        src="https://arcg.is/0jO0OS"
      ></iframe>
    </div>
  );
};

export default TreeScreen;
