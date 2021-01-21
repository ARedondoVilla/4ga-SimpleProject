import React, { Component } from "react";
import "../../styles/card.scss";

export const Card = () => {
	return (
		<div className="card" id="width-card">
			<div className="card-body">
				<h5 className="card-title">Card title</h5>
				<h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
				<p className="card-text text-truncate">
					Some quick example text to build on the card title and make up the bulk of
				</p>
				<a href="#" className="card-link">
					Card link
				</a>
				<a href="#" className="card-link">
					Another link
				</a>
			</div>
		</div>
	);
};
