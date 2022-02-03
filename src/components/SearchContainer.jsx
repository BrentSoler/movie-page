import React, { useState, useEffect } from "react";
import "../styles/css/jumbo-style.css";
import api from "./api/movies_data";
import { Link, useParams } from "react-router-dom";

import Input from "./Input";
import MovieCard from "./MovieCard";
import PgButtons from "./PgButtons";
import Spinner from "./Spinner";

function SearchContainer() {
	const [movies, setMovies] = useState(null);
	const [pages, setPages] = useState([]);
	const [view, setView] = useState(true);

	const params = useParams();

	const loadDiscoverMovie = async () => {
		try {
			const res = await api.get("/discover/movie", {
				params: {
					api_key: "1e65a75453d700acd79735c6be8a93f9",
					language: "en-US",
					sort_by: "popularity.desc",
					page: params.page,
				},
			});
			setPages([]);
			for (let i = 0; i < 10; i++) {
				setPages((old) => {
					return [...old, { num: i + 1 }];
				});
			}
			setMovies(res.data.results);
			setView(false);
		} catch (err) {
			console.log(err.message);
		}
	};

	const loadMoviesSearch = async () => {
		try {
			const res = await api.get("/search/movie", {
				params: {
					api_key: "1e65a75453d700acd79735c6be8a93f9",
					language: "en-US",
					query: params.id,
					sort_by: "popularity.desc",
					page: params.page,
				},
			});
			setPages([]);
			for (let i = 0; i < (res.data.total_pages > 20 ? 20 : res.data.total_pages); i++) {
				setPages((old) => {
					return [...old, { num: i + 1 }];
				});
			}

			setView(true);
			setMovies(res.data.results);
		} catch (err) {
			console.log(err.message);
		}
	};

	useEffect(() => {
		setMovies(null);
		params.id !== "discover" ? loadMoviesSearch() : loadDiscoverMovie();
	}, [params]);

	return (
		<div className="search-container">
			<div className="search-card">
				<Input />
				{view && <h2>{`Results for: ${params.id}`}</h2>}
				{!view && <h2>{`Discover Movies`}</h2>}
				<div className="search-card--movie-container">
					{!movies ? (
						<Spinner />
					) : (
						movies.map((movie) => (
							<Link
								to={`/movie/${movie.id}`}
								key={movie.id}
								onClick={() => {
									window.scrollTo({ top: 0, behavior: "smooth" });
								}}
							>
								<MovieCard key={movie.id} title={movie.original_title} path={movie.poster_path} date={movie.release_date} rating={movie.vote_average} />
							</Link>
						))
					)}
				</div>
			</div>
			<div className="search-card--btn">
				{pages.map((page) => (
					<PgButtons selected={page.num == params.page ? "true" : "false"} pgnum={page.num} type={params.id} key={page.num} />
				))}
			</div>
		</div>
	);
}

export default SearchContainer;
