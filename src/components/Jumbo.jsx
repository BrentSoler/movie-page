import React from "react";

import "../styles/css/jumbo-style.css";
import Input from "./Input";

function Jumbo() {
	return (
		<div className="jumbo-container">
			<div className="jumbo__content">
				<div className="jumbo--text">
					<h1 className="main__text">Discover & Search for Movies</h1>
					<h3 className="sub__text">The cinema has no boundary.it is a ribbon of dream</h3>
				</div>
				<Input />
			</div>
		</div>
	);
}

export default Jumbo;
