import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<div className="p-2 flex-grow-1 bd-highlight">
				<Link to="/">Twitter</Link>
			</div>
			<div className="p-2 bd-highlight">
				<Link to="/profile">Perfil</Link>
			</div>
			<div className="p-2 bd-highlight">Seguidores</div>
			<div className="p-2 bd-highlight">Seguidos</div>
			<div className="p-2 bd-highlight">Likes</div>
			<div className="p-2 bd-highlight">Retweet</div>
		</nav>
	);
};
