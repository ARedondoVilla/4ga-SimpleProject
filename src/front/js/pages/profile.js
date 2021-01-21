import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { Card } from "../component/card";

export const Profile = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container mt-5">
			<h1>Perfil de usuario</h1>
			<div className="row no-gutters justify-content-center">
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
			</div>
		</div>
	);
};
