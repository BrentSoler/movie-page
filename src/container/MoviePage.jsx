import React from "react";
import "../styles/css/header-style.css";

import Header from "../components/Header";
import MoviePageCard from "../components/MoviePageCard";

function MoviePage() {
	return (
		<div>
			<Header page="page" />
			<MoviePageCard />
		</div>
	);
}

export default MoviePage;
