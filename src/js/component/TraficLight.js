import React from "react";

export default class TraficLight extends React.Component {
	render() {
		return (
			<div>
				<div id="pole" />
				<div id="lightBox">
					<div className="red light" />
					<div className="yellow light" />
					<div className="green light" />
				</div>
			</div>
		);
	}
}
