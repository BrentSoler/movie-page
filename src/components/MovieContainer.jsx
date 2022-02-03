import React, { useState, useEffect } from "react";
import "../styles/css/movies.css";
import api from "./api/movies_data";
import { Link } from "react-router-dom";

import Movie from "./MovieCard";
import Spinner from "./Spinner";

function MovieContainer() {
	const [movies, setMovies] = useState([]);

	useEffect(() => {
		const loadMovies = async () => {
			try {
				const res = await api.get("/discover/movie", {
					params: {
						api_key: "1e65a75453d700acd79735c6be8a93f9",
						language: "en-US",
						sort_by: "popularity.desc",
						page: "1",
					},
				});
				setMovies(res.data.results);
			} catch (err) {
				console.log(err.message);
			} finally {
				console.log("bat ka natingin sa dev tools");
			}
		};
		loadMovies();
	}, []);

	return (
		<div className="movies-container">
			<div className="movies-container__flex">
				<div className="flex--content">
					<h1 className="movies--header">Popular Movies Right Now!</h1>
				</div>
				<div className="movie__list">
					{!movies ? (
						<Spinner />
					) : (
						movies.slice(0, 6).map((movie) => (
							<Link
								to={`/movie/${movie.id}`}
								key={movie.id}
								onClick={() => {
									window.scrollTo({ top: 0, behavior: "smooth" });
								}}
							>
								<Movie key={movie.id} title={movie.original_title} path={movie.poster_path} date={movie.release_date} rating={movie.vote_average} />
							</Link>
						))
					)}
				</div>
			</div>
		</div>
	);
}

export default MovieContainer;
