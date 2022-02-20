import React from "react";

import Card from "./Card.jsx";

import data from "../data";

export default function Main() {
	const cardElements = data.map(content =>
		<Card
			key={content.id}
			{...content}
		/>
	);
	return (
		<main>
			{cardElements}
		</main>
	);
}