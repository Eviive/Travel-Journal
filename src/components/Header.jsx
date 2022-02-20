import React from "react";

import logo from "../images/earth.svg";

export default function header() {
	return (
		<header>
			<img src={logo} alt="Earth logo" />
			<h3>my travel journal</h3>
		</header>
	);
}