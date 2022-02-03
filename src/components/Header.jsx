import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import NavBar from "./NavBar";
import "../styles/css/header-style.css";

function Header(props) {
	const [navState, setNavState] = useState(false);
	const [headerState, setHeaderState] = useState(false);

	const HeaderAnimation = () => {
		return window.scrollY > 40 ? setHeaderState(true) : setHeaderState(false);
	};

	useEffect(() => {
		window.addEventListener("scroll", HeaderAnimation);

		return () => {
			window.removeEventListener("scroll", HeaderAnimation);
		};
	}, []);

	return (
		<header className="main-header" data-header={headerState} data-page={props.page}>
			<div className="logo">
				<Link to="/" className="link">
					<h1>MOVIES.</h1>
				</Link>
			</div>
			<div
				className="hamburger"
				onClick={() => {
					setNavState(!navState);
				}}
				data-toggled={navState}
			>
				<div className="mainburger"></div>
			</div>

			<NavBar toggled={navState} />
		</header>
	);
}

export default Header;
