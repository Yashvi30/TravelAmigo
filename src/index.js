import React from "react";
import ReactDOM from "react-dom";

import FirebaseWrapper from "./lib/FirebaseWrapper";
import Router from "./routes/Router";

import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <FirebaseWrapper>
      <Router />
    </FirebaseWrapper>
  </React.StrictMode>,
  document.getElementById("root")
);
