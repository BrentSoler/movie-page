import React from "react";

import { Link } from "react-router-dom";

function PgButtons(props) {
	return (
		<div>
			<Link
				className="link"
				to={props.type != "discover" ? `/search/${props.type}/${props.pgnum}` : `/search/discover/${props.pgnum}`}
				onClick={() => {
					window.scrollTo({
						top: 0,
						behavior: "smooth",
					});
				}}
			>
				<h2 className="btn--page" data-selected={props.selected}>
					{props.pgnum}
				</h2>
			</Link>
		</div>
	);
}

export default PgButtons;
