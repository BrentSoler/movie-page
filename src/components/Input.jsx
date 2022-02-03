import React, { useState } from "react";
import { Link } from "react-router-dom";

function Input() {
	const [text, setText] = useState("");
	return (
		<form className="home-input">
			<input
				className="home__search"
				type="text"
				placeholder="Search Movies..."
				onChange={(e) => {
					setText(e.target.value);
				}}
				value={text}
			/>
			<Link to={`/search/${text}/1`}>
				<button className="home__btn">Search</button>{" "}
			</Link>
		</form>
	);
}

export default Input;
