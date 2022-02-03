import React, { useEffect, useState } from "react";
import "../styles/css/movie-page-header.css";
import api from "./api/movies_data";
import { useParams, Link } from "react-router-dom";

import MovieSuggestions from "./MovieSuggestions";
import Spinner from "./Spinner";

function MoviePageCard() {
	const [title, setTitle] = useState(null);
	const [date, setDate] = useState(null);
	const [rating, setRating] = useState(null);
	const [genre, setGenre] = useState([]);
	const [plot, setPlot] = useState(null);
	const [img, setImg] = useState(null);
	const [time, setTime] = useState(null);
	const [company, setCompany] = useState([]);
	const [vidKey, setKey] = useState("");

	const params = useParams();

	const loadMovie = async () => {
		try {
			const res = await api.get(`/movie/${params.id}`, {
				params: {
					api_key: "1e65a75453d700acd79735c6be8a93f9",
					language: "en-US",
				},
			});

			const resVid = await api.get(`/movie/${params.id}/videos`, {
				params: {
					api_key: "1e65a75453d700acd79735c6be8a93f9",
					language: "en-US",
				},
			});
			setKey(resVid.data.results[0].key);
			setTitle(res.data.title);
			setDate(res.data.release_date);
			setRating(res.data.vote_average);
			setGenre(res.data.genres);
			setPlot(res.data.overview);
			setImg(res.data.poster_path);
			setTime(res.data.runtime);
			setCompany(res.data.production_companies);
		} catch (err) {
			console.log(err.message);
		}
	};

	useEffect(() => {
		setKey("");
		setTitle("");
		setDate("");
		setRating("");
		setGenre([]);
		setPlot("");
		setImg("");
		setTime("");
		setCompany([]);

		loadMovie();
	}, [params]);

	return (
		<div className="movie-page--card">
			<div className="movie-page-card">
				{title && plot && img ? (
					<div className="">
						<Link to={`/search/discover/1`}>
							<button className="btn--page__movie">
								{`<<`}
								<span>Go back to search</span>
							</button>
						</Link>
						<div className="movie-card__frow">
							<div className="movie-card__img-container">
								<a href={`https://www.youtube.com/watch?v=${vidKey}`} target="_blank" rel="noreferrer">
									<img src={`https://image.tmdb.org/t/p/w500/${img}`} alt={`poster for ${title} (${date})`} />
									view a clip of the movie
								</a>
							</div>
							<div className="movie-card__text-content">
								<div className="text-content__title">
									<h4 className="context">Title:</h4>
									<h1 className="title">{title}</h1>
								</div>
								<div className="text-content__date">
									<h4 className="context">Release Date:</h4>
									<h2 className="date">{date}</h2>
								</div>
								<div className="connect">
									<div className="text-content__ratings">
										<h4 className="context">Ratings:</h4>
										<h2 className="ratings">{rating}/10</h2>
									</div>
									<div className="text-content__ratings">
										<h4 className="context">Runtime:</h4>
										<h2 className="ratings">{time}mins.</h2>
									</div>
								</div>
								<div className="text-content__genre">
									<h4 className="context">Genre:</h4>
									<div className="genre-container">
										{genre.map((genre) => (
											<h4 className="genre" key={genre.id}>
												{genre.name}
											</h4>
										))}
									</div>
								</div>
								<div className="text-content__genre">
									<h4 className="context">Production:</h4>
									<div className="genre-container">
										{company.map((genre) => (
											<h4 className="genre" key={genre.id}>
												{genre.name}
											</h4>
										))}
									</div>
								</div>
							</div>
						</div>
						<div className="plot-container">
							<h1 className="context">Plot:</h1>
							<p className="plot">{plot}</p>
						</div>
					</div>
				) : (
					<Spinner />
				)}
			</div>

			<MovieSuggestions id={params.id} />
		</div>
	);
}

export default MoviePageCard;
