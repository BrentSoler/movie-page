import React from "react";
import "../styles/css/movie-page-header.css";
import "../styles/css/search-style.css";

import Header from "../components/Header";
import SearchContainer from "../components/SearchContainer";

function Search() {
	return (
		<div>
			<Header page="search" />
			<SearchContainer />
		</div>
	);
}

export default Search;
