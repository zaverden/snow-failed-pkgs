import "react-s-alert/dist/s-alert-css-effects/slide.css";
import "react-s-alert/dist/s-alert-default.css";
import React from "react";
import Alert from "react-s-alert";

export function Alerter() {
  return (
    <div>
      <Alert effect="slide" timeout={5000} />
      <button
        type="button"
        onClick={() => Alert.success("Hello there")}
      >
        Click
      </button>
    </div>
  );
}

// if I use Alert.default - it works
/*
export function Alerter() {
  return (
    <div>
      <Alert.default effect="slide" timeout={5000} />
      <button
        type="button"
        onClick={() => Alert.default.success("Hello there")}
      >
        Click
      </button>
    </div>
  );
}
*/