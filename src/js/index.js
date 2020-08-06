export default TraficLight;
import React, { useState } from "react";
import ReactDOM from "react-dom";
import "bootstrap";
import "../styles/index.scss";

const TraficLight = props => {
	const [light, setLight] = useState(null);

	const changeLight = selectedLight => {
		setLight(selectedLight);
	};
	let redSelected = "";
	if (light == "red") {
		redSelected = "selected";
	}
	let yellowSelected = "";
	if (light == "yellow") {
		yellowSelected = "selected";
	}
	let greenSelected = "";
	if (light == "green") {
		greenSelected = "selected";
	}

	return (
		<div>
			<div id="pole" />
			<div id="lightBox">
				<div
					className={"red light " + redSelected}
					onClick={() => changeLight("red")}
				/>
				<div
					className={"yellow light " + yellowSelected}
					onClick={() => changeLight("yellow")}
				/>
				<div
					className={"green light " + greenSelected}
					onClick={() => changeLight("green")}
				/>
			</div>
		</div>
	);
};

ReactDOM.render(<TraficLight />, document.querySelector("#app"));
