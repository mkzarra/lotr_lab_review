import React from 'react';

export default function Movie(props) {
	return (
		<div>
			<h1>Lord of the Rings: {props.title}</h1>
			<p>{props.hours}h {props.minutes}min</p>
		</div>
	);
}
