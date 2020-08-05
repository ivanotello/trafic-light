export default TraficLight;
import React from "react";
import ReactDOM from "react-dom";
import "bootstrap";
import "../styles/index.scss";

import TraficLight from "./component/TraficLight.js";

ReactDOM.render(<TraficLight />, document.querySelector("#app"));
