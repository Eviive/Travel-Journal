import React from "react";

import pin from "../images/location.svg";

export default function Card(props) {
	return (
		<>
			<div className="card">
				<img src={require(`../images/${props.imgURL}`)} alt={props.imgAlt} />
				<div className="card-content">
					<div className="card-infos">
						<img src={pin} alt="Location pin" />
						<h2>{props.location}</h2>
						<a href={props.mapsURL} target="_blank">View on Google Maps</a>
					</div>
					<h1 className="card-title">{props.title}</h1>
					<h4 className="card-timestamp">{props.startDate}</h4>
					<p>{props.description}</p>
				</div>
			</div>
			<hr />
		</>
	);
}