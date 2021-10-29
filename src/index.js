import React from "react";
import ReactDOM from "react-dom";

import FirebaseWrapper from "./lib/FirebaseWrapper";
import Router from "./routes/Router";

ReactDOM.render(
  <React.StrictMode>
    <FirebaseWrapper>
      <Router />
    </FirebaseWrapper>
  </React.StrictMode>,
  document.getElementById("root")
);
