import React from "react";

import "../styles/css/jumbo-style.css";
import Input from "./Input";

function Jumbo() {
	return (
		<div className="jumbo-container">
			<div className="jumbo__content">
				<div className="jumbo--text">
					<h1 className="main__text">Lorem ipsum dolor sit amet.</h1>
					<h3 className="sub__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis esse recusandae maxime atque.</h3>
				</div>
				<Input />
			</div>
		</div>
	);
}

export default Jumbo;
