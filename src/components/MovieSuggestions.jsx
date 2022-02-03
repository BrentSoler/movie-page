import React, { useState, useEffect } from "react";
import api from "./api/movies_data";
import { Link, useParams } from "react-router-dom";

import Movie from "./MovieCard";
import Spinner from "./Spinner";

function MovieSuggestions(props) {
	const [movies, setMovies] = useState([]);

	const params = useParams();

	const loadSimmilar = async () => {
		try {
			const res = await api.get(`/movie/${props.id}/similar`, {
				params: {
					api_key: "1e65a75453d700acd79735c6be8a93f9",
					language: "en-US",
				},
			});
			setMovies(res.data.results);
		} catch (err) {
			console.log(err.message);
		}
	};

	useEffect(() => {
		setMovies([]);
		loadSimmilar();
	}, [params]);

	return (
		<div className="suggestions">
			<h1 className="simmilar">Simillar Movies:</h1>
			{movies !== undefined ? (
				movies.slice(0, 4).map((movie) => (
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
			) : (
				<Spinner />
			)}
		</div>
	);
}

export default MovieSuggestions;
