import React from "react";
import { Link } from "react-router-dom";

function NavBar(props) {
	return (
		<ul className="main-navbar" data-toggled={props.toggled}>
			<Link to="/" className="line">
				<li>Home</li>
			</Link>
			<Link to="/search/discover/1" className="line">
				<li>Search</li>
			</Link>
		</ul>
	);
}

export default NavBar;
