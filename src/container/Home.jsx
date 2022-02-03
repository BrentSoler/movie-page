import React, { useState, useEffect } from "react";

import Jumbo from "../components/Jumbo";
import MovieContainer from "../components/MovieContainer";
import Header from "../components/Header";

function Home() {
	return (
		<div>
			<div className="gradient__bg">
				<Header page="home" />
				<Jumbo />
			</div>
			<MovieContainer />
		</div>
	);
}

export default Home;
