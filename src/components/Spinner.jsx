import React from "react";
import "../styles/css/spinner.css";

function Spinner() {
	return (
		<div className="lds-ring">
			<div></div>
			<div></div>
			<div></div>
			<div></div>
		</div>
	);
}

export default Spinner;
