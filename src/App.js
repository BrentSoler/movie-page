import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./styles/css/index.css";

import Home from "./container/Home";
import MoviePage from "./container/MoviePage";
import Search from "./container/Search";

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/movie/:id" element={<MoviePage />} />
				<Route path="/search/:id/:page" element={<Search />} />
			</Routes>
		</Router>
	);
}

export default App;
