import React, { useState } from "react";

function Movie(props) {
	const [showContent, setContent] = useState(false);

	return (
		<div
			className="movie-card"
			onMouseEnter={() => {
				setContent(true);
			}}
			onMouseLeave={() => {
				setContent(false);
			}}
		>
			<div className="movie-card--content">
				<img src={`https://image.tmdb.org/t/p/w500${props.path}`} alt={`Poster for ${props.title}(${props.date})`} />
				<div className="movie-card--content__text">
					<h3 className="movie--title">{props.title}</h3>
					{showContent && <p className="movie--release-date">{props.date}</p>}
					{showContent && <p className="movie--ratings">Ratings: {props.rating}/10</p>}
				</div>
			</div>
		</div>
	);
}

export default Movie;
