import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { GlobalProviders } from "~/components/root/GlobalProviders";

ReactDOM.render(
  <React.StrictMode>
    <GlobalProviders />
  </React.StrictMode>,
  document.getElementById("root")
);
